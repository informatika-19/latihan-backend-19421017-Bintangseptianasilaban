const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/latihan',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() =>{
  console.log('berhasil connect ke database')
}).catch((e) =>{
  console.log(e)
  console.log('gagal connect ke database')
})



app.use(bodyParser.json({
    extended: true,
    limit:'20mb'
}))

app.use(bodyParser.urlencoded({
    extended: true,
    limit:'20mb'
}))

app.get('/', (req, res) => {
    res.send('<h1>Bintang Septiana</h1>')
})

app.get('/profile/:username/:id', (req, res) => {
    console.log(req.params)
    res.send('Username Anda ' + req.params.username)
})

app.get('/daerah/:namadaerah/:id', (req, res) => {
    const namadaerah = req.params.namadaerah
    const idDaerah = req.params.idDaerah
    res.send('Daerah Aanda ' + req.params.namadaerah)
})
//req body
//app.post('/register', (req, res) => {
    //res.json(req.body)
    //console.log(req.body)
//})
//const userRoutes = require('./routes/User'))
//app,use('/user/', userRoutes
app.use('/user/', require ('./routes/User'))
app.use('/kegiatan/', require('./routes/Kegiatan'))

app.listen(3000, () =>{
    console.log('Server Mulai')
})