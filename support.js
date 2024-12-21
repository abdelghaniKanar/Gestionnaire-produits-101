const Produit = require("./produit");
const prompt = require("prompt-sync")();
const fs = require("fs");

const produit = new Produit();
let produits = [];

class Support {
  static ajouterProduit() {
    if (fs.existsSync("data.json")) {
      produits = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    } else {
      fs.writeFileSync("data.json", "[]");
    }
    produit.nom = prompt("enter product name: ");
    produit.description = prompt("enter product description: ");
    produit.quantite = prompt("enter product quantity: ");
    produit.prix = prompt("enter product price: ");

    produits.push(produit);

    produits = JSON.stringify(produits);
    fs.writeFileSync("data.json", produits, null, 4);
  }
}

module.exports = Support;
