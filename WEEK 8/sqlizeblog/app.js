const express = require('express')
const mustacheExpress = require('mustache-express')
let app = express()
const models = require('./models')
const bodyParser = require('body-parser');
const path = require('path')
const VIEWS_PATH = path.join(__dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('mustache', mustacheExpress(VIEWS_PATH+ '/partials', '.mustache'))
app.set('view engine','mustache')
app.set('views','./views')

app.get('/',(req,res) =>
{
    models.Post.findAll().then((posts) =>
    {
        res.render('home', {posts : posts})
    })
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

app.get('/update-post/:id',(req,res) =>
{
    let updateId = parseInt(req.params.id)
    res.render('update-post', {updateId : updateId})
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

app.get('/comment-post/:id',(req,res) =>
{
    let id = parseInt(req.params.id)
    res.render('comment-post', {id : id})
})

app.post('/comment-post',(req,res) =>
{   
    console.log(req.body)
    let body = req.body.body
    let id = req.body.id
    models.Post.findByPk(2,{
        include: [
        {
            model: models.Comment, // include the model review
            as: 'comments' // alias to access review is reviews
        }
        ]
      })
      .then((post) => 
      {
        //post.comment.update(body)
        console.log(body)
      })
})























// app.post('/filter-posts',(req,res) =>
// {
//     let filter = req.body.filter
//     models.Post.findAll(
//     {
//         where : 
//         {
//             category : filter
//         }
//     })
//     .then((posts) =>
//     res.render('/filter-posts', {posts : posts}))
// })

// app.get('/filter-posts',(req,res) =>
// {
//     res.render('filter')
// })

app.listen(3000,function(req,res){
    console.log("Server started..")
  })
