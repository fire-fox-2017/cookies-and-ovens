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

class cookie{
  constructor(name){
    this.name = name;
    this.status = ['Mentah','Hampir Matang','Matang','Hangus'];
  }
}

class cheeseCookie extends cookie{
  constructor(name,timeRipe){
    super(name)
    this.timeRipe = timeRipe;
    this.halfTime = Math.floor(this.timeRipe*0.75);
  }
}

class chocoCookie extends cookie{
  constructor(name,timeRipe){
    super(name)
    this.timeRipe = timeRipe;
    this.halfTime = Math.floor(this.timeRipe*0.75);
  }
}

class peanutCookie extends cookie{
  constructor(name,timeRipe){
    super(name)
    this.timeRipe = 30;
    this.halfTime = Math.floor(this.timeRipe*0.75);
  }
}

class oven{
  constructor(name){
    this.name=name;
    this.timeMax = 40;
  }
  bake(){
    let obj = this.name;
    for(let i=0;i<=this.timeMax;i+=5){
      if(i < obj.halfTime){
        console.log(`${obj.name}, menit ke ${i} : ${obj.status[0]}`);
      }else if(i == obj.halfTime){
        console.log(`${obj.name}, menit ke ${i} : ${obj.status[1]}`);
      }else if(i > obj.halfTime && i < obj.timeRipe){
        console.log(`${obj.name}, menit ke ${i} : ${obj.status[1]}`);
      }else if(i == obj.timeRipe){
        console.log(`${obj.name}, menit ke ${i} : ${obj.status[2]}`);
      }else{
        console.log(`${obj.name}, menit ke ${i} : ${obj.status[3]}`);
      }
    }
  }
}


var choco = new chocoCookie('Kue Cokelat',20)
var chesee = new cheeseCookie('Kue Keju',35)
var peanut = new peanutCookie('Kue Kacang',20)
var chocoOven = new oven(choco);
chocoOven.bake();
var cheeseOven = new oven(chesee);
cheeseOven.bake();
var peanutOven = new oven(peanut);
peanutOven.bake();
