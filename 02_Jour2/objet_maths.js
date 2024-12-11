/*
    En JavaScript, l'objet Math fournit de nombreuses 
    méthodes pour travailler avec les nombres.
*/
const PI = Math.PI

console.log(PI)   // 3.141592653589793

// Arrondi au nombre le plus proche
// si supérieur à 0.5, on arrondit vers le haut, si inférieur à 0.5, on arrondit vers le bas

console.log(Math.round(PI)) // 3 pour arrondir les valeurs au nombre le plus proche
console.log(Math.round(9.81)) // Retourn 10
console.log(Math.min(-2, 3, 4, 10)) // retourne le minimun -5
console.log(Math.max(-2, 3, 4, 10)) // retourne le maximun 10

const randNum = Math.random() // Génére des valeurs aléartoirs entre 0 et 0.999999
console.log(randNum)