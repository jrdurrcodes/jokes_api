const express = require('express')
const axios = require('axios')
const router= express.Router()
const PORT = process.env.PORT ||3000


//static files
router.use(express.static('public'))

router.use('/jokes', require('./api/jokesRoutes'))

//home page
// localhost:3000router.get('/', (req, res)=> {

router.get('/', (req, res)=> {
    let jokesOfTheDay

    axios.get('https://api.sampleapis.com/jokes/goodJokes')
    .then(resp => {
        jokesOfTheDay = resp.data[Math.floor(Math.random() *  resp.data.length)]
        
            res.render('pages/home', {
                title: 'My JoKes Website',
                name: 'Jokes',
                joke: jokesOfTheDay
            })

    })
})



module.exports = router 