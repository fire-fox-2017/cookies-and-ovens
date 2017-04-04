// Answer These Questions:
//
// - What are essential classes?
//
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
class Cake {
  constructor() {
    this.status='mentah';
  }

}

class chocolateCake extends Cake{
  constructor(name,matang) {
    super();
    this.name=name;
    this.matang=matang;
  }
}
class cheeseCake extends Cake{
  constructor(name,matang) {
    super();
    this.name=name;
    this.matang=matang;
  }
}
class peanutCake extends Cake{
  constructor(name,matang) {
    super();
    this.name=name;
    this.matang=matang;
  }
}



class Oven {
  constructor(time) {
    this.MaxTime=time;
    this.time=0;
    this.groupCake=[];
  }

  getStatus(){
    this.bake();
    for(let i=0;i<this.groupCake.length;i++){
      console.log(`${this.groupCake[i].name}, menit ke ${this.time} : ${this.groupCake[i].status}`);
    }
    console.log('\n');

  }

  set ovenTime(time){
    this.MaxTime=time;

  }

  get Mtime(){
    if(this.time===this.MaxTime){
      return false;
    }else{
      return true;
    }
  }

  entercake(name,matang){
    if(name==='kue coklat'){
      let chocoCake = new chocolateCake(name,matang);
      this.groupCake.push(chocoCake);
    }
    if(name==='kue keju'){
      let cheseCake = new cheeseCake(name,matang);
      this.groupCake.push(cheseCake);
    }
    if(name==='kue kacang'){
      let peanuteCake = new peanutCake(name,matang);
      this.groupCake.push(peanuteCake);
    }
  }

  startOven(){
    while(oven.Mtime){
      oven.getStatus();
    }

  }

  bake(){
    this.time=this.time+5;
    for(let i=0;i<this.groupCake.length;i++){
      if(this.time+5===this.groupCake[i].matang){
        this.groupCake[i].status='hampir matang';
      }
      if(this.time===this.groupCake[i].matang){
        this.groupCake[i].status='matang';
      }
      if(this.time>this.groupCake[i].matang){
        this.groupCake[i].status='hangus';
      }
    }
  }
}

let oven = new Oven(35);
oven.entercake('kue coklat',20)
oven.entercake('kue kacang',30)
oven.entercake('kue keju',35)
oven.startOven();
//code sudah DRY? sudah
//mengikuti hukum Law of Demeter? sudah sepertinya
//class bersifat orthogonal? sudah
