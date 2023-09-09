const mongoose = require("mongoose");

var current = new Date();
const timeStamp = new Date(Date.UTC(current.getFullYear(), 
current.getMonth(),current.getDate(),current.getHours(), 
current.getMinutes(),current.getSeconds(), current.getMilliseconds()));
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required : true,
        unique:true
    },
    phone:{
        type:Number,
        required : true,
        unique:true,

    },
    password:{
        type:String,
        required:true
    },
    createdAt : {
        type: Date,
        default : timeStamp
    },
    activated:{
        type:Boolean,
        default:false
    }

})

const User = mongoose.model("User",userSchema);
module.exports = User;