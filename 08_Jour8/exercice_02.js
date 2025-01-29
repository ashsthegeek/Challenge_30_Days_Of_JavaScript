// EXERCICE NIVEAU 2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}  

// Trouvez la personne qui possède le plus de compétences dans l'objet users.
let personnePlusCompetent = ''
let maxSkills = 0

//  Parcourt chaque utilisateur dans l'objet users
for (const user in users) {
    // Utilise la propriété skills pour déterminer le nombre de compétences
    const skillsCount = users[user].skills.length; 
    /*
        Comparaison : Si le nombre de compétences pour un utilisateur 
        est supérieur au maximum actuel, met à jour personnePlusCompetent et maxSkills.
    */ 
    if (skillsCount > maxSkills) {
      maxSkills = skillsCount;
      personnePlusCompetent = user;
    }
}

console.log(`La personne avec le plus de compétences est : ${personnePlusCompetent}`);
console.log(`Nombre de compétences : ${maxSkills}`);

// RESULTAT : 
// La personne avec le plus de compétences est : Asab
// Nombre de compétences : 8


/*
    Comptez le nombre d'utilisateurs connectés et le nombre 
    d'utilisateurs ayant au moins 50 points, à partir de l'objet
*/

// Initialisation des compteurs
let utilisateursConnectes = 0
let utilisateurAvec50Points = 0

// Parcourir les utilisateurs
for (const user in users) {
    if (users[user].isLoggedIn) {
        utilisateursConnectes ++
    }
    if (users[user].points >= 50) {
        utilisateurAvec50Points ++
    }
}
console.log(`Nombres d'utilisateurs connectés : ${utilisateursConnectes}`)
console.log(`Nombres d'utilisateurs ayant moins de 50 points : ${utilisateurAvec50Points}`)
