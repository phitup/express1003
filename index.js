const express = require("express");

const app = express();

const PhepTinh = require("./PhepTinh");

app.get('/' , (req , res) => {
    res.send('<h1>Hello Phi Tup</h1>')
})

app.get('/chao/:name' , (req , res) => {
    res.send('chào ' + req.params.name);
})

app.get('/toan/:pheptinh/:SoA/:SoB' , (req , res) => {
    const { pheptinh , SoA , SoB } = req.params;
    const pt = new PhepTinh(pheptinh , +SoA , +SoB);
    res.send(pt.getResultString());
})

app.listen(3000 , () => console.log("Start Server"));

