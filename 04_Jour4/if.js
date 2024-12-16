// Les condition if en JavaSrcipt
/*
    SYNTAXE :
        if(condition) {
            (le code a exécuté si la condition est vrai)
        }
*/

// Exemple :
let a = 20;
    if(a == 20) {
        alert("a est égale à 20 !")
    }
// a est égale à 20 !

// Exemple 2
let aUnPermis = true
    if(aUnPermis) {
        alert("Bravo ! tu peux conduire une voiture")
    }
// Bravo ! tu peux conduire une voiture

// Exemple 3
let nombre = 3
    if (nombre > 0) {
        console.log(`${nombre} est un nombre positif`)
    }
//  3 est un nombre positif

/*
    Ici nous avons vu qu'avec if seulement, nous ne donnons pas l'utilisateur la 
    possibilité de savoir ce qui se passera si une fois la condition n'est pas remplie.
    C'est ce que nous allons voire dans la partie if else, pour dire à l'utilisateur que
    la condition n'est pas remplie
*/