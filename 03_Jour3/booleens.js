/* 
    Un booléen (ou boolean en anglais) est un type de donnée 
    qui ne peut prendre que l'une des deux valeurs suivantes : true ou false.
    Ces valeurs sont souvent utilisées pour représenter des conditions logiques 
    dans des structures de contrôle, comme les conditions (if, else), 
    les boucles, et dans les comparaisons.
*/

// DECLARATION D'UN BOOLEEN

let estVrai = true // Déclare une variable avec la valeur 'true'
let estFaux = false // Déclare une variable avec la valeur 'false'

// EXEMPLE DE CAS D'UTILISATION

let age = 20
let estAdulte = age >= 18 // Dans ce cas true car 20 est >= 18

    if (estAdulte){
        console.log("Vous êtes un adulte")
    }else {
        console.log("Vous êtes un mineur")
    }
// Retourne : "Vous êtes un adulte" car age est >= 18

// LES OPERATEURS DE COMPARAISON
    /*
        == : égal à
        === : strictement égal (prend aussi en compte le type)
        != : différent de
        !== : strictement différent
        > : supérieur à
        < : inférieur à
        >= : supérieur ou égal à
        <= : inférieur ou égal à
    */
// EXEMPLE
let a = 5;
let b = 10;

console.log(a == b);  // false, car 5 n'est pas égal à 10
console.log(a !== b); // true, car 5 est différent de 10
console.log(a < b);   // true, car 5 est inférieur à 10
console.log(a >= 5);  // true, car 5 est supérieur ou égal à 5

// LES OPERATEURS LOGIQUE
/*
    && : "ET" logique (tous les tests doivent être vrais)
    || : "OU" logique (au moins un test doit être vrai)
    ! : négation (inverse une valeur booléenne)
*/
//EXEMPLE D'UTILISATION AVEC && "ET"

    let age2 = 25;
    let aUnPermis = true;

    if (age2 >= 18 && aUnPermis) {
        console.log("Vous pouvez conduire.");
    } else {
        console.log("Vous ne pouvez pas conduire.");
    }
// Retourne : "Vous pouvez conduire." car age2 est superieur ou égal à 18 et aUnPermis = true

// EXEMPLE D'UTILISATION AVEC  || "OU"

    let aUnPasseport = false;
    let aCarteIdentite = true;

    if (aUnPasseport || aCarteIdentite) {
        console.log("Vous pouvez voyager.");
    } else {
        console.log("Vous ne pouvez pas voyager.");
    }

/*
    Retourne : "Vous pouvez voyager." car avec || ("OU") il suffit 
    qu'un expression soit valide pour que ça marche
*/  

// EXEMPLE D'UTILISATION AVEC ! (NÉGATION)
    let estMajeur = true;

    if (!estMajeur) {
        console.log("Vous n'êtes pas majeur.");
    } else {
        console.log("Vous êtes majeur.");
    }
/*
    Retourne : "Vous êtes majeur." car la négation de estMajeur est False
    donc le else va s'exécuter
*/

// Les valeurs falsy et truthy en JavaScript

/*
    En JavaScript, certains types de données sont considérés comme falsy ou truthy dans des contextes booléens. Cela signifie que certains types peuvent être convertis implicitement en true ou false lorsqu'ils sont utilisés dans des conditions.
*/

/*
    Valeurs falsy (sont traitées comme false) :
        - false
        - 0
        - "" (chaîne vide)
        - null
        - undefined
        - NaN
*/

/*
    Valeurs truthy (sont traitées comme true) :

    Tous les autres types non mentionnés ci-dessus (par exemple, une chaîne non vide, un nombre non nul, un objet, un tableau, etc.)    
*/

// EXEMPLE
    let valeur = 0;

    if (valeur) {
        console.log("C'est une valeur truthy");
    } else {
        console.log("C'est une valeur falsy");
    }
// Retourne : "C'est une valeur falsy" car 0 fait patie des falsy
