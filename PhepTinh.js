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

module.exports = {PhepTinh};