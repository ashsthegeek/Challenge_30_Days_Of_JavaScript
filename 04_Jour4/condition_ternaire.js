/*
Opérateurs ternaires :
Une autre façon d'écrire des conditions est d'utiliser les opérateurs ternaires. Bien que cela ait déjà été abordé dans d'autres sections, il est important de le mentionner ici.
En résumé, un opérateur ternaire simplifie les instructions conditionnelles if-else en une seule ligne
*/

// SYNTAXE
condition ? expression_si_vraie : expression_si_fausse;

//EXEMPLE 1
let age = 18;  
let message = age >= 18 ? "Adulte" : "Mineur";  
console.log(message); // "Adulte"  

//EXEMPLE 2
let temperature = 25;
let message2 = temperature > 30 ? "Il fait chaud" : (temperature > 20 ? "Il fait agréable" : "Il fait froid");
console.log(message2); // "Il fait agréable"


