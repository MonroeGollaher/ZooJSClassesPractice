class Animal {
    constructor(type, name, color, gender, weight, tailLengthInch){
        this.type = type
        this.name = name;
        this.color = color; 
        this.gender = gender; 
        this.weight = weight; 
        this.tailLengthInch = tailLengthInch; 
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies`)
    }
    speak(noise){
        console.log(`The ${this.constructor.name} says ${noise}!`)
    }
}

export default Animal 
