### Jour 8 : Les Objets (Objectd) en JavaScript

### Portée (Scoop)

La variable est un élément fondamental en programmation. Nous déclarons des variables pour stocker différents types de données. Pour déclarer une variable, nous utilisons les mots-clés var, let et const. Une variable peut être déclarée à différentes portées. Dans cette section, nous allons examiner les portées des variables et comment elles diffèrent lorsque nous utilisons var ou let.
Les portées des variables peuvent être :

    -Globale
    -Locale

Une variable peut être déclarée avec une portée globale ou locale. Nous allons étudier les deux cas, global et local.
Tout ce qui est déclaré sans let, var ou const est défini avec une portée globale.

Imaginons que nous ayons un fichier nommé scope.js

### Objet Global Window

Sans utiliser console.log(), ouvrez votre navigateur et vérifiez : vous verrez les valeurs de a et b si vous écrivez a ou b dans le navigateur. Cela signifie que a et b sont déjà accessibles dans l'objet global window.

```js
// scope.js
a = 'JavaScript'; // Déclarer une variable sans let ou const la rend disponible dans l'objet window et accessible partout.
b = 10; // Ceci est une variable de portée globale et elle est présente dans l'objet window.

function letsLearnScope() {
  console.log(a, b); // Accède aux variables globales `a` et `b`.

  if (true) {
    console.log(a, b); // Toujours accessible ici, car `a` et `b` sont globales.
  }
}

console.log(a, b); // Les variables `a` et `b` sont accessibles même en dehors de la fonction.

```
### Portée Global

Une variable déclarée globalement peut être accessible partout dans le même fichier. Cependant, le terme global est relatif. Il peut s'agir de la portée globale au fichier ou de la portée globale par rapport à un bloc de code spécifique.

```js

// scope.js
let a = 'JavaScript'; // a une portée globale et sera disponible partout dans ce fichier
let b = 10; // a une portée globale et sera disponible partout dans ce fichier

function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accessible
  if (true) {
    let a = 'Python'; // Déclaration locale au bloc if
    let b = 100;      // Déclaration locale au bloc if
    console.log(a, b); // Python 100
  }
  console.log(a, b); // JavaScript 10, retourne aux valeurs globales
}

letsLearnScope();
console.log(a, b); // JavaScript 10, accessible

```

### Portée Locale

Une variable déclarée avec une portée locale est accessible uniquement dans un bloc de code donné.

    -Portée de bloc
    -Portée de fonction

```js

// scope.js
let a = 'JavaScript'; // portée globale, accessible partout dans ce fichier
let b = 10;           // portée globale, accessible partout dans ce fichier

// Portée de fonction
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accessible
  let value = false;
  // Portée de bloc
  if (true) {
    // Les variables déclarées à l'intérieur du if ne sont pas accessibles en dehors de ce bloc.
    let a = 'Python';
    let b = 20;
    let c = 30;
    let d = 40;
    value = !value;
    console.log(a, b, c, value); // Python 20 30 true
  }
  // On ne peut pas accéder à 'c' car sa portée est limitée au bloc if
  console.log(a, b, value); // JavaScript 10 true
}

letsLearnScope();
console.log(a, b); // JavaScript 10, accessible

```

Avec cet exemple, vous comprenez maintenant les différentes portées :

-Une variable déclarée avec var a une portée limitée à la fonction dans laquelle elle est déclarée.

-Une variable déclarée avec let ou const a une portée limitée au bloc où elle est définie (bloc d'une fonction, bloc if, boucle, etc.).

-Un bloc en JavaScript est défini par des accolades {}.

### Exemple avec var, let, et leur portée :

```js
// scope.js
function letsLearnScope() {
  var gravity = 9.81; // Portée limitée à cette fonction
  console.log(gravity);
}

// console.log(gravity); Uncaught ReferenceError: gravity is not defined

if (true) {
  var gravity = 9.81; // Avec `var`, la variable est accessible en dehors du bloc if
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3 (i est accessible même en dehors de la boucle car var n'a pas une portée de bloc)

```

### Points à retenir :

var crée une variable de portée de fonction ou globale. Elle n'est pas limitée au bloc.
let ou const créent des variables limitées à leur bloc de déclaration (if, boucle, fonction, etc.).
Utilisez préférablement let ou const pour éviter les effets inattendus et améliorer la lisibilité du code.
