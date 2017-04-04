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
class Cookie {
  constructor (param) {
    this._cooking_time = 0;

    // 4 phase:
    // --1 dough  cooked_time <= dough time
    // --2 medium  cooked_time <= medium
    // --3 baked  cooked_time <= baked
    // --4 burned  cooked_time > baked


    this._baked_time = 30;
    if (param && param.hasOwnProperty('baked_time'))
      this._baked_time = param['baked_time'];

    // this._medium_time = 20;
    // if (param && param.hasOwnProperty('medium_time'))
    //   this._medium_time = param['medium_time'];
    this._medium_time = Math.floor(this._baked_time/5) * 4;


    // this._dough_time = 5;
    // if (param && param.hasOwnProperty('dough_time'))
    //   this._dough_time = param['dough_time'];
    this._dough_time = Math.floor(this._baked_time/5);


    this._name = "Regular";
    if (param && param.hasOwnProperty('name'))
      this._name = param['name'];


    this._status = "Dough";
  }

  get name() {
    return this._name;
  }

  info() {
    console.log(`${this._name} cookie, dough: ${this._dough_time} |  medium: ${this._medium_time} | baked: ${this._baked_time}`);
  }

  status () {
    // switch(this._cooked_time) {
    //   case
    // }
    // if (0 <= this._cooking_time && this._cooking_time <= this._dough_time)
    //   console.log(`Cooking Time: ${this._cooking_time}, ${this._name} cookie is still doughy.`);
    // else if ( this._dough_time < this._cooking_time && this._cooking_time <= this._medium_time)
    //   console.log(`Cooking Time: ${this._cooking_time}, ${this._name} cookie is medium baked`);
    // else if ( this._medium_time < this._cooking_time && this._cooking_time <= this._baked_time)
    //   console.log(`Cooking Time: ${this._cooking_time}, ${this._name} cookie is perfectly baked!`);
    // else
    //   console.log(`Cooking Time: ${this._cooking_time}, ${this._name} cookie is burned!`);


    if (0 <= this._cooking_time && this._cooking_time <= this._dough_time)
      return "Doughy";
    else if ( this._dough_time < this._cooking_time && this._cooking_time <= this._medium_time)
      return "Medium Baked"
    else if ( this._medium_time < this._cooking_time && this._cooking_time <= this._baked_time)
      return "Perfectly Baked!"
    else
      return "Burned ##$%!!!"


  }

  bake(interval) {
    this._cooking_time += interval;
  }

}

class ChocolateCookie extends Cookie {
  constructor () {
    super({name: "Chocolate" , baked_time: 30});
  }
}


class MacademiaCookie extends Cookie {
  constructor () {
    super({name: "Macademia" , baked_time: 35});
  }
}

class CheeseCookie extends Cookie {
  constructor () {
    super({name: "Cheese" , baked_time: 40});
  }
}

class Oven {
  constructor (param) {
    this._cooking_interval = 5;
    if(param && param.hasOwnProperty('cooking_interval'))
      this._cooking_interval = param['cooking_interval'];

    this._timer = 30;
    if(param && param.hasOwnProperty('timer'))
      this._timer = param['timer'];

    this._cookies = []
  }

  addCookie (cookie) {
    this._cookies.push(cookie);
    console.log(`Add ${cookie.name} cookie to the oven.`);
  }

  bake () {
    let time = 0;
    while(time <= this._timer) {
      for (let i = 0 ; i < this._cookies.length ; i++) {
        console.log(`${this._cookies[i].name} Cookie, minute:${this._cookies[i]._cooking_time}  --  Status: ${this._cookies[i].status()}`);
        this._cookies[i].bake(this._cooking_interval);
      }
      console.log("----");
      time += this._cooking_interval;
    }
  }
}

let oven = new Oven({timer: 40});
let c = new ChocolateCookie();
let m = new MacademiaCookie();
let ch = new CheeseCookie();

c.info();
m.info();
ch.info();

oven.addCookie(c);
oven.addCookie(m);
oven.addCookie(ch);
oven.bake();
