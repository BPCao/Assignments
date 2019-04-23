const express = require('express');
let app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('./models')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', './views')

app.get('/',(req,res) =>
{
    models.Post.findAll().then((posts) =>
    {
        res.render('home', {posts : posts})
    })
})

app.get('/update-post/:id',(req,res) =>
{
    let updateId = parseInt(req.params.id)
    res.render('update-post', {updateId : updateId})
})

app.get('/comments/:id',(req,res) =>
{
    let id = parseInt(req.params.id);
    res.redirect('comments', {commentid : id});
})

app.get('/comments', (req,res) =>
{   
    console.log(id)
    res.render('comments', {id : id})
})



app.post('/add-post',(req,res) =>
{
    let post = 
    {
        title: req.body.title,
        body: req.body.body,
        category: req.body.category
    } 
    models.Post.create(post).then(() =>
    {
        res.redirect('/')
    })
})

app.post('/delete-post',(req,res) =>
{
    let deleteid = req.body.deleteid
    models.Post.destroy(
    {
        where: 
        {
            id: deleteid 
        }
    })
    .then(() =>
    {
        res.redirect('/')
    })
})



app.post('/update-post',(req,res) =>
{
    let id = req.body.id
    let post = 
    {
        title: req.body.title,
        body: req.body.body,
        category: req.body.category
    }
    models.Post.findOne(
    { 
        where : {id : id}
    })
    .then((oldPost) =>
    {
        oldPost.update(post)
    })
    .then(()=>
    {
        res.redirect('/')
    })
})

app.listen(3000, () =>
{
    console.log("Running server...");
})