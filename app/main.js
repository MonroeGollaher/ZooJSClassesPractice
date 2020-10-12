import Animal from './models/animals.js'
import Zoo from './models/zoo.js'

let fred = new Animal("Alligator", "Fred", "green", "female", 100, 16, 12)
let bob = new Animal("Eagle", "Bob", "brown", "male", 30, 18, 12)

let animals = [fred, bob]

let zoo = new Zoo()

zoo.addAnimals(animals)

zoo.animals.push( new Animal("Monkey", "Frank", "brown", "male", 20, 23, 24))
console.log(zoo.animals)

function drawAnimals(){
    let template = ""
    zoo.animals.forEach(animal => template += /*html*/`
    <div class="col-6">
    <h1>${animal.name}</h1>
    <h3>${animal.type}</h3>
    <h3>${animal.weight}</h3>
  </div>
    `)
    document.querySelector("#animals").innerHTML = template
}

drawAnimals()