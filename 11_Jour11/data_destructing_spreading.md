# Jour 11

## Déstructuration et Spread

La déstructuration est une manière de déballer des tableaux et des objets en assignant leurs éléments à des variables distinctes.

### Déstructuration de tableaux

```js
    const nombres = [1, 2, 3]
    let [un, deux, trois] = nombres
    console.log(un, deux, trois)
    // Retourne : 1, 2, 3
```

```js
    const infos = ['Birama', 'DIOP', 'Sénégal']
    let [prenom, nom, pays] = infos
    console.log(prenom, nom, pays)
    // Retourne : Birama DIOP Sénégal
```

On peut aussi faire:

```js
    // Données personnelles (objet)
    const infos = { prenom: "Birama", nom: "DIOP", pays: "Sénégal" }
    const { prenom, nom, pays } = infos
    console.log(`${prenom} ${nom} vient du ${pays}`) 
    // Retourne : Birama DIOP vient du Sénégal
```

Nous pouvons utiliser la valeur par défaut au cas où la valeur du tableau pour cet index n'est pas définie :

```js
const noms = [undefined, 'Modou', 'Mamy']
let [
    premierNom = 'Fatou',
    deuxiemeNom,
    troisiemeNom,
    quatriemeNom = 'Astou'
] = noms

console.log(premierNom, deuxiemeNom, troisiemeNom, quatriemeNom)
// Retourn : Fatou, Modou, Mamy, Astou
```

Nous ne pouvons pas affecter des variables à tous les éléments du tableau. Nous pouvons déstructurer quelques-uns des premiers éléments et obtenir le reste sous forme de tableau grâce à l'opérateur de propagation (...).

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3) 
//Retourne: 1, 2, 3
console.log(rest) 
// Retourne: 4, 5, 6, 7, 8, 9, 10
```

### Déstructuration lors de l'itération

```js
const pays = [
    ['Sénégal', 'Dakar'],
    ['Cote d\'ivoir', 'Abidjan'],
    ['Gambie', 'Banjul']
]
for (const [countrie, capital] of pays) {
    console.log(countrie, capital)
}

// Retourne: Sénégal Dakar, Cote d'ivoir Abidjan, Gambie Banjul
```

```js
const fullStack = [
    ['Html', 'CSS', 'JavaScript', 'React'],
    ['MongoDB', 'Node', 'Express']
]
for (const [first, second, third] of fullStack) {
    console.log(first, second, third)
}
// Retourne : 
// Html, CSS, JavaScript
// MongoDB, Node, Express
```

### Déstructuration Objet

Lors de la déstructuration, le nom de la variable utilisée doit être identique à celui de la clé ou de la propriété de l'objet. Voir l'exemple ci-dessous.

```js
const rectangle = {
    largeur : 20,
    hauteur : 10,
    surface : 200
}

let {largeur, hauteur, surface, perimetre} = rectangle

console.log(largeur, hauteur, surface, perimetre)

// Retourne : 20 10 200 undefined
```

### Renommer pendant la structuration

```js
const rectangle = {
    largeur : 20,
    hauteur : 10,
    surface : 200
}

let {largeur: l, hauteur: h, surface: s, perimetre: p} = rectangle

console.log(l, h, s, p)
// Retourne: 20 10 200 undefined
```

Si la clé est introuvable dans l'objet, la variable sera affectée à undefined. Il arrive que la clé ne soit pas présente dans l'objet ; dans ce cas, nous pouvons indiquer une valeur par défaut lors de la déclaration. Voir l'exemple.

```js
const rectangle = {
    largeur : 20,
    hauteur : 10,
    surface : 200,
    perimetre : 80
}

let {largeur, hauteur, surface, perimetre = 60} = rectangle

console.log(largeur, hauteur, surface, perimetre)
//Retourne: 30 10 200 80

```
