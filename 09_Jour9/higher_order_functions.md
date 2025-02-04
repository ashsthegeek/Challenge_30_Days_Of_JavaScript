# Jour 9

## Fonction d'ordre supérieur

Les fonctions d'ordre supérieur sont des fonctions qui prennent une autre fonction comme paramètre ou renvoient une fonction comme valeur. La fonction passée en paramètre est appelée rappel.

### Rappel

Un rappel est une fonction qui peut être passée en paramètre à une autre fonction. Voir l'exemple ci-dessous.

```js

// une fonction de rappel, le nom de la fonction peut être quelconque
const callback = (n) => {
  return n ** 2 
}

// fonction qui prend une autre fonction comme rappel
function cube(callback, n) {
  return callback(n) * n
}

console.log(cube(callback, 3))

```

Le code JavaScript utilise le concept de fonctions de rappel (callbacks). Une fonction de rappel est une fonction qui est passée comme argument à une autre fonction. Cela permet de créer des fonctions plus flexibles et réutilisables. Dans cet exemple, la fonction cube utilise la fonction callback pour calculer le cube d'un nombre.

### Retourner une fonction

Les fonctions d'ordre supérieur retournent une fonction en tant que valeur.

```js
// Fonction d'ordre supérieur retournant une autre fonction
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))
```

Voyons où nous utilisons des fonctions de rappel (call back). Par exemple, la méthode forEach utilise une fonction de rappel.

```js
  const nombres = [1, 2, 3, 4, 5]
  const sommeTableau = tableau => {
    let somme = 0
    const callback = function(element) {
      somme += element
    }
    tableau.forEach(callback)
    return somme
  }
  console.log(sommeTableau(nombres))
```

L'exemple ci-dessus peut être simplifié comme suit :

```js

const nombres = [1, 2, 3, 4]

const sommeTableau = tableau => {
  let somme = 0
  tableau.forEach(function(element) {
    somme += element
  })
  return somme
}
console.log(sommeTableau(nombres))
```

### Setting Time

En JavaScript, nous pouvons exécuter certaines activités à un intervalle de temps spécifique ou nous pouvons planifier (attendre) un certain temps pour exécuter certaines activités.

- setInterval

- setTimeout

#### Setting Interval using a setInterval function

En JavaScript, nous utilisons la fonction d'ordre supérieur setInterval pour effectuer une activité de manière continue à un intervalle de temps donné. La méthode globale setInterval prend une fonction de rappel (callback) et une durée comme paramètres. La durée est en millisecondes, et la fonction de rappel sera appelée à chaque intervalle de temps spécifié.

```js
// syntax
function callback() {
  // le code sera ici
}
setInterval(callback, duration)
```

```js
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000) // ça va afficher  hello dans chaque seconde, (1000ms égal à  1s)
```

#### Setting a time using a setTimeout

En JavaScript, nous utilisons la fonction d'ordre supérieur setTimeout pour exécuter une action à un moment donné dans le futur. La méthode globale setTimeout prend une fonction de rappel (callback) et une durée comme paramètres. La durée est en millisecondes, et la fonction de rappel attend ce laps de temps avant de s'exécuter.

```js
// syntax
function callback() {
  // Le code sera ici
}
setTimeout(callback, duration) // duration en  millisecondes
```

```js
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) // Ça va afficher Hello aprés avoir attendu 2 secondes.
```

### Programmation Fonctionnelle

Au lieu d'écrire des boucles classiques, les dernières versions de JavaScript ont introduit de nombreuses méthodes intégrées qui peuvent nous aider à résoudre des problèmes complexes. Toutes ces méthodes intégrées prennent une fonction de rappel (callback). Dans cette section, nous allons voir forEach, map, filter, reduce, find, every, some et sort.

### forEach

forEach : Parcourt les éléments d'un tableau. Nous utilisons forEach uniquement avec des tableaux. Il prend une fonction de rappel avec les éléments, un paramètre d'index et le tableau lui-même. L'index et le tableau sont optionnels.

```js

arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})
// Le code ci-dessus peut être écrit en utilisant une fonction fléchée
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})
// Le code ci-dessus peut être écrit en utilisant une fonction fléchée et un retour explicite
arr.forEach((element, index, arr) => console.log(index, element, arr))

```

```js
let sum = 0
const nombres = [1, 2, 3, 4, 5]
nombres.forEach(num => console.log(num))
console.log(sum) // 1 2 3 4 5
```

```js
let sum = 0
const nombres = [1, 2, 3, 4, 5]
nombres.forEach(num => sum = sum + num); // sum += num
console.log(sum) // Retourne 15
```

```js
const pays = ['Sénégal', 'Mali', 'Niger', 'Gambie']
pays.forEach((element) =>console.log(element.toUpperCase()));
//Retourn : SÉNÉGAL MALI NIGER GAMBIE
```
