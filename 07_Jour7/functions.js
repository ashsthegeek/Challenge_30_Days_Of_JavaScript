/*
    Jusqu'à présent, nous avons vu de nombreuses fonctions intégrées en JavaScript. Dans cette section, nous allons nous concentrer sur les fonctions personnenalisées. Qu'est-ce qu'une fonction ? Avant de commencer à créer des fonctions, comprenons ce qu'est une fonction et pourquoi nous en avons besoin.

    Une fonction est un bloc de code ou d'instructions programmées réutilisable, conçu pour effectuer une tâche précise.
    Une fonction est déclarée avec le mot-clé function, suivi d'un nom, puis de parenthèses (). Les parenthèses peuvent prendre un paramètre. Si une fonction prend un paramètre, elle sera appelée avec un argument. Une fonction peut également prendre un paramètre par défaut. Pour stocker des données dans une fonction, celle-ci doit renvoyer un certain type de données. Pour obtenir la valeur, nous appelons ou invoquons la fonction.

    ## Les fonctions rendent le code :
        - clair et facile à lire,
        - réutilisable,
        - facile à tester.

    
    ## Une fonction peut être déclarée ou créée de plusieurs manières :
        - Fonction déclarative,
        - Fonction d'expression,
        - Fonction anonyme,
        - Fonction fléchée (Arrow function).
*/

// Déclaration de fonction
// Voyons comment déclarer une fonction et comment l'appeler.

// SYNTAXE :

// déclaration d'une fonction sans paramètre
function nomDeLaFonction() {
    // le code s'écrit ici
  }
  nomDeLaFonction() // appel de la fonction par son nom et avec des parenthèses

// EXEMPLE
function salutation() {
    console.log("Bonjour tout le monde ! ")
}
salutation()

// Fonction sans paramètre ni retour
// Une fonction peut être déclarée sans paramètre.

// EXEMPLE :

// fonction sans paramètre, une fonction qui calcule le carré d'un nombre
function carre() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }
  
  carre() // 4
  
  // fonction sans paramètre
  function ajouterDeuxNombres() {
    let numUn = 10
    let numDeux = 20
    let somme = numUn + numDeux
  
    console.log(somme)
  }
  
  ajouterDeuxNombres() // une fonction doit être appelée par son nom pour être exécutée 


// Fonction permettant d'afficher le nom complet

  function afficherNomComplet() {
    let prenom = 'Birama'
    let nom = 'DIOP'
    let espace = ' ' // On pourrait directement mettre les spaces lors de la concaténation
    let nomComplet = prenom + espace + nom
    console.log(nomComplet)
}

afficherNomComplet() // appel d'une fonction

// Fonction retournant une valeur
/*
    Une fonction peut également renvoyer des valeurs. Si une fonction ne renvoie pas de valeur, sa valeur est undefined
*/

// Définition de la fonction phrase
function phrase() {
    let text1 = "Je suis le texte numéro 1"; // Première partie du texte
    let text2 = "Je suis le texte numéro 2"; // Deuxième partie du texte
    let space = " "; // Espace entre les deux parties
    let texteComplet = text1 + space + text2; // Combinaison des textes
    return texteComplet; // Retourne la chaîne combinée
}

// Exemple erroné : accès direct à texteComplet
// console.log(texteComplet); 
// Cette ligne provoque une erreur car texteComplet n'est pas défini dans la portée globale.

// Solution correcte : appeler la fonction et afficher le résultat
console.log(phrase()); 

// Résultat attendu :
// Je suis le texte numéro 1 Je suis le texte numéro 2

// Fonction avec un paramètre

/*
    Dans une fonction, nous pouvons passer différents types de données (nombre, chaîne de caractères, booléen, objet, fonction) en tant que paramètre.
*/
// SYNTAXE : 

function nomDeLaFonction(parm1) {
    // le code s'écrit ici
  }
  nomDeLaFonction(parm1) // lors de l'appel ou de l'invocation, un argument est nécessaire

// EXEMPLE : 

function aireDuCercle (r) {
    let aire = Math.PI * r * r
    return aire
}
console.log(aireDuCercle(10)) // Le 10 représente le paramettre de la fonction

function carreNombre (nombre) {
    return nombre * nombre
}
console.log(carreNombre(10)) // Retourne le carré du nombre saisie en paramettre

// Fontion avec 2 Paramétres

// SYNTAXE :
function nomFonction(param1, param2) {
    // Le code sera ici !
}

// EXEMPLE :
// Fonction permettant de faire  la somme de 2 nombres

function sommeNombre(nombre1, nombre2) {
    let somme = nombre1 + nombre2
    console.log(somme)
}
sommeNombre(10, 20) // 30

// Fonctions avec plusieurs paramétres

// SYNTAXE :
/*
function nomDeLaFonction(parm1, parm2, parm3, ...) {
    // le code s'écrit ici
}
  nomDeLaFonction(parm1, parm2, parm3, ...)

        lors de l'appel ou de l'invocation, trois arguments sont nécessaires
*/

// EXEMPLE 

// cette fonction prend un tableau comme paramètre et additionne les nombres dans le tableau
function sommeValeursTableau(arr) {
    let somme = 0;
    for (let i = 0; i < arr.length; i++) {
      somme = somme + arr[i];
    }
    return somme;
}
const nombres = [1, 2, 3, 4, 5];

// appel de la fonction
console.log(sommeValeursTableau(nombres));




