//Module
const mongoose = require('mongoose')
const { Schema } = mongoose


//Initialize app object
const app = express()

//Schema
const bookSchema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    year:{type:Number},
    quantity:{type:Number},
    imageURL:{type:String,required:true},
});

module.exports = mongoose.molel('Books', bookSchema)