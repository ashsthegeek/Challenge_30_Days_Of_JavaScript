/*
    BREACK est utilisé pour interrompre une boucle
*/

// EXEMPLE

for(let i = 0; i <= 5; i++){
    if(i == 3){
      break // La boucle s'arrete l'orsque i sera égale à 3
    }
    console.log(i)
}
// 0 1 2

/*
    Nous utilisons le mot-clé (continue) pour passer certaines itérations.
*/

// EXEMPLE

for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
}
// 0 1 2 4 5