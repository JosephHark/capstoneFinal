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
        User.findOne({
            googleid: profile.id
        }).then((currentUser) => {
            if (currentUser) {
                //already havea a user
                console.log('Current user is' + currentUser)

            } else {
                //create a new user
                new User({
                    username: profile.displayName,
                    googleid: profile.id
                }).save().then((newUser) => {
                    console.log('new user created' + newUser)
                })
            }
        })
    })
)