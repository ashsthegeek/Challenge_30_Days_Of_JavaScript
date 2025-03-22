// Exercices : Niveau 1

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finlande', 'Suède', 'Norvège']

/*
    1- Créer un ensemble (Set) vide
    2- Créer un ensemble contenant les nombres de 0 à 10 en utilisant une boucle
    3- Supprimer un élément d'un ensemble
    4- Vider un ensemble
    5- Créer un ensemble contenant 5 éléments de type chaîne de caractères à partir d'un tableau
    6- Créer une Map des pays et du nombre de caractères de chaque pays
*/

// Création d'un ensemble vide
const ensemble = new Set()

// Créer un ensemble contenant les nombres de 0 à 10 en utilisant une boucle
const ensembleNombre = new Set()  
for (let i = 1; i <= 10; i++) {
    ensembleNombre.add(i)
}

// Supprimer un élément d'un ensemble
console.log(ensembleNombre.delete(1))

// Vider un ensemble
ensembleNombre.clear()
console.log(ensembleNombre) // l'element nombre sera vider avec clear()

// Créer un ensemble contenant 5 éléments de type chaîne de caractères à partir d'un tableau

const entreprises = ['Facebook', 'Amazon', 'Apple', 'OpenAI', 'SpaceX']
const ensembleEntrepises = new Set(entreprises)
console.log(ensembleEntrepises)

// Créer une Map des pays et du nombre de caractères de chaque pays

const pays = [
    ['Senegal', 7],
    ['Gambie', 6],
    ['Maroc', 5],
]
const map = new Map(pays)
console.log(map)
console.log(map.size) // Retourne la taille de la map