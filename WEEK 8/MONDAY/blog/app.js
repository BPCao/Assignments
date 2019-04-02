const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')()
const path = require('path')
let app = express();
const VIEWS_PATH = path.join(__dirname + '/views');
const connectionString = "postgres://localhost:5432/blogdb"
const db = pgp(connectionString)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('mustache', mustacheExpress(VIEWS_PATH+ '/partials', '.mustache'))
app.set('view engine','mustache')
app.set('views','./views')

app.get('/', (req, res) =>
{
    res.render('index')
})

app.get('/view-all', (req, res) =>
{
    db.any('SELECT postid,body FROM blogdb')
    .then((posts) => 
    {
    res.render('view-all',{blogPost: posts})
    })
})

app.post('/add-post', (req, res) =>
{
    let comment = req.body.comment;
    db.none('INSERT INTO blogdb(body) VALUES($1)', [comment]);
    res.redirect('/')
})

app.post('/delete-post', (req, res) =>
{
    let deleteid = parseInt(req.body.deleteid)
    db.none('DELETE FROM blogdb WHERE postid = $1',[deleteid])
    .then(() => 
    {
    res.redirect('/view-all')
    })
})

app.get('/update-post', (req, res) =>
{
    db.any('SELECT postid,body FROM blogdb')
    .then((posts) => 
    {
    res.render('update-post',{blogPost: posts})
    })
})


app.post('/update-post', (req, res) =>
{
    let updatebody = req.body.updatebody    
    let updateid = parseInt(req.body.updateid)
    db.none('UPDATE blogdb SET body = $1 WHERE postid = $2',[updatebody, updateid])
    .then(() => 
    {
    res.redirect('/update-post')
    })
})

app.listen(3000, () =>
{
    console.log("Running server...")
})