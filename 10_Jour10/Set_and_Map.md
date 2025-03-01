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

### Suppression d'un élément d'un ensemble

Nous pouvons supprimer un élément d'un ensemble en utilisant la méthode delete.

```js
console.log(companies.delete('Google'))
console.log(companies.size) // 4 éléments restants dans l'ensemble
```

### Vérification d'un élément dans l'ensemble

La méthode has permet de savoir si un certain élément existe dans un ensemble.

```js
console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true
```

### Vidage de l'ensemble

Cette opération supprime tous les éléments d'un ensemble

```js
companies.clear()
console.log(companies)

// Set(0) {}
```

### Voir l'exemple ci-dessous pour apprendre à utiliser Set

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
const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)
```


## Création d'une Map à partir d'un tableau

```js
countries = [
  ['Finlande', 'Helsinki'],
  ['Suède', 'Stockholm'],
  ['Norvège', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)

// Resultat : Map(3) {"Finlande" => "Helsinki", "Suède" => "Stockholm", "Norvège" => "Oslo"}

```

### Ajout de valeurs à la Map

```js
const countriesMap = new Map() // Création d'un map vide
console.log(countriesMap.size) // 0

// Ajout de valeurs avec set
countriesMap.set('Finlande', 'Helsinki')
countriesMap.set('Suède', 'Stockholm')
countriesMap.set('Norvège', 'Oslo')

// Affichage de résultats
console.log(countriesMap) 
// Map(3) {"Finlande" => "Helsinki", "Suède" => "Stockholm", "Norvège" => "Oslo"}
console.log(countriesMap.size) // 3
```

### Obtenir une valeur depuis une Map

```js
console.log(countriesMap.get('Finlande'))
// Retourne : Helsinki
```

### Vérifier la présence d'une clé dans une Map

On peut vérifier si une clé existe dans une Map en utilisant la méthode _has_. Elle retourne true ou false

```js
console.log(countriesMap.has('Finlande'))
// Retourne : True car Finlande existe dans map
```

### Obtenir toutes les valeurs d'une Map en utilisant une boucle

```js
for (const country of countriesMap) {
  console.log(country)
}

// Resultat : 
/*
  (2) ["Finlande", "Helsinki"]
  (2) ["Suède", "Stockholm"]
  (2) ["Norvège", "Oslo"]
*/
```

```js
for (const [country, city] of countriesMap) {
  console.log(country, city)
}

/*
RETOURNE : 

  Finlande Helsinki
  Suède Stockholm
  Norvège Oslo
*/
```

### FIN
