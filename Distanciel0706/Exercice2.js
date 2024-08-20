// Exercice 2 : Création d'une méthode pour afficher les informations du produit
// Ajoutez une méthode infosProduit() au prototype de Produit qui affiche les informations du produit (nom, prix et description).

// Exercice 3 : Création de plusieurs instances de produits
// Créez quelques instances de produits à l'aide de la fonction constructeur Produit que vous avez définie précédemment. 
// Appelez ensuite la méthode infosProduit() pour chaque instance créée afin d'afficher leurs informations.


function Produit(nom,prix,description) {
    this.nom = nom;
    this.prix = prix;
    this.description = function(){
        return 'Ce produit est' + this.nom + 'coûte' + this.prix
    };
    let Produit1 = new Produit('bouteille de lait',1);
    let Produit2 = new Produit('kilo de pommes',3);
};
 
Produit.prototype.infosProduit = function() {
    return 'Ce produit est:' + this.nom + 'coute' + this.prix;
};
console.log(Produit1.infosProduit1());
console.log(Produit2.infosProduit2());
