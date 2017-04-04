// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
class Cookies {
    constructor(components){
      this._Nama = "KueKropos";
      if(components.hasOwnProperty("Nama")){
        this._Nama = components ["Nama"] }

      this.cooking_time = 0;
      if(this.cooking_time.hasOwnProperty("Cooking")){
        this.cooking_time = components ["Cooking"]}

      this.time1 = 10;
      if(this.time1.hasOwnProperty("10 Menit")){
        this.time1 = components ["10 Menit"]}


      this.time2 = 20;
      if(this.time2.hasOwnProperty("20 Menit")){
        this.time2 = components ["20 Menit"]}

      this.time3 = 30;
      if(this.time3.hasOwnProperty("30 Menit")){
        this.time3 = components ["30 Menit"]}


      this.WaktuKematangan = 40;
      if (components.hasOwnProperty("WaktuKematangan")){
          this.WaktuKematangan = components ["WaktuKematangan"]}
    /*  this.time4 = 40;
      if(this.time4).hasOwnProperty("40 Menit"){
        this.time4 = components ["40 Menit"]}*/
        this._Kematangan = "";
}

get Nama(){
  return this._Nama;
}

Kematangan(){

      if (0 <= this.cooking_time && this.cooking_time <= this.time1){
        return "Mentah";}

      else if ( this.time1 < this.cooking_time && this.cooking_time <= this.time2){
        return "Hampir Matang"}

      else if ( this.time2 < this.cooking_time && this.cooking_time <= this.WaktuKematangan){
        return "Mateng"}

      else{
        return "Hangus"}
}

bake(interval) {
  this.cooking_time += interval;
}

}

class KueKacang extends Cookies{
    constructor(){
      super({Nama: "Kacang", WaktuKematangan: 35})
    }
}
class KueCoklat extends Cookies{
    constructor(){
      super({Nama: "Coklat", WaktuKematangan: 45})
    }
}
class KueKeju extends Cookies{
    constructor(){
      super({Nama: "Keju", WaktuKematangan: 20})
    }
}

class Ovens{
    constructor(components){
      this.TimeInterval = 5;
      if(this.TimeInterval.hasOwnProperty("Interval")){
        this.TimeInterval = components ["Interval"]}

      this.Timer = 50;
      if(this.Timer.hasOwnProperty("Timer")){
        this.Timer = components ["Timer"]}

      this.Kue = [];
}

TambahKue(kuenya) {
  this.Kue.push(kuenya);
  console.log(`Masukkan Kue ${kuenya.Nama} ke oven.`);
}


bake(){
  let time = 0;
  while(time <= this.Timer) {
    for (let i = 0 ; i < this.Kue.length; i++) {
      console.log(`Kue ${this.Kue[i].Nama}, Menit:${this.Kue[i].cooking_time}  --  Kematangan: ${this.Kue[i].Kematangan()}`);
      this.Kue[i].bake(this.TimeInterval);
    }
    console.log("---------");
    time += this.TimeInterval;
    }
  }
}
/*bakeKueKacang(){
  let newKacang = new KueKacang

    if(this.duration >= this.KacangMateng && this.duration < this.KacangMateng + 10){
      console.log(`Kue Kacang, menit ke ${this.duration} : Mateng`)
    }
    if (this.duration < this.KacangMateng / 2){
      console.log(`Kue Kacang, menit ke ${this.duration} : Mentah`)
    }

    if (this.duration < this.KacangMateng && this.duration > this.KacangMateng / 2){
      console.log(`Kue Kacang, menit ke ${this.duration} : Hampir Matang`)
    }

    if (this.duration >= this.KacangMateng + 10){
      console.log(`Kue Kacang, menit ke ${this.duration} : Hangus`)
    }
  }


bakeKueCoklat(){
  let newCoklat = new KueCoklat

    if(this.duration >= this.CoklatMateng && this.duration < this.CoklatMateng + 10){
      console.log(`Kue Coklat, menit ke ${this.duration} : Mateng`)
    }
    if (this.duration < this.CoklatMateng / 2){
      console.log(`Kue Coklat, menit ke ${this.duration} : Mentah`)
    }

    if (this.duration < this.CoklatMateng && this.duration > this.CoklatMateng / 2){
      console.log(`Kue Coklat, menit ke ${this.duration} : Hampir Matang`)
    }

    if (this.duration >= this.CoklatMateng + 10){
      console.log(`Kue Coklat, menit ke ${this.duration} : Hangus`)
    }
  }

bakeKueKeju(){
  let newKeju = new KueKeju

    if(this.duration >= this.KejuMateng && this.duration < this.KejuMateng + 5){
      console.log(`Kue Keju, menit ke ${this.duration} : Mateng`)
    }
    if (this.duration < this.KejuMateng / 2){
      console.log(`Kue Keju, menit ke ${this.duration} : Mentah`)
    }

    if (this.duration < this.KejuMateng && this.duration > this.KejuMateng / 2){
      console.log(`Kue Keju, menit ke ${this.duration} : Hampir Matang`)
    }

    if (this.duration >= this.KejuMateng + 5){
      console.log(`Kue Keju, menit ke ${this.duration} : Mentah`)
    }
  }*/

let newOvens = new Ovens({Timer: 50});
let newKueCoklat = new KueCoklat();
let newKueKacang = new KueKacang();
let newKueKeju = new KueKeju();

newOvens.TambahKue(newKueCoklat);
newOvens.TambahKue(newKueKacang);
newOvens.TambahKue(newKueKeju);
newOvens.bake();
