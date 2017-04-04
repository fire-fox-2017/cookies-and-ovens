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
class Kue {
  constructor(args) {
    this._nama=args['nama'];
    this._waktuMatang=args['waktuMatang'];
    this._statusMatang=args['statusMatang'];
    this._status="";
  }
  getStatus(time){
    if(time<this._waktuMatang*25/100){
      this._status=this._nama+" Mentah";
    }else if (time>=this._waktuMatang*25/100&&time<this._waktuMatang*50/100) {
      this._status=this._nama+" Setengah Matang";
    }else if (time>=this._waktuMatang*50/100&&time<this._waktuMatang*75/100) {
      this._status=this._nama+" Hampir Matang";
    }else if (time>=this._waktuMatang*75/100&&time<=this._waktuMatang) {
      this._status=this._nama+" Matang";
    }else if (time>this.waktuMatang) {
      this._status=this._nama+" Hangus!!!";
    }
    console.log(this._status);
  }
  get waktuMatang(){
    return this._waktuMatang;
  }
}
class Coklat extends Kue {
  constructor() {
    super({nama:'Coklat',waktuMatang:30,statusMatang:false});
  }
}
class Keju extends Kue {
  constructor() {
    super({nama:'Keju',waktuMatang:25,statusMatang:false});
  }
}
class Nanas extends Kue {
  constructor() {
    super({nama:'Nanas',waktuMatang:15,statusMatang:false});
  }
}
class Vanila extends Kue {
  constructor() {
    super({nama:'Vanila',waktuMatang:20,statusMatang:false});
  }
}

class Oven {
  constructor(time) {
    this._time=time;
  }
  cook(){
    let myCoklat = new Coklat();
    let myKeju = new Keju();
    let myNanas = new Nanas();
    let myVanila = new Vanila();
    let i=0;
    do{
      if(i%5==0){
        console.log("--------- Menit "+i+"--------------");
        myCoklat.getStatus(i);
        myKeju.getStatus(i);
        myNanas.getStatus(i);
        myVanila.getStatus(i);
      }
      i++;
    }while(i<=this._time);
  }
}

let myOven = new Oven(30);
myOven.cook();


//REFACTOR
//apakah code kamu sudah cukup DRY?
//jawab : Sudah.
//apakah class kamu mengikuti hukum Law of Demeter?
//jawab : Tidak.
//apakah class kamu sudah bersifat orthogonal?
//jawab : Sudah.
//apakah kamu mengekspos bagian kecil dari setiap class atau semua properti bersifat public ?
//jawab : semua properti bersifat public
