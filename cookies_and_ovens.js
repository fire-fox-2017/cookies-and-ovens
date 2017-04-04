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
class Kue {
  constructor(components) {
    this.nama_kue = components['nama_kue']
    this.waktu_matang = components['waktu_matang']
    this.status_matang_init = components['status_matang_init']
    this.status_matang_aktual = ""
  }

  Status_Masak(time){
    if (time < this.waktu_matang*1/3){
      this.status_matang_aktual = this.nama_kue + " Mentah";
    } else if (time > this.waktu_matang*1/3 && time < this.waktu_matang*2/3){
      this.status_matang_aktual = this.nama_kue + " Setengah Matang";
    } else if (time > this.waktu_matang*2/3 && time < this.waktu_matang){
      this.status_matang_aktual = this.nama_kue + " Hampir Matang";
    } else if (time == this.waktu_matang){
      this.status_matang_aktual = this.nama_kue + " Matang Sempurna"
    } else if (time > this.waktu_matang){
      this.status_matang_aktual = this.nama_kue + " Overcook!"
    }
    return this.status_matang_aktual
  }
}

class Kue_Coklat extends Kue {
  constructor() {
    super({nama_kue : "Kue Coklat", waktu_matang : 20});
  }
}

class Kue_Keju extends Kue {
  constructor() {
    super({nama_kue : "Kue Keju", waktu_matang : 35});
  }
}

class Kue_Kacang extends Kue {
  constructor() {
    super({nama_kue : "Kue Kacang", waktu_matang : 30});
  }
}

class Oven {
  constructor(components) {
    this.time = components['time']
  }

  masak(){
  let kue_coklat = new Kue_Coklat();
  let kue_keju = new Kue_Keju();
  let kue_kacang = new Kue_Kacang();
  for (let i = 0; i < this.time ; i++){
    if (i%5 == 0){
      console.log("Menit ke " + i);
      console.log(kue_coklat.Status_Masak(i));
      console.log(kue_keju.Status_Masak(i));
      console.log(kue_kacang.Status_Masak(i));
      console.log("-----------------------------");
    }
  }
  }
}

let masak_pertama = new Oven({time : 30})
masak_pertama.masak();
