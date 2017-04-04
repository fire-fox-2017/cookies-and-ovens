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
class Oven{
  constructor(){
     this._kues =[]
     this._warningTime = 5;
  }

  bake(menit){
    for(let j=0;j<menit;j+=this._warningTime)
    {
      for(let i=0; i<this._kues.length;i++){
        this._kues[i]._totalMenit = this._kues[i]._totalMenit + this._warningTime;
        let status = this._kues[i].getStatusKue();
        console.log(status);
      }
    }
  }

  masukkanKue(objkKue){
    this._kues.push(objkKue)
  }
}

class Kue{
  constructor(name, hampirMatang, matang){
    this._name = name;
    this._totalMenit = 0;
    this._hampirMatang = hampirMatang;
    this._matang = matang;
  }

  getStatus(){
    if(this._totalMenit < this._hampirMatang){
      return `Kue ${this._name} ${this._totalMenit} :  Mentah`
    }
    else if(this._totalMenit >= this._hampirMatang && this._totalMenit<this._matang)
    {
      return `Kue ${this._name}  ${this._totalMenit} : Hampir Matang`
    }
    else if(this._totalMenit==this._matang)
    {
      return `Kue ${this._name} ${this._totalMenit} : Matang`
    }
    else {
      return `Kue ${this._name} ${this._totalMenit} : Gosong`
    }
  }

}

class Kacang extends Kue{
  constructor(){
    super('Kacang', 15, 20)
  }

  getStatusKue() {
    return super.getStatus()
  }
}

class Coklat extends Kue{
  constructor(){
    super('Coklat', 20, 30)
  }


  getStatusKue() {
    return super.getStatus()
  }
}

class Keju extends Kue{
  constructor(){
    super('Keju', 25, 35)
  }

  getStatusKue() {
    return super.getStatus()
  }
}


let oven = new Oven()
oven.masukkanKue(new Kacang())
oven.masukkanKue(new Coklat())
oven.masukkanKue(new Keju())
oven.bake(30)
