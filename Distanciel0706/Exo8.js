//Exercice 8 : Création d'un objet cercle

// Créez un objet cercle avec les propriétés suivantes :
// rayon (un nombre décimal)
// Ajoutez des méthodes pour calculer :
// La circonférence du cercle (2 * π * rayon)
// La surface du cercle (π * rayon^2)

let cercle = {
    rayon: 10,
    ciconference: function(){
        retrurn((2*rayon)*Math.PI)
    },
    surface: function(){
        return((rayon*rayon)*Math.PI)
    }
}

