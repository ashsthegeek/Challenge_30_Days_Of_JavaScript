/*
    Dans notre vie quotidienne, nous prenons constamment des décisions basées sur plusieurs conditions, et non une ou deux uniquement. De manière similaire en programmation, les conditions jouent un rôle crucial. Nous utilisons else if lorsque nous devons gérer plusieurs conditions successives.
*/

// SYNTAXE :

if (condition) {
    // code
} else if (condition) {
  // code
} else {
   //  code
}

// EXEMPLE 1

let a = 0;
if (a > 0) {
  console.log(`${a} est un nombre positif`);
} else if (a < 0) {
  console.log(`${a} est un nombre négatif`);
} else if (a == 0) {
  console.log(`${a} est zéro`); // C'est cette ligne qui va s'exécuté (car a vaut 0)
} else {
  console.log(`${a} n'est pas un nombre`);
}

// EXEMPLE 2

let meteo = 'ensoleillé';
if (meteo === 'pluvieux') {
  console.log("Vous avez besoin d'un manteau de pluie.");
} else if (meteo === 'nuageux') {
  console.log("Il pourrait faire froid, vous avez besoin d'une veste.");
} else if (meteo === 'ensoleillé') {
  console.log("Sortez librement."); // C'est cette partie qui va s'exécuté
} else {
  console.log("Pas besoin de manteau de pluie.");
}

