// Exercice 7 : Création d'une fonction constructeur pour une voiture
// Créez une fonction constructeur Voiture pour représenter des voitures. Chaque voiture devrait avoir les propriétés suivantes :
// marque (une chaîne de caractères)
// annee (un nombre entier)
// couleur (une chaîne de caractères)

//Exercice 8 : Ajout de méthodes pour les voitures
// Ajoutez une méthode afficherDetails() au prototype de Voiture qui affiche les détails de la voiture (marque, année et couleur).
 
function Voiture(marque,année,couleur) {
    this.marque = marque;
    this.année = année;
    this.couleur = couleur
    
    
    return 'Cette voiture est une' + this.marque + 'produite en' + this.année + 'de couleur' + this.couleur;
};
let Voiture1 = new Voiture('Renault Clio',2020,blanche);
let Voituret2 = new Voiture('Citroen C5',2022,Master);

Produit.prototype.afficherDetails = function() {
    return 'Cette voiture est une' + this.marque + 'produite en' + this.année + 'de couleur' +this.couleur;
};
console.log(Voiture1.afficherDetails1());
console.log(Voiture2.afficherDetails2());