const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
//const keys = require('./config/');
const mongodb = require('./db/connect');
const port = process.env.PORT || 8080;

const app = express();

//view engine
app.set('view engine', 'ejs');

//connect to mongodb
mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
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