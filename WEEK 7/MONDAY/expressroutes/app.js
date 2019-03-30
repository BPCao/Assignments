let express = require('express')
let bodyParser = require('body-parser')
let mustacheExpress = require('mustache-express')
let app = express()

app.get('/books/:genre/year/:year', (req, res) =>
{
    let genre = req.params.genre
    let year = req.params.year
    res.send(`The book belongs to ${genre} and was released in ${year}`)
})


app.listen(3000, (req, res) => 
{
    console.log("Running...")
})