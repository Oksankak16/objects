let teslaX={};
teslaX.make='Tesla';
teslaX.model='X';
teslaX.price=95000;
console.log(teslaX.price);
teslaX.beep=beep;
teslaX.beep();
let volkswagenAtlas={
    make:'Volkswagen',
    model:'Atals',
    price:34000,
    beep:beep
};
volkswagenAtlas.beep();
function beep(){
    console.log(this.make+' '+this.model+' beep-beep') 
}
function Car(make, model, price){
    this.make=make;
    this.model=model;
    this.price=price;
}
Car.prototype.beep=beep;
let audiQ8=new Car('Audi',"Q8", 67000);
audiQ8.beep();
class SuperCAr{
    constructor(make, model, price){
        this.make=make;
        this.model=model;
        this.price=price;
}
beep(){
    console.log(this.make+' '+this.model+' beep-beep-beep')
}
}
let bugattiVeyron=new SuperCAr('Bugatti', 'Veyron', 99000);
bugattiVeyron.beep();
let bugattiChiron=Object.create(bugattiVeyron);