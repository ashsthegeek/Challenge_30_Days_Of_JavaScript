// Définition du tableau contenant des langues avec des doublons
const langues = [
    'Français',
    'Anglais',
    'Français',
    'Espagnol', 
    'Allemand',
    'Anglais',
    'Espagnol'
]

// Création d'un Set pour obtenir les langues uniques
const ensembleLangues = new Set(langues)
console.log(ensembleLangues) // Set(4) {'Français', 'Anglais', 'Espagnol', 'Allemand'}
console.log(ensembleLangues.size) // Retourne 4

const counts = []

// Boucle sur les langues uniques pour compter leur occurrence
for (const langue of ensembleLangues) {
    const filteredLang = langues.filter((lng) => lng === langue) // Comparaison correcte
    console.log(filteredLang) // Affiche les occurrences de chaque langue
    counts.push({ lang: langue, count: filteredLang.length }) 
}

console.log(counts) // Affiche le nombre d'occurrences de chaque langue

// Resultat : 

[
    { lang: 'Français', count: 2 },
    { lang: 'Anglais', count: 2 },
    { lang: 'Espagnol', count: 2 },
    { lang: 'Allemand', count: 1 }
]


  
