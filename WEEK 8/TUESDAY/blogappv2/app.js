const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')()
const session = require('express-session');
const path = require('path')
let app = express();
const VIEWS_PATH = path.join(__dirname + '/views');
const connectionString = "postgres://localhost:5432/blogindb"
const db = pgp(connectionString)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('mustache', mustacheExpress(VIEWS_PATH+ '/partials', '.mustache'))
app.set('view engine','mustache')
app.set('views','./views')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

//Allow the users to create posts 
//Allow the users to post comments 
//Create a page to show all posts from the database. Each post will also display the number of comments available for that post. 
//Create a post details page where you will display the details about the post and also the comments associated with the post. 
//Add the ability to delete a post and comment 

app.get('/', (req,res) =>
{
    db.any('SELECT * FROM posts')
    .then((posts) =>
    {
    res.render('view-posts', {posts : posts})
    })
})






















app.post('/new-post', (req,res) =>
{
    let newPost = req.body.newPost
    db.none('INSERT INTO posts(post) VALUES ($1)', [newPost])
    .then(() =>
    {
        res.redirect('/view-posts')
    })
})

// app.post('/register-user', (req,res) =>
// {
//     let userName = req.body.userName
//     db.none('INSERT INTO users(username) VALUES($1)', [userName])
//     .then((user) => 
//     {
//     console.log(user)
//     res.redirect('/login')
//     })
// })

// app.post('/login-user',(req,res) => 
// {
//     let userLogin = req.body.userLogin
//     db.one('SELECT $1 FROM users', [userLogin])
//     .then(user =>
//     {
//         console.log(user)
//         if(req.session)
//         {
//             req.session.username = user.username
//             res.redirect('/index')
//             console.log(user)
//         }
//     })
//     .catch(() => 
//     {
//         res.redirect('/login')
//     })
// })
  
// app.get('/login', (req,res) =>
// {
//     res.render('login')
// })

// app.get('/view-posts', (req,res) =>
// {
//     db.any('SELECT * FROM posts')
//     .then((posts) =>
//     {
//     res.render('view-posts', {posts : posts})
//     })
// })

app.listen(3000, () =>
{
    console.log("Running server...")
})