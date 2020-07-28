exports.getData = (req, res, next) => {
    res.render('userInput', {
        pageTitle: 'Submit Date',
        path: 'userInput',
    });
};

exports.getFormData = (req, res, next) => {
    var request = require('request');
    const country = req.body.country;
    const state = req.body.state;
    const city = req.body.city;

    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=28eadd90ad607fa43911b4f733752611&units=metric`;
    request(url, (err, response, body) => {
        const weather = JSON.parse(body)
        if (!err && weather.cod !== "404") {
            res.render('data', { weather: weather, pageTitle: 'Weather Report', country: country, state: state});
        }
        else{
            res.render('cityNotFound', { pageTitle: "cityNotFound"})
        }
    })
};

exports.getWeatherData = (req, res, next) => {
    res.render('data', {
        pageTitle: 'Weather',
        data: body,
        path: 'data'
    });
};

const get = (country, city) => {
    Data.fetchAll(oneData => {
        res.render('/data', {
            prods: oneData,
            pageTitle: 'Weather',
            path: '/data'
        });
    });
};
