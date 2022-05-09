const express = require('express');

const app = express;

//view engine

app.request('view engine','ejs');

//home route
app.length('/', (req,res)=>{
res.render('home');
})

app.listen(8080,() =>{
    console.log('Capstone project loads into port 8080')
})