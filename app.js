const path = require('path');
const express = require('express');
const indexRouter = require('./routes/index');
const formRouter = require('./routes/newNote');

const app = express();


// SET DEFAULT ENGINE FOR VIEWS
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// ROUTERS
app.use('/', indexRouter);
app.use('/new', formRouter);

app.use('*', (req, res, next) => {
    res.render('404');
})

app.listen(8000, () => {
    console.log('App is running');
});