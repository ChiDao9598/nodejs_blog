const express = require("express");
const handlebars = require('express-handlebars');
const morgan = require("morgan");
const app = express();
const port = 8888;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan("combined"));

//Template Engine 
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resouces', 'views'));

app.get("/", (req, res) => {
    res.render('home');
});

app.get("/news", (req, res) => {
    res.render('news');
});

app.listen(port, () => console.log(`Your website is running in port ${port}`));
