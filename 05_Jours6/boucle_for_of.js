

// SYNTAXE 

for (const element of arr) {
    // le code sera ici
}

// EXEMPLE 1

const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// 1 2 3 4 5

// EXEMPLE 2

const nombres = [1, 2, 3, 4, 5]

for (const nombre of nombres) {
    console.log(nombre * nombre) // Mulitiplier nombre par lui même
}
// 1 4 9 16 25

// Faire la somme des elements dans le tableau

let somme = 0
for (const nombre of nombres) {
    somme = somme + nombre // on peut aussi faire somme += nombre
}
console.log(somme) // 15

// EXEMPLE 3

const technologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

for (const techno of technologies) {
    console.log(techno.toUpperCase())
}
// Retourne : HTML CSS JAVASCRIPT REACT REDUX NODE MONGODB (en majiscule)

// EXEMPLE 3 : Copier le contenu d'un tableau sur un autre tableau

const pays = ['Sénégal', 'Mali', 'Gambie', 'Maroc']
const nouveauTableau = []

for (const element in pays) {
    nouveauTableau.push(element.toLowerCase())
}
console.log(nouveauTableau)

// retourne le nom des pays en majiscule 
