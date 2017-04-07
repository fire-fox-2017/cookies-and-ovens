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
  constructor(timeInterval, maxTime, idealTime, name) {
    this.timeInterval = timeInterval;
    this.idealTime = idealTime,
    this.maxTime = maxTime;
    this.name = name;
  }
}

class CheeseCookie extends Cookie {
  constructor(timeInterval, maxTime, idealTime, name) {
    super(timeInterval, maxTime, idealTime, name);
  }
}

class PeanutCookie extends Cookie {
  constructor(timeInterval, maxTime, idealTime, name) {
    super(timeInterval, maxTime, idealTime, name);
  }
}

class ChocolateCookie extends Cookie {
  constructor(timeInterval, maxTime, idealTime, name) {
    super(timeInterval, maxTime, idealTime, name);
  }
}

class Oven {
  constructor() {
    this.ovenContainer = [];
  }

  bake(cookies, time) {
    let rawCookies = cookies;
    for(let i = 0; i < rawCookies.length; i++) {
      this.ovenContainer.push(rawCookies[i]);
    }
    
    for(let i = 0; i < rawCookies.length; i++) {
      for(let j = rawCookies[i].timeInterval; j <= time; j+=rawCookies[i].timeInterval)
        if(j < rawCookies[i].idealTime - rawCookies[i].timeInterval) {
            console.log(`${rawCookies[i].name}, menit ke ${j}: mentah`);
        } else if (j === rawCookies[i].idealTime - rawCookies[i].timeInterval) {
            console.log(`${rawCookies[i].name}, menit ke ${j}: hampir matang`);
        } else if (j === rawCookies[i].idealTime) {
            console.log(`${rawCookies[i].name}, menit ke ${j}: matang`);
        } else if (j >= rawCookies[i].idealTime) {
            console.log(`${rawCookies[i].name}, menit ke ${j}: hangus`);
        }
    }
  }

}

let oven = new Oven();
let keju = new CheeseCookie(6, 15, 24, 'Kue Keju');
let kacang = new PeanutCookie(5, 20, 25, 'Kue Kacang');
let coklat = new ChocolateCookie(5, 25, 30, 'Kue Coklat');


oven.bake([keju, kacang, coklat], 35);
