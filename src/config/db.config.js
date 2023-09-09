const mongoose = require("mongoose");

const connectDB = ()=>{
    return mongoose.connect(process.env.DB);
}

module.exports = connectDB;