// Exercice 3: Gestion des méthodes pour l'objet livre
// Ajoutez une méthode informations à l'objet livre qui renvoie une chaîne de caractères contenant toutes les informations du livre (titre, auteur et nombre de pages).

let livre = {
    titre : 'Notre Dame de Paris',
    auteur: 'Victor HUGO',
    pages: '500',
    informer: function(){
        return 'le livre est' + this.titre +this.auteur + this.pages;
    }
};
console.log(livre);
console.log(titre);
console.log(auteur);
console.log(pages);


