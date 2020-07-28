const ejs = require('ejs')
const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const error404 = require('./controllers/error');

var url = "http://api.openweathermap.org/data/2.5/weather?q=Agra,IN&appid=28eadd90ad607fa43911b4f733752611&units=metric";


app.set('view engine', 'ejs');
app.set('views', 'views');

const dataRoutes = require('./routes/getData');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', dataRoutes);

app.use(error404.get404);

app.listen(4000, () => {
    console.log("Server is running at port 4000");
});