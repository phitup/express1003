const express = require("express");

const app = express();

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

class PhepTinh{
    constructor(tenPhepTinh , SoA , SoB){
        this.tenPhepTinh = tenPhepTinh;
        this.SoA = SoA;
        this.SoB = SoB;
    }

    getSign(){
        const { tenPhepTinh } = this;
        if(tenPhepTinh === 'CONG') return '+';
        if(tenPhepTinh === 'TRU') return '-';
        if(tenPhepTinh === 'NHAN') return '*';
        return '/';
    }

    getResultString(){
        const {SoA , SoB} = this;
        let ketqua = `${SoA} ${this.getSign()} ${SoB}`;
        return `${ketqua} = ${eval(ketqua)}`; 
    }
}

app.listen(3000 , () => console.log("Start Server"));

