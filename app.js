const express = require('express');

const app = express();

//view engine
app.set('view engine', 'ejs');

//home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(8080, () => {
    console.log('Capstone project loads into port 8080')
});