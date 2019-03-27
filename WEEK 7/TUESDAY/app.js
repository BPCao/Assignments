let express = require('express')
let bodyParser = require('body-parser')
let mustacheExpress = require('mustache-express')
let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

let tripList = []
let tripCounter = 0


app.get('/', (req, res) =>
{
    res.render('home')
})


app.post('/add-trip',(req,res) => 
{
    let destination = req.body.destination
    let departure = req.body.departure
    let returnDate = req.body.returnDate
    let trip = { destination : destination, departure: departure, returnDate : returnDate, tripiD : tripCounter}
    tripCounter += 1
    tripList.push(trip)
    res.redirect('/add-trip')
})


app.get('/add-trip',(req,res) => 
{
    res.render('add-trip', {tripList : tripList})
})

app.post('/deleteTrip', (req, res) =>
{
    let deleteId = req.body.deleteId
    tripList = tripList.filter ((trip) => 
    {
        return trip.tripiD != deleteId
    })
    res.redirect('/add-trip')
})

app.listen(3000, () => 
{
    console.log("Server on...")
})


