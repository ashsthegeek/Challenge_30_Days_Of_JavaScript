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
