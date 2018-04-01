const request = require('request');

function nhietdo(city){
    const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=' + city;
    request(URL, (error, response, body) => {
        if (error) return console.log(error.message);
        const obj = JSON.parse(body);
        return obj.main.temp;
    });
}

module.exports = nhietdo;
