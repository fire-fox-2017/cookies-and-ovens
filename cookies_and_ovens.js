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

class Ovens{
  constructor(){
    this.loyang = [];
  }
  addCookies(kue){
    this.loyang.push(kue);
  }
  bake(timer){
    //console.log(timer)
    for(let i = 0; i < timer; i+=4){
      for(let j = 0; j < this.loyang.length; j++){
        if(i < this.loyang[j].bakeTime*0.5){
          this.loyang[j].status = this.loyang[j].status
        }else if(i < this.loyang[j].bakeTime*0.75){
          this.loyang[j].status = "setengah matang"
        }else if(i < this.loyang[j].bakeTime){
          this.loyang[j].status = "hampir matang"
        }else if(i <= this.loyang[j].bakeTime+3){
          this.loyang[j].status = "matang"
        }else {
          this.loyang[j].status = "gosong"
        }
        console.log(`menit ke-${i} : ${this.loyang[j].name} [${this.loyang[j].status}]`);
      }
      console.log("=============================================================================================")
    }
  }
}

class Cookies{
  constructor(name, bakeTime){
    this.name = name
    this.bakeTime = bakeTime
    this.status = "mentah"
  }
}

class KueKacang extends Cookies{
  constructor(){
    super("Kue Kacang", 30)
  }
}
class KueCoklat extends Cookies{
  constructor(){
    super("Kue Coklat", 20)
  }
}
class KueKeju extends Cookies{
  constructor(){
    super("Kue Keju", 35)
  }
}
let k_Kacang = new KueKacang()
let k_Coklat = new KueCoklat()
let oven = new Ovens()
oven.addCookies(k_Kacang)
oven.addCookies(k_Coklat)
// console.log(oven.loyang);
oven.bake(40)
