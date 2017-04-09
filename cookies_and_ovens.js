// Answer These Questions:
//
// - What are essential classes? Class Oven
// - What attributes will each class have? Class cookies as parent has attributes name & status for process methode parameter
//   childreen has attributes(isHalfCooked, isCooked)
// - What interface will each class provide? Class Oven would be the main interface output provide condition which parameter would be desplay
//   class cookies would be take a name of childreen class, class peanut, chocolate, cheese provide cooking parameter.
// - How will the classes interact with each other? Class oven take a class from child (peanut, chocolate, and cheese)
//   take a string name parameter
// - Which classes will inherit from others, if any?
//   class Cookies will inherit attribute name.
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
      }else if (i > theCookies.isCooked){
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
    this.isHalfCooked = 20;
    this.isCooked = 25;
  }
}

class Chocolate extends Cookies {
  constructor(name){
    super(name);
    this.isHalfCooked = 25;
    this.cooked = 30;
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

console.log('+++++++++++++++++++++++++++++++++++')
ovenPeanut.proses()
console.log('+++++++++++++++++++++++++++++++++++')
ovenChocolate.proses()
console.log('+++++++++++++++++++++++++++++++++++')
ovenCheese.proses()
