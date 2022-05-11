const passport = require("passport");
const googleStrat = require("passport-google-oauth20");
const keys = require('./keys');
const User = require('../models/user-model');

passport.use(
    new googleStrat({
        //google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
    }, (accessToken, refreshToken, profile, done) => {
        //callback function
        console.log(profile)
       /* new User({

        })*/
    })
)