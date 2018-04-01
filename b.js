const request = require('request');

// function nhietdo(city ,cb){
//     const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=' + city;
//     request(URL, (error, response, body) => {
//         if (error) return cb(error , null);
//         const obj = JSON.parse(body);
//         if(!obj.main) return cb(new Error("can't find city") , null);
//         cb(null , obj.main.temp);
//     });
// }

// nhietdo("Tokyo" , (error , result) => {
//     if(error) return console.log(error.message);
//     console.log(result);
// });

function cong(a , b , cb){
    const URL = `http://localhost:3000/tinh/CONG/${a}/${b}`;
    if(isNaN(a) || isNaN(b)) return cb(new Error("Type Error") , null);
    request(URL , (error , response , body) => {
        if(error) return cb(error , null);
        cb(null , body);
    });
}

function nhan(a , b , cb){
    const URL = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
    if(isNaN(a) || isNaN(b)) return cb(new Error("Type Error") , null);
    request(URL , (error , response , body) => {
        if(error) return cb(error , null);
        cb(null , body);
    });
}

function chia(a , b , cb){
    const URL = `http://localhost:3000/tinh/CHIA/${a}/${b}`;
    if(b == 0) return cb(new Error("Zero") , null);
    request(URL , (error , response , body) => {
        if(error) return cb(error , null);
        cb(null , body);
    });
}

cong(4 , 5 ,(error , result) => {
    nhan(result , 6 , (error , result) => {
        chia(result , 2 , (error , result) => {
            console.log(result);
        });
    });
});
