const express = require('express')
const router = express.Router()
const axios = require('axios')


// create count
let count


axios.get('https://api.sampleapis.com/jokes/goodJokes')
.then(res => count = res.data.length)

// localhost: 3000 //jokes
router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/jokes/goodJokes'

    axios.get(url).then(resp => {
        res.render('pages/jokes', {
            title: ' a lot of jokes',
            name: 'a lot of jokes',
            data: resp.data
        })
    })
})

//type path
//localhost3000/jokes/:type
router.get('/type/:type', (req, res)=> {

    const type = req.params.type
    const url = 'https://api.sampleapis.com/jokes/goodJokes'

    let typeArr

    axios.get(url)
        .then(resp => typeArr = resp.data.filter(item => item.type ==type))
        .then(tyreArr => {
            res.render('pages/jokes', {
                title: type,
                name: `${type} jokes`,
                data: typeArr
            })
    })    
})

// localhost:3000/jokes/id
router.get ('/:id', (req, res)=> {

    const id = req.params.id
    const url = `https://api.sampleapis.com/jokes/goodJokes/${id}`

    const trollArr = [
        'troll1.gif',
        'troll2.gif',
        'troll3.gif'
    ]
        
    const randomTroll = trollArr[Math.floor(Math.random() * trollArr.length)]


    axios.get(url).then(resp => {
        res.render('pages/jokesSingle', {
            title: resp.data.setup,
            name: resp.data.setup,
            data: resp.data.setup,
            data: resp.data,
            count, 
            randomTroll
        })
    })
})


module.exports = router