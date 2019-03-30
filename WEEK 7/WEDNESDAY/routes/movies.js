const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>
{   
    res.render('movies-list')
})


router.post('/add-movie', (req, res) =>
{
    let title = req.body.title
    let description = req.body.description
    let genre = req.body.genre
    let movie = { title : title, description: description, genre : genre}
    moviesList.push(movie)
    res.redirect('movies-list')
})



// router.get('/genre', (req,res) =>
// {
//     res.render('movies-genres')
// })

module.exports = router