const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kegiatanSchema = new Schema({
    NamaKegiatan: {
        type: String
    },
    Deskripsi: {
        type: String
    },
    Waktu: {
        type: String
    }
}) 

module.exports = mongoose.model('Kegiatan', kegiatanSchema)