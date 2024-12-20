const readline = require("readline");

// Variables globales
// let quitter = false;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Bienvenue dans notre Gestionnaire de produits N° 101.");
panneauDeControle();

function panneauDeControle() {
  console.log("Panneau de Contrôle. Veuillez faire un choix :");
  console.log("1. Pour Ajouter.");
  console.log("2. Pour Afficher.");
  console.log("3. Pour Modifier.");
  console.log("4. Pour Suprimer.");
  console.log("5. Pour quitter.");
  rl.question("Entrez votre choix : ", (choix) => {
    switch (choix) {
      case "1":
        // console.log("Veuillez ajouter les détails du produit :");
        console.log("Ajouter un nouveau produit :");
        panneauDeControle();
        break;
      case "2":
        console.log("Stock de produits disponibles :");
        panneauDeControle();
        break;
      case "3":
        console.log("Mettre à jour les détails du produit :");
        panneauDeControle();
        break;
      case "4":
        console.log("Supprimer le produit :");
        panneauDeControle();
        break;
      case "5":
        console.log("\nGestionnaire N° 101 vous dit au revoir !");
        rl.close();
        break;
      default:
        console.log("\nChoix invalide. Essayez à nouveau.");
        panneauDeControle();
        break;
    }
  });
}
