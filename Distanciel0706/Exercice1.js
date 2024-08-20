// Exercice 1 : Création d'une fonction constructeur pour un produit

// Créez une fonction constructeur Produit pour représenter des produits dans un magasin. Chaque produit devrait avoir les propriétés suivantes :
// nom (une chaîne de caractères)
// prix (un nombre décimal)
// description (une chaîne de caractères)

function Produit(nom,prix,description) {
    this.nom = nom;
    this.prix = prix;
    this.description = function(){
        return 'le produit est' + this.nom + 'coûte' + this.prix
    };
    let Produit1 = new Produit('bouteille de lait',1);
    let Produit2 = new Produit('kilo de pommes',3);
}
console.log(produit1.description());
console.log(Produit2.description());