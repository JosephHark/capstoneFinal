const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

//view engine
app.set('view engine', 'ejs');

//connect to mongodb
mongoose.connect(keys.mongoose.dbURI, ()=>{
    
});


//set up routes
app.use('/auth', authRoutes);

//home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(8080, () => {
    console.log('Capstone project loads into port 8080')
});