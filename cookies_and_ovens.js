// Answer These Questions:
//
// - What are essential classes?
//   class cookie, class chocolate cookie, class cheese cookie, class peanut butter, dan class oven
// - What attributes will each class have?
//   waktu panggang tiap cookie
// - What interface will each class provide?
// - How will the classes interact with each other?
//   menggunakan setter, getter, besesrta super
// - Which classes will inherit from others, if any?
//   class cookie akan menjadi parent bagi class chocolate cookie, class cheese cookie, class peanut butter
//
// Your code here

class Cookie{
  constructor(waktu){
    this._waktuPanggangMatang = 0;
    this._waktu = waktu;
    this._statusCookie = '';
  }

  get status(){
    return this._statusCookie;
  }

  statusCookie(waktuPanggang, waktuPanggangMatang){
    if(waktuPanggang <= (waktuPanggangMatang * (2 / 4))){
      this._statusCookie = 'Mentah';
    } else if((waktuPanggang <= (waktuPanggangMatang * (3 / 4))) || (waktuPanggang < (waktuPanggangMatang * (4 / 4)))){
      this._statusCookie = 'Hampir Matang';
    } else if(waktuPanggang == (waktuPanggangMatang * (4 / 4))){
      this._statusCookie = 'Matang'
    } else {
      this._statusCookie = 'Hangus';
    }
  }
}

class chocolateCookie extends Cookie{
  constructor(waktu){
    super(waktu);
    this._waktuPanggangMatang = 20;
  }

  statusCookie(){
    super.statusCookie(this._waktu, this._waktuPanggangMatang);
  }

}

class chesseCookie extends Cookie{
  constructor(waktu){
    super(waktu);
    this._waktuPanggangMatang = 25;
  }

  statusCookie(){
    super.statusCookie(this._waktu, this._waktuPanggangMatang);
  }
}

class peanutButterCookie extends Cookie{
  constructor(waktu){
    super(waktu);
    this._waktuPanggangMatang = 30;
  }

  statusCookie(){
    super.statusCookie(this._waktu, this._waktuPanggangMatang);
  }
}

class Oven{
  constructor(waktuOven){
    this._waktuOven = waktuOven;
  }

  panggang(){
    for(var i = 0; i < 3; i++){
      if(i === 0){
        for (var j = 5; j <= this._waktuOven; j+=5) {
          let kueCoklat = new chocolateCookie(j);
          kueCoklat.statusCookie();
          console.log(`Kue Cokelat, menit ke ${j} : ${kueCoklat.status}`);
        }
      } else if(i === 1){
        for (var k = 5; k <= this._waktuOven; k+=5) {
          let kueKeju = new chesseCookie(k);
          kueKeju.statusCookie();
          console.log(`Kue Keju, menit ke ${k} : ${kueKeju.status}`);
        }
      } else if(i === 2){
        for (var l = 5; l <= this._waktuOven; l+=5) {
          let kueKacang = new peanutButterCookie(l);
          kueKacang.statusCookie();
          console.log(`Kue Kacang, menit ke ${l} : ${kueKacang.status}`);
        }
      }
    }
  }
}

let oven = new Oven(30);
oven.panggang();
