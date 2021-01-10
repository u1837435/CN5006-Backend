let mongoose= require('mongoose')
const CovidScheme= new mongoose.Schema({
    County:{
     type:String,
     required:true
    },
    State:String,
    cases:Number,
    death:String,
    date:String
})

module.exports= mongoose.model('abcmodel',CovidScheme,
'CovidCollection')