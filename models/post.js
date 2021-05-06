const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{
     type:String,
     required:true
    },
    summary:{
        type:String,
        required:true
    },
    creationDate:{
        type:Date,
        default:Date.now,
        required:true
    }
})

module.exports = mongoose.model('Posts', postSchema)