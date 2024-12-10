/* 
    #Types de données
Dans la section précédente, nous avons mentionné brièvement 
les types de données. Les données ou valeurs ont des 
types de données. Les types de données décrivent les caractéristiques 
des données. Les types de données peuvent être divisés en deux catégories :

    - Types de données primitifs
    - Types de données non primitifs (Références d'objets)

Types de données primitifs

Les types de données primitifs en JavaScript incluent :

    - Nombres : Entiers, nombres à virgule flottante
    - Chaînes de caractères : Toute donnée entre guillemets simples, doubles ou backticks
    - Booléens : Valeur vraie ou fausse
    - Null : Valeur vide ou sans valeur
    - Undefined : Variable déclarée sans valeur
    - Symbol : Une valeur unique pouvant être générée par le constructeur Symbol

Types de données non primitifs en JavaScript incluent :
    - Objets
    - Tableaux
Maintenant, voyons ce que signifient exactement les types de données primitifs 
et non primitifs. Les types de données primitifs sont des types de données 
immuables (non modifiables). Une fois qu'un type de données primitif est créé, 
nous ne pouvons pas le modifier.

*/

// EXEMPLE
// - Types de données primitifs

let mot = "Bonjour tous le monde"

let num1 = 2
let num2 = 3
console.log(num1 == num2) // False

let py = "Python"
let js = "JavaScript"
console.log(py == js) // False

let estMarier = false
let estCeliba = true
console.log(estMarier == estCeliba) // False

// - Types de données non primitifs (Références d'objets)

let nums = [1, 2, 3]
num[0] = 10 // Remplace 1 par 10 dans le tableau
console.log(nums) // Retourne 10, 2, 3

/* 
    Comme vous pouvez le voir, un tableau, qui est un type de donnée non primitif, 
    est mutable. Les types de données non primitifs ne peuvent pas être comparés par valeur. 
    Même si deux types de données non primitifs ont les mêmes propriétés et valeurs, 
    ils ne sont pas strictement égaux.
*/

let numbers1 = [1, 2, 3]
let numbers2 = [1, 2, 3]
console.log(numbers1 == numbers2) // False

let userOne = {
    name:'Asabeneh',
    role:'teaching',
    country:'Finland'
    }
    
    let userTwo = {
    name:'Asabeneh',
    role:'teaching',
    country:'Finland'
    }
    
console.log(userOne == userTwo) // false

/* 
    Règle générale, nous ne comparons pas les types de données non primitifs.
    Ne comparez pas les tableaux, les fonctions ou les objets.
    Les valeurs non primitives sont appelées types de référence, 
    car elles sont comparées par référence et non par valeur. 
    Deux objets ne sont strictement égaux que s'ils font référence 
    au même objet sous-jacent
*/

let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true