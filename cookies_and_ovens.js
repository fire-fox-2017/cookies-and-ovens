// Answer These Questions:
//
// - What are essential classes?
//   class Cookie, ChocolateCookie, CheeseCookie, PeanutButterCookie.

// - What attributes will each class have?
//   class Cookie :
//   class ChocolateCookie :
//   class CheeseCookie :
//   class PeanutButterCookie :
//   class Oven :

// - What interface will each class provide?
//

// - How will the classes interact with each other?
//   Inheritance

// - Which classes will inherit from others, if any?
//   class Cookie
//
// Your code here

class Cookie {
  constructor() {
    this._cooking_time = 0
    this._status = ''
    this._ripeTime = 0
  }

  cekStatus(time){
    if (time < this._ripeTime-10) {
      this._status = 'mentah'
    } else if (time < this._ripeTime-5){
      this._status = 'hampir matang'
    } else if (time === this._ripeTime){
      this._status = 'matang/selesai'
    } else if (time > this._ripeTime){
      this._status = 'hangus'
    }
    return this._status
  }

}

class ChocolateCookie extends Cookie{
  constructor() {
    super()
    this._ripeTime = 15
    this._name = "Kue Cokelat"
  }

  cooking_time(){
    return super.cooking_time = this._time;
  }

  cekStatus(time){
    return super.cekStatus(time)
  }

}

// let chocolateCookie = new ChocolateCookie()
// console.log(chocolateCookie.cooking_time());
// console.log(chocolateCookie.cekStatus());
// console.log(chocolateCookie._ripeTime);

class CheeseCookie extends Cookie{
  constructor() {
    super()
    this._time = 30
    this._ripeTime = 23
    this._name = "Kue Keju"
  }

  cooking_time(){
    return super.cooking_time = this._time;
  }
}

class PeanutButterCookie extends Cookie{
  constructor() {
    super()
    this._time = 30
    this._ripeTime = 20
    this._name = "Kue Kacang"
  }

  cooking_time(){
    return super.cooking_time = this._time;
  }
}

class Oven {
  constructor() {
    this._tempCookie = []
    this._chocolate = new ChocolateCookie()
    this._cheese = new CheeseCookie()
    this._peanut = new PeanutButterCookie()
  }

  composition(){
    this._tempCookie.push(this._chocolate, this._cheese, this._peanut)
    // return this._tempCookie
  }

  bake(time){
      for (let i = 5; i <= time; i+=5) {
        for (let j = 0; j < this._tempCookie.length; j++) {
          console.log(`${this._tempCookie[j]._name}, menit ke ${i} : ${this._tempCookie[j].cekStatus(i)} \n`);
        }
      }
  }
}

let oven = new Oven()
console.log(oven.composition());
console.log(oven.bake(30));
