export default class Zoo {
    addAnimals(animalsArr, predatorsArr){
        this.animals.push(...animalsArr)
        this.predators.push(...predatorsArr)
    }
    constructor(){
        this.animals = []
        this.predators = []
    }
}

