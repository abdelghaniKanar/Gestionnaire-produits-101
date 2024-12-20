// Création de la classe Produit et exportation de ce module.
class Produit {
  constructor(nom, description, quantité, prix) {
    this.nom = nom;
    this.description = description;
    this.quantité = quantité;
    this.prix = prix;
  }
}

module.exports = Produit;
