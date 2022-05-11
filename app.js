const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
//const keys = require('./config/');
//const mongodb = require('./db/connect');

const app = express();

//view engine
app.set('view engine', 'ejs');

//connect to mongodb
mongoose.connect('mongodb+srv://Joseph:adJ2YIPio1vtx76Q@cluster0.oc51x.mongodb.net/toDoFinal');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})


//set up routes
app.use('/auth', authRoutes);

//home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(8080, () => {
    console.log('Capstone project loads into port 8080')
});