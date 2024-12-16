// Les chaînes de caractéres en JS
let prenom = 'Birama' // on peut aussi utilisé les ("")
let nom = "DIOP"
let quartier = "Gadega Scale"
let nationalite = "Sénégalais"

// On peut additionner des string, dans ce cas on parle de concaténation
let mesInfos = prenom + nom + quartier
console.log(mesInfos) // Retourne Birama DIOP Gadega Scale
// On peut aussi faire
console.log("Bonjour je m'applle" + " " + prenom + " " + nom + " " + "J'habite à " + quartier)
// Retourne = Bonjour je m'applle Birama DIOP J'habite à Gadega

// L'interpollation de chaîne ou String Interpolation
let nom2 = "Alice";
let age = 25;

// Interpolation de chaînes
let message = `Bonjour, je m'appelle ${nom2} et j'ai ${age} ans.`;

console.log(message);
// Retourne : Bonjour, je m'appelle Alice et j'ai 25 ans.

// Chaînes multi-lignes
let texteMultiLigne = `Ceci est une chaîne
qui s'étend sur plusieurs
lignes.`;

console.log(texteMultiLigne);
