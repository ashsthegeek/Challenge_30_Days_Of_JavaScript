// La boucle for en JavaScript

for(let i = 0; i <= 5; i++) {
    console.log(i)
}
// 0, 1, 2, 3, 4, 5

for (let j = 5; i >= 0; j--) {
    console.log(j)
}
// 5, 4, 3, 2, 1, 0

// Copier les element d'un tableau dans un autre tableau
const pays = ['Sénégal', 'Mali', 'Ghana', 'Caméroune']
// Création d'un tableau vide []
const nouveauTableau = []
// Parcours du tableau
for (let i = 0; i < pays.length; i++) {
    nouveauTableau.push(pays[i].toUpperCase())
}
console.log(nouveauTableau)
// Retourne : ["SÉNÉGAL", "MALI", "GHANA", "CAMÉROUNE"]

// Faire la somme des elements dans un tableau
const nombres = [1, 2, 3, 4, 5]
let somme = 0

for (let i = 0;  i < nombres.length; i++) {
    somme = somme + nombres[i] // On peut aussi faire  somme += nombres[i]
}
console.log("la somme des nombres dans le tableau est : ", somme) 
// Retourne : la somme des nombres dans le tableau est : 15
