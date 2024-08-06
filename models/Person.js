const mongoose = require("mongoose");

const schemaPerson=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type: Number,
        required:true,
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    }
})

const person= mongoose.model('person',schemaPerson);
module.exports=person;

