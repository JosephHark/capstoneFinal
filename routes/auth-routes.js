const router = require('express').Router();

//login
router.get('/login', (req,res)=>{
    res.render('login');
});

//logout
router.get('/logout', (req,res)=>{
    res.send('logout with google')
    //res.render('logout');
});

//router with google
router.get('/login', (req,res)=>{
    res.send('login with google')
});

module.exports= router;