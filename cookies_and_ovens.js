// Answer These Questions:
//
// - What are essential classes?
//   oven & cookies
// - What attributes will each class have?
//   oven[cookies] cookies[name, baked, status]
// - What interface will each class provide?
//   oven[process]
// - How will the classes interact with each other?
//   cookies with peanut, cheese, chocolate
// - Which classes will inherit from others, if any?
//   cookies
//
// Your code here

class Oven {
  constructor(cookies) {
    this.cookies = cookies
    this.timeProcess = 35
  }

  process(){
    let obj = this.cookies
    for(let i=0; i<this.timeProcess; i+=5){
      if(i<obj.half_time){
        console.log(`${obj.name}, menit ke ${i}: ${obj.status[0]}`);
      } else if(i==obj.half_time){
        console.log(`${obj.name}, menit ${i}: ${obj.status[1]}`);
      } else if(i==obj.done_time){
        console.log(`${obj.name}, menit ${i}: ${obj.status[2]}`);
      } else {
        console.log(`${obj.name}, menit ${i}: ${obj.status[3]}`);
      }
    }
  }
}


class Cookies {
  constructor(name) {
    this.name = 'Kue ' + name
    this.status = ['Raw','Half-Done','Done','OverCook']
  }
}

class Peanut extends Cookies {
  constructor(name) {
    super(name)
    this.done_time = 15
    this.half_time = 10
  }
}

class Chocolate extends Cookies {
  constructor(name) {
    super(name)
    this.done_time = 20
    this.half_time = 15
  }
}

class Cheese extends Cookies {
  constructor(name) {
    super(name)
    this.done_time = 25
    this.half_time = 20
  }
}

let oven1 = new Oven(new Peanut('Peanut'))
let oven2 = new Oven(new Chocolate('Chocolate'))
let oven3 = new Oven(new Cheese('Cheese'))

// console.log(chocolate);
oven1.process()
console.log('=========================');
oven2.process()
console.log('=========================');
oven3.process()

