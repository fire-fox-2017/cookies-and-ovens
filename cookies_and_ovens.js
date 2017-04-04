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
  constructor () {
    this._cooked_time = 20;
    this._type = "Cookie";
    this._baking_time = 0; // Determines time spent to bake this cookie
    this._state = "raw";
  }

  get cooked_time() {
    return this._cooked_time;
  }

  get type () {
    return this._type;
  }

  get baking_time () {
    return this._baking_time;
  }

  get state () {
    return this._state;
  }

  set baking_time (time) {
    this._baking_time = time;
  }

  set state (state) {
    this._state = state;
  }

  change_state () { // Change the state of cookie based on baking time
    if (this.baking_time <= Math.floor(this.cooked_time / 3)) {
      this.state = "raw";
    } else if (this.baking_time <= Math.floor(this.cooked_time * 9 / 10)) {
      this.state = "almost done";
    } else if (this.baking_time <= Math.floor(this.cooked_time * 11 / 10)) {
      this.state = "done";
    } else {
      this.state = "overcooked";
    }
  }
}

class ChocolateCookie extends Cookie {
  constructor () {
    super();
    this._type = "Chocolate cookie";
    this._cooked_time = 20;
  }

  get cooked_time() {
    return super.cooked_time;
  }

  get type () {
    return super.type;
  }

  get baking_time () {
    return super.baking_time;
  }

  get state () {
    return super.state;
  }

  set baking_time (time) {
    super.baking_time = time;
  }

  set state (state) {
    super.state = state;
  }

  change_state () { // Change the state of cookie based on baking time
    super.change_state();
  }
}

class PeanutCookie extends Cookie {
  constructor () {
    super();
    this._type = "Peanut cookie";
    this._cooked_time = 30;
  }

  get cooked_time() {
    return super.cooked_time;
  }

  get type () {
    return super.type;
  }

  get baking_time () {
    return super.baking_time;
  }

  get state () {
    return super.state;
  }

  set baking_time (time) {
    super.baking_time = time;
  }

  set state (state) {
    super.state = state;
  }

  change_state () { // Change the state of cookie based on baking time
    super.change_state();
  }
}

class CheeseCookie extends Cookie {
  constructor () {
    super();
    this._type = "Cheese cookie";
    this._cooked_time = 35;
  }

  get cooked_time() {
    return super.cooked_time;
  }

  get type () {
    return super.type;
  }

  get baking_time () {
    return super.baking_time;
  }

  get state () {
    return super.state;
  }

  set baking_time (time) {
    super.baking_time = time;
  }

  set state (state) {
    super.state = state;
  }

  change_state () { // Change the state of cookie based on baking time
    super.change_state();
  }
}

class Oven {
  constructor () {
    this._cookies = [];
  }

  get cookies() {
    return this._cookies;
  }

  set cookies (array) {
    this._cookies = array;
  }

  insert_cookie (string) {
    let cookie;
    if (string == "Chocolate cookie") {
      cookie = new ChocolateCookie();
    } else if (string == "Peanut cookie"){
      cookie = new PeanutCookie();
    } else if (string == "Cheese cookie"){
      cookie = new CheeseCookie();
    }
    this.cookies.push(cookie);
  }

  change_cookie_state (cookie, time) {
    cookie.baking_time = time;
    cookie.change_state();
  }

  bake (time) {
      for (let i = 0; i < this.cookies.length; i++) {
        this.change_cookie_state(this.cookies[i], time);
        this.print(this.cookies[i]);
      }
  }

  print (cookie) {
    console.log(`${cookie.type}, minutes ${cookie.baking_time} : ${cookie.state}`);
  }

  print_all () {
    for (let i = 0; i < this.cookies.length; i++) {
      print(this.cookies[i]);
    }
  }

  check_cookie (cookie, bake_time, check_time) {
    for (let i = 1; i <= Math.ceil(bake_time / check_time); i++) {
      this.bake(check_time * i);
    }
  }
}

// Driver
let oven = new Oven();
oven.insert_cookie("Chocolate cookie");
oven.insert_cookie("Cheese cookie");
oven.insert_cookie("Peanut cookie");
console.log("\nThis shows the state of cookies in the oven if baked at a set time (e.g. 30 minutes)");
oven.bake(30);
oven = new Oven();
oven.insert_cookie("Chocolate cookie");
console.log("\nThis shows the state of cookies each time checked (e.g. every 5 minutes)");
oven.check_cookie(oven.cookies[0], 24, 5);
