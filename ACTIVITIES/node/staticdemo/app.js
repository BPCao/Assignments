let express = require('express')
let mustacheExpress = require('mustache-express')
let app = express()

app.use(express.static('public'))
app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')




app.get('/', (req, res) =>
{
    res.render('staticdemo')
})

app.listen(3000, () =>
{
    console.log("Running...")
})