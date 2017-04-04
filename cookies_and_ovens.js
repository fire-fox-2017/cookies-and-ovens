// Answer These Questions:
//
// - What are essential classes?
// Cookies, ChocolateCookies, PeanutCookies, CheeseCookies, Oven
// - What attributes will each class have?
// Cookies = Status (whether it's cooked or not), How long it will take to cook;
// Oven = how long has the cookies been in there;
// - What interface will each class provide?
// Cookies as the general characteristic(parent);
// Oven to cook the children cookies;
// - How will the classes interact with each other?
// Cookies will be the parent of ChocolateCookies, PeanutCookies, and CheeseCookies.
// Oven will be composed of ChocolateCookies, PeanutCookies, and CheeseCookies.
// - Which classes will inherit from others, if any?
// ChocolateCookies, PeanutCookies, and CheeseCookies will inherit from Cookies since it's their parent
//
// Your code here

class Cookies{
  constructor(status){
    this.status = status || 'raw';
  }
}

class ChocolateCookies extends Cookies{
  constructor(status){
    super(status)
    this.timeToCook = 20;
  }
}

class PeanutCookies extends Cookies{
  constructor(status){
    super(status)
    this.timeToCook = 30;
  }
}
class CheeseCookies extends Cookies{
  constructor(status){
    super(status)
    this.timeToCook = 35;
  }
}

class Oven {
  constructor(){
    this.time=0;
    this.cookedCookies=[];
    this.discardedCookies=[];
  }
  cookChocolateCookie(time){
    this.time+=time
    var chocolateCookies = new ChocolateCookies()
    if (this.time >= chocolateCookies.timeToCook && this.time < chocolateCookies.timeToCook + 5){
      chocolateCookies.status = 'cooked';
      console.log(`Chocolate cookie is ${chocolateCookies.status} beautifully!`)
      this.cookedCookies.push(chocolateCookies);
      this.time=0;
    }
    if (this.time >= chocolateCookies.timeToCook - 5 && this.time < chocolateCookies.timeToCook){
      chocolateCookies.status = 'almost cooked';
      console.log(`The cookie is ${chocolateCookies.status}! Just a little more!`);
    }
    if (this.time < chocolateCookies.timeToCook - 5 && this.time>0){
      chocolateCookies.status = 'raw';
      console.log(`The cookie is ${chocolateCookies.status}! Continue cooking!`)
    }
    if (this.time >= chocolateCookies.timeToCook + 5){
      chocolateCookies.status = 'burned';
      console.log(`Oops! the cookie is ${chocolateCookies.status}! Better luck next time!`)
      this.discardedCookies.push(chocolateCookies);
      this.time=0;
    }
  }
  cookPeanutCookies(time){
    this.time+=time
    var peanutCookies = new PeanutCookies()
    if (this.time >= peanutCookies.timeToCook && this.time < peanutCookies.timeToCook + 5){
      peanutCookies.status = 'cooked';
      console.log(`Peanut cookie is ${peanutCookies.status} beautifully!`)
      this.cookedCookies.push(peanutCookies);
      this.time=0;
    }
    if (this.time >= peanutCookies.timeToCook - 5 && this.time < peanutCookies.timeToCook){
      peanutCookies.status = 'almost cooked';
      console.log(`The cookie is ${peanutCookies.status}! Just a little more!`);
    }
    if (this.time < peanutCookies.timeToCook - 5 && this.time>0){
      peanutCookies.status = 'raw';
      console.log(`The cookie is ${peanutCookies.status}! Continue cooking!`)
    }
    if (this.time >= peanutCookies.timeToCook + 5){
      peanutCookies.status = 'burned';
      console.log(`Oops! the cookie is ${peanutCookies.status}! Better luck next time!`)
      this.discardedCookies.push(peanutCookies);
      this.time=0;
    }
  }
  cookCheeseCookies(time){
    this.time+=time
    var cheeseCookies = new CheeseCookies()
    if (this.time >= cheeseCookies.timeToCook && this.time < cheeseCookies.timeToCook + 5){
      cheeseCookies.status = 'cooked';
      console.log(`Cheese cookie is ${cheeseCookies.status} beautifully!`)
      this.cookedCookies.push(cheeseCookies);
      this.time=0;
    }
    if (this.time >= cheeseCookies.timeToCook - 5 && this.time < cheeseCookies.timeToCook){
      cheeseCookies.status = 'almost cooked';
      console.log(`The cookie is ${cheeseCookies.status}! Just a little more!`);
    }
    if (this.time < cheeseCookies.timeToCook - 5 && this.time>0){
      cheeseCookies.status = 'raw';
      console.log(`The cookie is ${cheeseCookies.status}! Continue cooking!`)
    }
    if (this.time >= cheeseCookies.timeToCook + 5){
      cheeseCookies.status = 'burned';
      console.log(`Oops! the cookie is ${cheeseCookies.status}! Better luck next time!`)
      this.discardedCookies.push(cheeseCookies);
      this.time=0;
    }
  }
}

var a = new Oven()
a.cookChocolateCookie(10)
a.cookChocolateCookie(5)
a.cookChocolateCookie(5)
a.cookChocolateCookie(25)
