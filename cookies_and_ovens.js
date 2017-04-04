// Answer These Questions:
//
// - What are essential classes?
//   ChocolateCookie, PeanutButterCookie, and CheeseCookie
//   Cookies
//   Oven

// - What attributes will each class have?
//   cookingTIme attribute

// - What interface will each class provide?
//

// - How will the classes interact with each other?
//   by using setter and getter

// - Which classes will inherit from others, if any?
//   Cookies will act as parent for ChocolateCookie, PeanutButterCookie, and CheeseCookie
//
//
// Your code here

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}


class Cookies {
  constructor() {
    this._properBakingTime = 0;
    this._status = "raw";
  }

  get properBakingTime() {
    return this._properBakingTime;
  }

  set properBakingTime(time) {
    this._properBakingTime = time;
  }

  get status() {
    return this._status;
  }

  set status(actualBakingTime) {
    if (actualBakingTime < this.properBakingTime*(2/3)) {
      this._status = "still raw";
    } else if (actualBakingTime < this.properBakingTime) {
      this._status = "almost done";
    } else if (actualBakingTime === this.properBakingTime){
      this._status = "perfectly cooked";
    } else if (actualBakingTime < this.properBakingTime*(3/2)){
      this._status = "overcooked";
    } else {
      this._status = "burnt";
    }
  }
}

class ChocolateCookie extends Cookies {
  constructor() {
    super();
    this.name = "ChocholateCookie";
    this.setProperBakingTime(20);
  }

  getProperBakingTime() {
    return super.properBakingTime;
  }

  setProperBakingTime(time) {
    super.properBakingTime = time;
  }

  getStatus() {
    return super.status;
  }

  setStatus(actualBakingTime) {
    return super.status = actualBakingTime;
  }
}

class CheeseCookie extends Cookies {
  constructor() {
    super();
    this.name = "CheeseCookie";
    this.setProperBakingTime(35);
  }

  getProperBakingTime() {
    return super.properBakingTime;
  }

  setProperBakingTime(time) {
    super.properBakingTime = time;
  }

  getStatus() {
    return super.status;
  }

  setStatus(actualBakingTime) {
    return super.status = actualBakingTime;
  }
}

class PeanutButterCookie extends Cookies {
  constructor() {
    super();
    this.name = "PeanutButterCookie";
    this.setProperBakingTime(30);
  }

  getProperBakingTime() {
    return super.properBakingTime;
  }

  setProperBakingTime(time) {
    super.properBakingTime = time;
  }

  getStatus() {
    return super.status;
  }

  setStatus(actualBakingTime) {
    return super.status = actualBakingTime;
  }
}

class Oven {
  constructor() {
    this.bakingTime = 0;
    this.cookieArr = [];
    this.chochoCount = 0;
    this.cheeseCount = 0;
    this.peanutCount = 0;
  }

  insert(cookie) {
    if (/coklat/i.test(cookie) || /choco/i.test(cookie)) {
      this.chochoCount ++;
      let cookie = new ChocolateCookie();
      cookie.name += this.chochoCount;
      this.cookieArr.push(cookie);
    } else if (/keju/i.test(cookie) || /cheese/i.test(cookie)) {
      this.cheeseCount ++;
      let cookie = new CheeseCookie();
      cookie.name += this.cheeseCount;
      this.cookieArr.push(cookie);
    } else if (/kacang/i.test(cookie) || /peanut/i.test(cookie)) {
      this.peanutCount ++;
      let cookie = new PeanutButterCookie();
      cookie.name += this.peanutCount;
      this.cookieArr.push(cookie);
    } else {
      console.log("We don't bake such cookie");
    }
  }

  bake(time) {
    this.bakingTime = time;
  }

  checkCookies() {
    console.log(`Baking time: ${this.bakingTime} minutes`);
    for (let t = 0; t <= this.bakingTime; t += 5) {
      console.log();
      for (let i = 0; i < this.cookieArr.length; i++) {
        this.cookieArr[i].setStatus(t);
        console.log(`${this.cookieArr[i].name}, minutes: ${t} , status: ${this.cookieArr[i].getStatus()}`);
        sleep(500);
      }
      sleep(500);
    }
  }
}

// Driver Code
let oven = new Oven();
oven.insert("kueCoklat");
oven.insert("kueKacang");
oven.insert("kueKeju");
oven.bake(30);
oven.checkCookies();
