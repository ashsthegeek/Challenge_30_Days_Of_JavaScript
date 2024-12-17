/*
    Le switch est une alternative aux conditions if...else if...else. Il commence par le mot-clé switch, suivi de parenthèses contenant une valeur à vérifier, et d’un bloc de code avec des cas (cases). Si la valeur correspond à un cas, le code de ce cas est exécuté. La déclaration break termine l'exécution pour éviter de continuer aux autres cas. Si aucune condition n'est satisfaite, le bloc default s'exécute.
*/

// SYNTAXE

switch(caseValue){
    case 1:
      // code
      break
    case 2:
     // code
     break
    case 3:
     // code
     break
    default:
     // code
}

// EXEMPLE 1

let meteo = 'nuageux';  
switch (meteo) {  
  case 'pluvieux':  
    console.log("Vous avez besoin d'un manteau de pluie.");  
    break;  
  case 'nuageux':  
    console.log("Il pourrait faire froid, vous avez besoin d'une veste.");  
    break;  
  case 'ensoleillé':  
    console.log("Sortez librement.");  
    break;  
  default:  
    console.log("Pas besoin de manteau de pluie.");  
}

// Il pourrait faire froid, vous avez besoin d'une veste.

// EXEMPLE 2

// Demande à l'utilisateur de saisir un jour de la semaine
let jourUtilisateur = prompt('Quel jour sommes-nous ?');  
// affectation et conversion en minuscule du contenu de jourUtilisateur à jour
let jour = jourUtilisateur.toLowerCase(); 

switch (jour) {  
  case 'lundi':  
    console.log("Aujourd'hui, c'est lundi.");  
    break;  
  case 'mardi':  
    console.log("Aujourd'hui, c'est mardi.");  
    break;  
  case 'mercredi':  
    console.log("Aujourd'hui, c'est mercredi.");  
    break;  
  case 'jeudi':  
    console.log("Aujourd'hui, c'est jeudi.");  
    break;  
  case 'vendredi':  
    console.log("Aujourd'hui, c'est vendredi.");  
    break;  
  case 'samedi':  
    console.log("Aujourd'hui, c'est samedi.");  
    break;  
  case 'dimanche':  
    console.log("Aujourd'hui, c'est dimanche.");  
    break;  
  default:  
    console.log("Ce n'est pas un jour de la semaine.");  
}

// Le résultat afficher dépenderas du jour saisie par l'utilisateur


// EXEMPLE 3

let nombre = prompt('Entrez un nombre');  
switch (true) {  
  case nombre > 0:  
    console.log("Le nombre est positif.");  
    break;  
  case nombre == 0:  
    console.log("Le nombre est zéro.");  
    break;  
  case nombre < 0:  
    console.log("Le nombre est négatif.");  
    break;  
  default:  
    console.log("La valeur saisie n'est pas un nombre.");  
}


