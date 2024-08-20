// Exercice 6 : Création d'un objet produit
// Créez un objet produit avec les propriétés suivantes :
// nom (une chaîne de caractères)
// prix (un nombre décimal)
// quantite (un nombre entier)

function produit(nom,prix,quantité){
    this.nom = nom,
    this.prix = prix,
    this.quantité = quantité
}
console.log(produit(nom,prix,quantité));
