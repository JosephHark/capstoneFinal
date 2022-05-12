const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const authCheck = (req, res, next) => {
    if (!req.user) {
        //if user is not logined in
        res.redirect('/auth/login');
    } else {
        //if logged in
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.render('profile', {user:req.user});
});

router.get('/contact', (req, res) => {
    res.render('contact', {user:req.user});
});

router.get('/item', (req, res) => {
    res.render('item', {user:req.user});
});

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
module.exports = router;