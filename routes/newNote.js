const express = require('express');
const messages = require('../public/messages');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('form')
})

router.post('/', (req, res, next) => {
    var date = new Date()
    var currentDay = date.getDay()
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


    const newMessage = {
        title: req.body.title,
        description: req.body.description,
        username: req.body.username,
        date: days[currentDay] + ' ' + date.toLocaleTimeString(),
    };
    messages.unshift(newMessage);
    res.redirect('/')
})

module.exports = router;