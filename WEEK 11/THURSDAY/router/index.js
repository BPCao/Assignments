const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

let bookList = [{name: 'book 1'}]


app.get('/api/booklist',(req,res) =>
{
    res.json(bookList)
})

app.post('/api/booklist',(req,res) =>
{
    bookList.push(res)
    res.send('success')
})


app.listen(8080, () =>
{
    console.log('Running server...')
})