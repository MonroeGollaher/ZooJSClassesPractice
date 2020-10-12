export default class Zoo {
    addAnimals(animalsArr){
        this.animals.push(...animalsArr)
    }
    constructor(){
        this.animals = []
    }
}

