const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express()

app.use(bodyParser.urlencoded({ extended: false })) // Uses bodyParser for mustache
app.engine('mustache', mustacheExpress()); // Instructs express to use the mustache engine
app.set('views','./views') // 1st argument is a reserved keyword, 2nd is the directory location/name
app.set('view engine','mustache') // extension will be .mustache


taskList = []

app.get ('/', (req, res) =>
{
    res.render('index', {taskList : taskList})
})

app.post ('/todos', (req, res) =>
{
  let title = req.body.title
  let priority = req.body.priority
  let datecompleted = req.body.datecompleted
  let task = { title : title, priority : priority, datecompleted : datecompleted}
  console.log(task)
  taskList.push(task)
  res.redirect('/')
})

app.listen(3000, () =>
{
    console.log('Server is running...')
})
