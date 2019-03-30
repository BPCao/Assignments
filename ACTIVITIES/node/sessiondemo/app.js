let express = require('express')
let bodyParser = require('body-parser')
let mustacheExpress = require('mustache-express')
let session = require('express-session')
let app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

app.use(session
    ({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
    }))

let users = [{name : 'bach', age: 28}]

app.get('/', (req,res) =>
{
    res.render('login')
})

app.post('/login',(req,res) => 
{
    let name = req.body.name;
    let age = req.body.age;
    let persistedUser = users.find((user) => 
    {
      return user.name == name && user.age == age;
    })
    if(persistedUser) 
    {
      // save username to the session
      if(req.session)
      {
        username = persistedUser.username
        //req.session.age = 12
        //req.session.user = { username: persistedUser.username, age: 45}
        res.redirect('/display-user')
      }
    } 
    else 
    {
      //res.redirect('/login')
      res.render('login',{message: 'Invalid Credentials!!'})
    }
})

app.get('/display-user', (req, res) =>
{
    res.render('display-user', {user})
})


app.listen(3000, () => 
{
    console.log("Server on...")
})