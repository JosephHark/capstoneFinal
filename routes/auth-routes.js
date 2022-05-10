const router = require('express').Router();
const passport = require('passport');
//login
router.get('/login', (req, res) => {
    res.render('login');
});

//logout
router.get('/logout', (req, res) => {
    res.send('logout with google')
    //res.render('logout');
});

//router with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

module.exports = router;