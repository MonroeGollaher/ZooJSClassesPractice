import Animal from './models/animals.js'
import Zoo from './models/zoo.js'

// REG ANIMALS
let fred = new Animal("Alligator", "Fred", "green", "female", 100, 16)
let bob = new Animal("Eagle", "Bob", "brown", "male", 30, 18)
// PREDATORS
let steve = new Animal("Lion", "Steve", "purple", "male", 300, 24)
let jasmine = new Animal("Cougar", "Jasmine", "orange", "female", 200, 24)

let animals = [fred, bob]
let predators = [steve, jasmine]

let zoo = new Zoo()

zoo.addAnimals(animals, predators)


zoo.predators.push( new Animal("Monkey", "Frank", "brown", "male", 20, 23, 24))
console.log(zoo.animals)

function drawAnimals(){
    let template = ""
    zoo.animals.forEach(animal => template += /*html*/`
    <div class="col-6">
    <h2>${animal.name}</h2>
    <h3>${animal.type}</h3>
    <h3>${animal.weight}</h3>
  </div>
    `)
    document.querySelector("#animals").innerHTML = template
}

function drawPredators(){
    let template = ""
    zoo.predators.forEach(predator => template += /*html*/`
    <div class="col-6">
    <h2>${predator.name}</h2>
    <h3>${predator.type}</h3>
    <h3>${predator.weight}</h3>
    </div>
    `)
    document.querySelector("#predators").innerHTML = template
}

drawAnimals()
drawPredators()
