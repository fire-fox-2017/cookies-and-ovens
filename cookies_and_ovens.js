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
"use strict"
class Oven {
  constructor(cookies){
    this.cookies = cookies;
    this.timeProcess = 35; //menit maksimal untuk memasak
  }

  proses() {
    let theCookies = this.cookies;
    for (let i=5; i<this.timeProcess; i+=5){
      if (i < theCookies.isHalfCooked){
        console.log( `${theCookies.name}, on ${i}\'th minute is, ${theCookies.status[0]}`)
      }else if (i == theCookies.isHalfCooked) {
        console.log(`${theCookies.name}, on ${i}\'th minute is, ${theCookies.status[1]}`)
      }else if (i == theCookies.isCooked){
        console.log(`${theCookies.name}, on ${i}\'th minute is, ${theCookies.status[2]}`)
      }else {
        console.log(`${theCookies.name}, on ${i}\'th minute is, ${theCookies.status[3]}`)
      }
    }
  }
}

class Cookies {
  constructor (name){
    this.name = name + ' cookies';
    this.status = ['raw', 'half-cooked', 'cooked', 'over-cooked'];
  }
}

class Peanut extends Cookies {
  constructor(name){
    super(name);
    this.isHalfCooked = 10;
    this.isCooked = 15;
  }
}

class Chocolate extends Cookies {
  constructor(name){
    super(name);
    this.isHalfCooked = 15;
    this.cooked = 20;
  }
}

class Cheese extends Cookies {
  constructor(name){
    super(name);
    this.isHalfCooked = 10;
    this.isCooked = 25;
  }
}

let ovenPeanut = new Oven (new Peanut('peanut'));
let ovenChocolate = new Oven (new Chocolate('chocolate'));
let ovenCheese = new Oven (new Cheese('cheese'));

console.log('====================================')
ovenPeanut.proses()
console.log('====================================')
ovenChocolate.proses()
console.log('====================================')
ovenCheese.proses()
