const passport = require("passport");
const googleStrat = require("passport-google-oauth20");
const keys = require('./keys');

passport.use(
    new googleStrat({
        //google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
    }, (accessToken, refreshToken, profile, done) => {
        //callback function
        console.log('callback function fired')
    })
)