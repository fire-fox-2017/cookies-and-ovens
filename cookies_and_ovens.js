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
  constructor(name) {
    this.name= 'Kue' + name;
    this.status = ['Menta' , 'Hampir Matang' , 'Matang' , 'Hangus']
  }
}

  class KueKacang extends Cookies {
    constructor(name) {
      super(name)
      this.waktu_masak = 20
      this.belum_matang = 15
    }
 }

  class KueCokelat extends Cookies {
      constructor(name) {
        super(name)
        this.waktu_masak = 15
        this.belum_matang = 10
      }
  }

    class KueKeju extends Cookies {
      constructor(name) {
        super(name)
        this.waktu_masak = 25
        this.belum_matang = 20
      }
    }



class Ovens {
  constructor(cookies) {
        this.cookies = cookies
        this.timeCookies = 35
  }

  timeProcess () {

    let masak = this.cookies
    for(let i=0; i<this.timeCookies; i+=5){
      if( i <masak.belum_matang){
        console.log(`${masak.name} , menit ke ${ i }: ${masak.status[0]}`);
      } else if( i ==masak.belum_matang){
        console.log(`${masak.name} , menit ${ i }: ${masak.status[1]}`);
      } else if( i ==masak.waktu_masak){
        console.log(`${masak.name} , menit ${ i }: ${masak.status[2]}`);
      } else {
        console.log(`${masak.name} , menit ${ i }: ${masak.status[3]}`);
      }
    }

    }
}

let ovens1 = new Ovens(new KueKacang('Peanut'))
let ovens2 = new Ovens(new KueCokelat('Chocolate'))
let ovens3 = new Ovens(new KueKeju('Cheese'))

ovens1.timeProcess()
console.log('--------------------------------------------------');
ovens2.timeProcess()
console.log('--------------------------------------------------');
ovens3.timeProcess()
console.log('--------------------------------------------------');
