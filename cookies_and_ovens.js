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
    this.type = "Chocolate Cookies"
    this.timeToCook = 20;
  }
}

class PeanutCookies extends Cookies{
  constructor(status){
    super(status)
    this.type = "Peanut Cookies"
    this.timeToCook = 30;
  }
}
class CheeseCookies extends Cookies{
  constructor(status){
    super(status)
    this.type = "Cheese Cookies"
    this.timeToCook = 35;
  }
}

class Oven {
  constructor(){
    this.inside=[];
  }
  putChocolateCookiesIn(){
    var chocolateCookies = new ChocolateCookies();
    this.inside.push(chocolateCookies);
  }
  putPeanutCookiesIn(){
    var peanutCookies = new PeanutCookies();
    this.inside.push(peanutCookies);
  }
  putCheeseCookieIn(){
    var cheeseCookies = new CheeseCookies();
    this.inside.push(cheeseCookies);
  }
  cook(time){
    for(let i=0; i<=time; i+=5){
      for(let j=0; j<this.inside.length; j++){
        if (i >= this.inside[j].timeToCook && i < this.inside[j].timeToCook + 5){
          this.inside[j].status = 'cooked';
        }
        if (i >= this.inside[j].timeToCook - 5 && i < this.inside[j].timeToCook){
          this.inside[j].status = 'almost cooked';
        }
        if (i < this.inside[j].timeToCook - 5 && i>0){
          this.inside[j].status = 'raw';
        }
        if (i >= this.inside[j].timeToCook + 5){
          this.inside[j].status = 'burned';
        }
        console.log(`${this.inside[j].type}, menit ke ${i} : ${this.inside[j].status}`)
      }
    }
  }
}

var a = new Oven()
a.putChocolateCookiesIn()
a.putPeanutCookiesIn()
a.putCheeseCookieIn()
a.cook(35)
