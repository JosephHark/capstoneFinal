const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//users
const userSchema = new Schema({
    username:String,
    googleid:String,
    age:Number,
    gender:String,
    email:String,
    phone:Number,
    birthday:String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;