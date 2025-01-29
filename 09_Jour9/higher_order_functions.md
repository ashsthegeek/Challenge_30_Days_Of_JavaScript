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
