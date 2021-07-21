const express = require('express');
const messages = require('../public/messages');
// const indexController = require('../controllers/controller');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Message Board',
        messages: messages
    });

});


module.exports = router;