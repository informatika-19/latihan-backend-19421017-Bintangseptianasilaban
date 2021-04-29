const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/UTSPEMROGRAMAN',{
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

app.get('/profile/:username/:id', (req, res) => {
    console.log(req.params)
    res.send('Username Anda ' + req.params.username)
})

app.use('/user/', require ('./routes/User'))
app.use('/penjualan/', require('./routes/penjualan'))

app.listen(3000, () =>{
    console.log('Server Mulai')
})