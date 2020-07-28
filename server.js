// const axios = require('axios')
const express = require('express');
// const http = require('http');
const app = express();
// url = "http://api.openweathermap.org/data/2.5/weather?q=Mumbai,IN&appid=28eadd90ad607fa43911b4f733752611&units=metric";
// app.set('view engine', 'ejs');

// axios.get('http://api.openweathermap.org/data/2.5/weather?q=Mumbai,IN&appid=28eadd90ad607fa43911b4f733752611&units=metric')
//     .then(function (response) {
//         console.log(response);
        
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// app.listen(4000, () => {
//     console.log("Server is running at port 4000");
// })
app.get('/about', (req, res) => {
    res.send("Hello");
    console.log("Hii");
})

app.listen(8000, () => {
    console.log("Server is running 8000");
})