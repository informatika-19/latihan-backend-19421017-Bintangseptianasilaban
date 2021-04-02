const express = require ('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json({
    extended: true,
    limit:'20mb'
}))

app.use(bodyParser.urlencoded({
    extended: true,
    limit:'20mb'
}))

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/profile/:username/:id', (req, res) => {
    console.log(req.params)
    res.send('Username Anda ' + req.params.username)
})

app.get('/daerah/:namadaerah/:id', (req, res) => {
    const namadaerah = req.params.namadaerah
    const idDaerah = req.params.idDaerah
    res.send('Daerah Anda ' + req.params.namadaerah)
})

app.post('/register', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(3000, () =>{
    console.log('Server Mulai')
})