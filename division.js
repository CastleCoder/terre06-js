// Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.


// Exemples d’utilisation :
// $> python exo.py 5 2
// résultat: 2
// reste: 1


// $> python exo.py 10 0
// erreur.


// $> python exo.py 3 5
// erreur.


function division(a, b){
  let calcul = a/b;
  let result = Math.floor(calcul);
  let rest = calcul - result;

  console.log(`Le calcul est égal à ${result} et il restera ${rest}` )
}

const args = process.argv.slice(2);
division(args[0], args[1])