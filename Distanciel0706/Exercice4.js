// Exercice 4 : Création d'une fonction constructeur pour un étudiant
// Créez une fonction constructeur Etudiant pour représenter des étudiants. Chaque étudiant devrait avoir les propriétés suivantes :
// nom (une chaîne de caractères)
// age (un nombre entier)
// niveau (une chaîne de caractères représentant le niveau d'étude)

// Exercice 5:Ajout de méthodes pour gérer les informations des étudiants
// Ajoutez une méthode presentation() au prototype de Etudiant 
// qui affiche une introduction de l'étudiant (par exemple, "Je suis [nom] et j'étudie en [niveau]").

//Exercice 6: Création de plusieurs instances d'étudiants
// Créez quelques instances d'étudiants à l'aide de la fonction constructeur Etudiant que vous avez définie précédemment. 
// Appelez ensuite la méthode presentation() pour chaque instance créée afin d'afficher leur introduction.


function Etudiant(nom,age,niveau) {
    this.nom = nom;
    this.age = age;
    this.niveau = niveau;
    this.niveau = function(){
        return 'Cet etudiant est' + this.nom + 'a' + this.age + 'en' + this.niveau;
    };
    
};
let Etudiant1 = new Etudiant('Estelle',20,Licence);
let Etudiant2 = new Etudiant('Jamy',22,Master);

Produit.prototype.presentation = function() {
    return 'Cet Etudiant est:' + this.nom + 'a' + this.age + 'en' +this.niveau;
};
console.log(Etudiant1.presentation1());
console.log(Etudiant2.presentation2());