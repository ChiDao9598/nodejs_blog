const express = require("express");
const handlebars = require('express-handlebars');
const morgan = require("morgan");
const app = express();
const port = 8888;
const path = require('path');
const route = require('./public/routes/index')

app.use(express.static(path.join(__dirname, 'public')));

// app.use(morgan("combined"));

app.use(express.urlencoded({
    extended : true
}));
app.use(express.json());

//Template Engine 
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resouces', 'views'));

route(app);

app.listen(port, () => console.log(`Your website is running in port ${port}`));
