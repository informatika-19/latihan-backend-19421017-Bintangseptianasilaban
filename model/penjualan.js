const mongoose = require('mongoose')
const Schema = mongoose.Schema

const penjualanSchema = new Schema({
    TanggalNota: {
        type: String
    },
    NomorNota: {
        type: String
    },
    Pelanggan: {
        type: String
    }
    ,
    NamaBunga: {
        type: String
    }
    ,
    TotalBelanja: {
        type: String
    }
}) 

module.exports = mongoose.model('penjualan', penjualanSchema)