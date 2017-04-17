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
  constructor(){
    this._status = 'Mentah';
  }
}

class ChocoCookie extends Cookie {
  constructor() {
    super();
    this._name = 'Kue coklat';
    this._bakingDuration = 20; //menit
  }
}

class PeanutCookie extends Cookie {
  constructor() {
    super();
    this._name = 'Kue kacang';
    this._bakingDuration = 30; //menit
  }
}

class CheeseCookie extends Cookie {
  constructor() {
    super();
    this._name = 'Kue keju';
    this._bakingDuration = 35; //menit
  }
}

class Oven {
  constructor() {
    this._arrayOfCookies = [];
  }
  prepareCookie(name){
    name = name.trim().toLowerCase();
    if(name==='choco'){
      let cookie = new ChocoCookie(name);
      this._arrayOfCookies.push(cookie);
    } else if (name==='peanut') {
      let cookie = new PeanutCookie(name);
      this._arrayOfCookies.push(cookie);
    } else if (name==='cheese') {
      let cookie = new CheeseCookie(name);
      this._arrayOfCookies.push(cookie);
    }
  }
  bake(duration){
    for(let i=0; i<=duration; i++){
      for(let j=0; j<this._arrayOfCookies.length; j++){
        if (i > this._arrayOfCookies[j]._bakingDuration){
          this._arrayOfCookies[j]._status = 'Hangus';
        } else if (i === this._arrayOfCookies[j]._bakingDuration){
          this._arrayOfCookies[j]._status = 'Matang';
        } else if (i < this._arrayOfCookies[j]._bakingDuration && i >= this._arrayOfCookies[j]._bakingDuration-5){
          this._arrayOfCookies[j]._status = 'Hampir matang';
        } else {
          this._arrayOfCookies[j]._status = 'Masih mentah';
        }
      }
    }
  }
  showCookies(){
    let temp = [];
    for(let i=0;i<this._arrayOfCookies.length;i++){
      temp.push(`${this._arrayOfCookies[i]._name} (Status: ${this._arrayOfCookies[i]._status})`)
    }
    if (temp.length===0){
      console.log('There\'s no cookie in my oven\n===================================================================')
    } else if (temp.length===1){
      console.log(`Cookie in my oven is:\n${temp.join('\n')}\n===================================================================`);
    } else {
      console.log(`Cookies in my oven are:\n${temp.join('\n')}\n===================================================================`);
    }
  }
}

let oven = new Oven();
oven.prepareCookie('choco');
oven.prepareCookie('peanut');
oven.prepareCookie('cheese');
oven.bake(30);
oven.showCookies();
