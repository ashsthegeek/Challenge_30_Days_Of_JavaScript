/*
### EXERCICE NIVEAU 1
Créez un objet vide appelé dog.
Affichez l'objet dog dans la console.
Ajoutez des propriétés à l'objet dog : name, legs, color, age et bark. La propriété bark est une méthode qui retourne woof woof.
Récupérez les valeurs de name, legs, color, age et bark à partir de l'objet dog.
Ajoutez de nouvelles propriétés à l'objet dog : breed et getDogInfo.
*/

// Création de l'objet dog
const dog = {}
// Affichage de l'objet dans la console
console.log(dog)
// Ajout des propriétés name, legs, color, age et bark. La propriété bark est une méthode qui retourne woof woof
dog.name = 'Riki'
dog.legs = 4 // Pour dire le nombre de pieds qu'à le chien
dog.color = 'Grey'
dog.age = 1
dog.bark = function() {
    return 'woof woof'
}

// Récupérez les valeurs de name, legs, color, age et bark à partir de l'objet dog.

console.log(dog.name) // Affiche Riki
console.log(dog.legs) // Affiche 4
console.log(dog.color) // Affiche Grey
console.log(dog.age) // Affiche 1
console.log(dog.bark()) // Affiche 'woof woof' (appelle la méthode)

// NB : On peut proceder autrement en stockant les données dans des variables

// Exemple avec Assignation
let dogName = dog.name;
let dogLegs = dog.legs;
let dogColor = dog.color;
let dogAge = dog.age;
let dogSound = dog.bark();

console.log(dogName, dogLegs, dogColor, dogAge, dogSound);
// Affiche : Riki 4 Grey 1 woof woof

// Ajoutez de nouvelles propriétés à l'objet dog : breed et getDogInfo.
dog.breed = 'Bulldog'
dog.getDogInfo = function() {
    return `Name: ${this.name}, Legs: ${this.legs}, Color: ${this.color}, Age: ${this.age}, Breed: ${this.breed}`
}

console.log(dog.getDogInfo())
// Retourne : Name: Riki, Legs: 4, Color: Grey, Age: 1, Breed: Bulldog
