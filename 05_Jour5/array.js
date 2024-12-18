/*
    Contrairement aux variables, un tableau peut stocker plusieurs valeurs. Chaque valeur possède un index, qui fait référence à une adresse mémoire. L'index commence à zéro, et celui du dernier élément est inférieur de 1 à la longueur du tableau.

    Un tableau est une collection de données ordonnées et modifiables. Il peut contenir des valeurs dupliquées et de types différents. Un tableau peut être vide ou contenir diverses valeurs.
*/

/*
    Créer un tableau vide
    En JavaScript, on peut créer un tableau de plusieurs façons :
*/

// Avec le constructeur Array.

// SYNTAXE 
const tab1 = Array()
// ou
let tab2 = new Array()
console.log(tab1) // []
console.log(tab2) // []

// EXEMPLE 1

//const fruits = new Array('Pomme', 'Banane', 'Orange', 'Mangue');
console.log(fruits); 
// Sortie : ['Pomme', 'Banane', 'Orange', 'Mangue']

//EXEMPLE 2

const tableau1 = Array(); // Crée un tableau vide
console.log(tableau1); // Sortie : []

const tableau2 = Array('a', 'b', 'c', 1, 2, 3); // Crée un tableau avec des valeurs initiales
console.log(tableau2); // Sortie : ['a', 'b', 'c', 1, 2, 3]

// En utilisant des crochets ([])

//SYNTAXE
const arr = []
console.log(arr)

//EXEMPLE
const mesInfos = ['Birama', 'DIOP', 'Birkelane, Gadega', 20, 774039924]
console.log(mesInfos)

// Retourne : Birama DIOP Birkelane, Gadega 20 774039924 (sous forme de tableau)
console.log(mesInfos[0]) // retourne Birama
console.log(mesInfos[1]) // Retourne DIOP
console.log(mesInfos.length) // Retourne la longueur du tableau (5)


// Comment créer un tableau avec des valeurs ?

/*
    On peut créer un tableau en lui attribuant des valeurs initiales. La propriété length permet de trouver la longueur d'un tableau (le nombre d'éléments).
*/

const nombres = [0, 3.14, 9.81, 37, 98.6, 100]; // tableau de nombres  
const fruits = ['banane', 'orange', 'mangue', 'citron']; // tableau de chaînes de caractères, fruits  
const legumes = ['Tomate', 'Pomme de terre', 'Chou', 'Oignon', 'Carotte']; // tableau de chaînes de caractères, légumes  
const produitsAnimaux = ['lait', 'viande', 'beurre', 'yaourt']; // tableau de chaînes de caractères, produits  
const technologiesWeb = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB']; // tableau de technologies web  
const pays = ['Finlande', 'Danemark', 'Suède', 'Norvège', 'Islande']; // tableau de chaînes de caractères, pays  

// Afficher le tableau et sa longueur

console.log('Nombres :', nombres);
console.log('Nombre de nombres :', nombres.length);
// Retourne : Nombres : [0, 3.14, 9.81, 37, 98.6, 100]
// Retourne : Nombre de nombres : 6

console.log('Fruits :', fruits);
console.log('Nombre de fruits :', fruits.length);
// Retourne : Fruits : ['banane', 'orange', 'mangue', 'citron']
// Retourne : Nombre de fruits : 4

console.log('Légumes :', legumes);
console.log('Nombre de légumes :', legumes.length);
// Retourne : Légumes : ['Tomate', 'Pomme de terre', 'Chou', 'Oignon', 'Carotte']
// Retourne : Nombre de légumes : 5

console.log('Produits animaux :', produitsAnimaux);
console.log('Nombre de produits animaux :', produitsAnimaux.length);
// Retourne : Produits animaux : ['lait', 'viande', 'beurre', 'yaourt']
// Retourne : Nombre de produit animaux : 4

/*
    La propiété (.length) permet de compte le nombre d'éléments se trouvant dans un tableau
*/

// Une tableau peut contenir plusieurs types de données

// EXEMPLE
const etudiant = [
    'Birama',
    'DIOP',
    20,
    {Pays : 'Sénégal', capital : 'Dakar'},
    {Comptetences : ['Html', 'CSS', 'JavaStript']}
]

// Accéder et afficher les compétences
console.log('Competences :', etudiant[4].Comptetences);

// Ou afficher chaque compétence séparément
etudiant[4].Comptetences.forEach(competence => {
    console.log(competence);
})

// Créer un tableau à l'aide de split
/*
    Comme nous l'avons vu dans la section précédente, il est possible de diviser une chaîne de caractères à différentes positions, ce qui permet de la transformer en tableau. Examinons les exemples ci-dessous.
*/

//EXEMPLES

let js = 'JavaScript'
const caracteresDansJavaScript = js.split('')

console.log(caracteresDansJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let entreprisesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const entreprises = entreprisesString.split(',')

console.log(entreprises) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

let texte =
  'J’aime enseigner et donner du pouvoir aux gens. J’enseigne HTML, CSS, JS, React, Python.'
const mots = texte.split(' ')

console.log(mots)
// le texte contient des caractères spéciaux, réfléchissez à comment obtenir uniquement les mots
// ["J’aime", "enseigner", "et", "donner", "du", "pouvoir", "aux", "gens.", "J’enseigne", "HTML,", "CSS,", "JS,", "React,", "Python."]


// Accéder aux éléments d'un tableau à l'aide de leur index

/*
Nous accédons à chaque élément d'un tableau en utilisant son index. L'index d'un tableau commence à 0. L'image ci-dessous illustre clairement l'index de chaque élément dans le tableau.
*/

// EXEMPLE 

const telephones = ['Nokia', 'Tecno', 'Apple', 'Samsung'];

// Affichage des éléments du tableau en commençant par l'index 0
let premierTelephone = telephones[0];
console.log(premierTelephone); // Nokia

let deuxiemeTelephone = telephones[1];
console.log(deuxiemeTelephone); // Tecno

let dernierTelephone = telephones[3];
console.log(dernierTelephone); // Samsung

// Alternative : accéder au dernier élément du tableau dynamiquement
// Calcul de l'index du dernier élément : telephones.length - 1
let dernierIndex = telephones.length - 1;
dernierTelephone = telephones[dernierIndex];
console.log(telephones[dernierIndex]); // Samsung


// Modification d'un élément de tableau
/*
    Un tableau est mutable (modifiable). Une fois qu'un tableau est créé, nous pouvons modifier le contenu de ses éléments.
*/

//EXEMPLE 1
const chiffres = [1, 2, 3, 4]
chiffres[0] = 20 // Change le 1 en 20
chiffres[2] = 30 // Change le 3 en 30

console.log(chiffres) // [20, 2, 30, 4]

// EXEMPLE 2

const mesAchats = ['Banana', 'Pomme', 'Légumes', 'Poisson']
console.log("Le tableau initial : ", mesAchats) // ['Banana', 'Pomme', 'Légumes', 'Poisson']

mesAchats[1] = 'Poivron'  // Change Pomme en Poivron
mesAchats[mesAchats.length - 1] = 'Crevettes' // Change Poisson en Crevettes

console.log("Le tableau modifié : ", mesAchats) // [Banana, Poivron, Légumes, Crevettes]


/*
    Constructeur de Tableau
    Array : Pour créer un tableau.
*/

const monTableau = Array(); 
// Crée un tableau vide
console.log(monTableau); // []

const monTableau2 = Array(8); 
// Crée un tableau avec 8 emplacements vides (slots non initialisés)
console.log(monTableau2); // [ <8 empty items> ]


/*
    Créer des valeurs statiques avec fill
    fill : Remplit tous les éléments d'un tableau avec une valeur statique.
*/

const huitValeur = Array(8).fill('Y')
console.log(huitValeur) // ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y']

const cinqZeros = Array(5).fill(0);
// Crée un tableau de 5 zéros : [0, 0, 0, 0, 0]

console.log(cinqZeros);


/*
    Concaténer des tableaux avec concat
    concat : Permet de concaténer (fusionner) deux tableaux.
*/

//EXEMPLE
const listeUn = [1, 2, 3]
const listeDeux = [4, 5, 6]
const listeTrois = listeUn.concat(listeDeux)

console.log(listeTrois)
// [1, 2, 3, 4, 5, 6]

// Vérification si un élément existe dans le tableau
const listeElements = ['Banana', 'Mango', 'Orange', 'Pomme'];
let index = listeElements.indexOf('Banana');  // Recherche l'index de 'Banana'

if (index === -1) {
    console.log("Cet élément n'existe pas dans le tableau");
} else {
    console.log("L'élément existe dans le tableau");
}

// Retourne : "L'élément existe dans le tableau"


