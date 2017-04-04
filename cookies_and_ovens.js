class Oven {
  constructor (cookDuration){
    this.cookDuration = cookDuration
    this.peanutbutter = new Peanut()
    this.chocolate = new Chocolate()
    this.cheese = new Cheese()
  }
  bake() {
    for (var i=0; i<this.cookDuration; i++) {
      this.peanutbutter.update_status()
      this.chocolate.update_status()
      this.cheese.update_status()
    }
  }
}

class Cookies {
  constructor(cookieName, doneTime) {
    this.cookieName = cookieName
    this.cookDuration = 0
    this.status = null
    this.doneTime = doneTime
  }
  update_status() {
    this.cookDuration ++
    if (this.cookDuration < this.doneTime) {
      this.status = 'raw'
    }else if (this.doneTime == this.cookDuration) {
      this.status = 'cooked'
    }else if (this.doneTime < this.cookDuration) {
      this.status = 'overcooked'
    }
  }
}

class Peanut extends Cookies {
  constructor(){
    super('Peanut Cookie', 20)
  }
}

class Chocolate extends Cookies {
  constructor(){
    super('Chocolate Cookie', 40)
  }
}

class Cheese extends Cookies {
  constructor(){
    super('Cheese Cookie', 50)
  }
}

let oven = new Oven(40)
oven.bake()
console.log(oven.peanutbutter)
console.log(oven.chocolate)
console.log(oven.cheese)
