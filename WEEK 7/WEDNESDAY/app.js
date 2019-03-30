const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
var session = require('express-session')
const VIEWS_PATH = path.join(__dirname + '/views');
const moviesRoute = require('./routes/movies.js')
let movie1 = {title : 'SpiderMan', description : 'Fights Goblin', genre : 'Action'}
let movie2 = {title : 'Batman', description : 'Fights Joker', genre : 'Action'}
let moviesList = [movie1, movie2]


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/movies', moviesRoute)
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views',VIEWS_PATH)
app.set('view engine','mustache')



app.get('/', (req, res) =>
{
    res.render('index')
})

app.post('/login',(req,res) =>
{
    let username = req.body.username
    let password = req.body.password
    let persistedUser = users.find((user) => 
    {
      return user.username == username && user.password == password
    })
    if(persistedUser) 
    {
      // save username to the session
      if(req.session)
      {
        req.session.username = persistedUser.username
        res.redirect('/home')
      }
    } else 
    {
      res.render('login',{message: 'Invalid Credentials!!'})
    }
})






app.listen (3000, () =>
{
    console.log("Running...")
})