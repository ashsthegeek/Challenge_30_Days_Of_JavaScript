# Jour 10

## Set

Un ensemble (Set) est une collection d'éléments. Un ensemble ne peut contenir que des éléments uniques.
Voyons comment créer un ensemble dans la section ci-dessous.

### Création d’un ensemble vide

```js
const companies = new Set()
console.log(companies)

/*
Ici, on utilise le constructeur Set() pour créer un ensemble vide appelé companies.
Un Set est une structure de données qui ne stocke que des valeurs uniques.
L'instruction console.log(companies) affiche le contenu de l’ensemble, qui est vide au départ 
*/
Set(0) {}
```

### Création d’un ensemble à partir d’un tableau

```js
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
/*
    Ici, on définit un tableau languages contenant plusieurs langues, dont certaines sont répétées ('English' et 'French' apparaissent plusieurs fois).
*/

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

/*
    On utilise new Set(languages) pour créer un ensemble (setOfLanguages) à partir du tableau.
    Comme un Set ne peut contenir que des valeurs uniques, les doublons sont automatiquement supprimés.
    Lorsqu'on affiche setOfLanguages, on obtient un ensemble contenant uniquement les valeurs uniques du tableau initial.
    Par exemple, si on exécute le code, on obtiendrait quelque chose comme ceci :
*/
Set(4) { 'English', 'Finnish', 'French', 'Spanish' }

/*
    Pourquoi utiliser un Set ?
    Pour s'assurer qu'une collection ne contient que des éléments uniques.
    Utile pour filtrer rapidement les doublons dans un tableau.
    Fournit des méthodes utiles comme .add(), .delete(), et .has() pour manipuler les données efficacement.
*/
```

### Ajout d’un élément à un ensemble

```js
const companies = new Set() // création d’un ensemble vide
console.log(companies.size) // 0

companies.add('Google') // ajout d’un élément à l’ensemble
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 éléments dans l’ensemble
console.log(companies)
// Retourne  : Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}
```

### Nous pouvons également utiliser une boucle pour ajouter des éléments à un ensemble

```js
const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}

console.log(setOfCompanies)
// Retourne : Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}
```
