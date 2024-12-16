// Les condition if en JavaSrcipt
/*
    SYNTAXE :
        if(condition) {
            (le code a exécuté si la condition est vrai)
        }
        else{
            (le code a exécuté si la condition ne marche n'est pas remplie)
        }
*/

// Exemple :
let a = 19;
    if(a == 20) {
        alert("a est égale à 20 !")
    }
    else{
        alert("a n'est pas égale à 20")
    }
// a n'est pas égale à 20

// Exemple 2
let aUnPermis = false
    if(aUnPermis) {
        alert("Bravo ! tu peux conduire une voiture")
    }
    else {
        alert("vous ne pouvez pas conduire")
    }
// vous ne pouvez pas conduire

// Exemple 3
let nombre = -3
    if (nombre > 0) {
        console.log(`${nombre} est un nombre positif`)
    }
    else{
        console.log(`${nombre} est un nombre négatif`)
    }
//  -3 est un nombre négatif


//Exemple 4

nom = prompt("Entrer un nombre").toLowerCase()

if (nom == "birama"){
    console.log("Le nom saisie est birama")
}else{
    console.log("Le nom saisie ne correspond pas à birama")
}
/*
    si l'utilisateur tape birama ça retourne : Le nom saisie est birama
    sinon ça retournera : Le nom saisie ne correspond pas à birama
*/