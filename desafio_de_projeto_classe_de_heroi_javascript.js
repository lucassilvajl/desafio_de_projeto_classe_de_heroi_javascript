let name = "Lucas"
let age = "23"

class hero{
    constructor(tip, attack){
        this.tip = tip
        this.attack = attack
    }
    
    text(){
        console.log(`The ${this.tip} attacked using ${this.attack}`)
    }
} 

let option = new hero ("Ninja", "Shuriken")

option.text()
