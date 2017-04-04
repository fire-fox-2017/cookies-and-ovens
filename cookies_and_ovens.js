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
class Cookies {
  constructor(data) {
    this.interval = data.interval;
    this.name = data.name;
    this.half_cooked = data.half_cooked;
    this.finish_cooked = data.finish_cooked;
    this.max_cooked = data.max_cooked;
  }
}

class ChocolateCookie extends Cookies {
  constructor(data) {
    super(data)
  }
}

class CheeseCookie extends Cookies {
  constructor(data) {
    super(data)
  }
}

class PeanutCookie extends Cookies {
  constructor(data) {
    super(data)
  }
}

class Oven {
  constructor() {
    this.container_cookies = []
    this.count = 0
  }
  insertCookie(data) {
    this.container_cookies.push(data)
  }
  status_cooking() {
    let temp_cooked = []
    for (let i = 0; i < this.container_cookies.length; i++) {

      if (this.count < this.container_cookies[i].half_cooked) {
        temp_cooked.push(`${this.container_cookies[i].name}, menit ke ${this.count} : mentah`)
      }
      if (this.count == this.container_cookies[i].half_cooked) {
        temp_cooked.push(`${this.container_cookies[i].name}, menit ke ${this.count} : hampir matang`)
      }
      if (this.count == this.container_cookies[i].finish_cooked) {
        temp_cooked.push(`${this.container_cookies[i].name}, menit ke ${this.count} : matang`)
      }
      if (this.count == this.container_cookies[i].max_cooked) {
        temp_cooked.push(`${this.container_cookies[i].name}, menit ke ${this.count} : hangus`)
        temp_cooked.push('---------------------------------------------------')
      }
    }
    
    // for(let j=0; j<temp_cooked.length; j++){
    //   if(temp_cooked[j] == 'undefined' || temp_cooked[j] == '')
    //   console.log(temp_cooked[j])
    // }
    console.log(temp_cooked.join("\n"))
    
  }
  bake() {
    let interval = '';
    let max_cooking = '';
    for (let i = 0; i < this.container_cookies.length; i++) {
      interval += this.container_cookies[i].interval
      max_cooking += this.container_cookies[i].max_cooked
    }
    let i = Number(interval)
    let max_cook = Number(max_cooking)
    do {
      this.status_cooking()
      this.count += i
    } while (this.count <= max_cook)
    // setInterval(()=>{ 
    // 	for(let i=0; i < container_cookies.length; i++){
    // 		temp_cookie.push(container_cookies[i].name)
    // 	}
    // }, 500);
  }
}

let cookChocolateCookie = new Oven()
let cookPeanutCookie = new Oven()
let cookCheeseCookie = new Oven()
cookChocolateCookie.insertCookie(new ChocolateCookie({
  interval : 5,
  name: 'Chocolate Cookie',
  half_cooked: 10,
  finish_cooked: 20,
  max_cooked: 25
}))
cookPeanutCookie.insertCookie(new PeanutCookie({
  interval : 5,
  name: 'Peanut Cookie',
  half_cooked: 25,
  finish_cooked: 35,
  max_cooked: 40
}))
cookCheeseCookie.insertCookie(new CheeseCookie({
  interval : 5,
  name: 'Cheese Cookie',
  half_cooked: 15,
  finish_cooked: 30,
  max_cooked: 35
}))
//console.log(cookChocolateCookie.container_cookies)
cookChocolateCookie.bake()
cookPeanutCookie.bake()
cookCheeseCookie.bake()