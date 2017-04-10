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
class Cookies{
  constructor(jenis,waktu){
    this._jenis=jenis;
    this._waktuMatang=waktu;
  }

  get jenis()
  {
    return this._jenis;
  }
  waktuKematangan(waktu){
    if(waktu===(this._waktuMatang-5))
    return "Hampir Matang";
    if(waktu<this._waktuMatang)
    return "Mentah";
    else if(waktu===this._waktuMatang)
    return "Matang";
    else if(waktu>this._waktuMatang)
    return "Hangus";
  }
}

class CookiesCoklat extends Cookies{
  constructor(){

    super("coklat",20);
  }

  get jenis()
  {
    return super.jenis;
  }
  kematangan(waktu)
  {
    super.waktuKematangan(waktu)
  }
}

class CookiesKacang extends Cookies{
  constructor(){

    super("kacang",30);
  }
  get jenis()
  {
    return super.jenis;
  }
  kematangan(waktu)
  {
    super.waktuKematangan(waktu)
  }
}

class CookiesKeju extends Cookies{
  constructor(){

    super("keju",35);
  }
  get jenis()
  {
    return super.jenis;
  }
  kematangan(waktu)
  {
    super.waktuKematangan(waktu)
  }
}


class Oven{
  constructor(waktu){
    this.waktu=waktu;
  }

  jenisCookies(jenis){
    if(jenis==="kacang")
    return this.jenis="kacang";
    if(jenis==="coklat")
    return this.jenis="coklat";
    if(jenis==="keju")
    return this.jenis="keju";
  }

  panggang(jenis,perMenit)
  {
      if(jenis==="coklat"){
        let cookies=new CookiesCoklat()

        for(let i=perMenit; i<=this.waktu;i+=perMenit){
        console.log(`Kue ${cookies.jenis}, menit ke ${i} : ${cookies.waktuKematangan(i)}`);
        }
      }
      if(jenis==="kacang"){
        let cookies=new CookiesKacang()

        for(let i=perMenit; i<=this.waktu;i+=perMenit){
        console.log(`Kue ${cookies.jenis}, menit ke ${i} : ${cookies.waktuKematangan(i)}`);
        }
      }
      if(jenis==="keju"){
        let cookies=new CookiesKeju()

        for(let i=perMenit; i<=this.waktu;i+=perMenit){
        console.log(`Kue ${cookies.jenis}, menit ke ${i} : ${cookies.waktuKematangan(i)}`);
        }
      }
  }
}
let oven = new Oven(60)
oven.panggang("coklat",5);
