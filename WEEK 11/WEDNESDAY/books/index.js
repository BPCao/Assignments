const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())

let books = [{name: 'asoiaf'}]

app.get('/',(req,res) =>
{
    res.json({name: 'asoiaf'})
})

app.get('/api/books',(req,res) =>
{
    res.json(books)
})

app.post('/api/books',(req,res) =>
{
    let name = req.body.name
    console.log(name)
    books.push({name: name})
    res.redirect('/api/books')
})

app.listen(8080, () =>
{
    console.log("Running server...")
})

