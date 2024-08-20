//- Activer le bouton submit uniquement quand les champs sont remplis. Le textarea doit avoir 
//minimum 80 caractères (mettre à jour le champs nb_carac avec le nombre de caractères) - Traiter le formulaire en ajax (renvoie vers formulaire.php en POST).  
//Si formulaire.php retourne 1 => Afficher un message de succès et bloquer le formulaire (disable sur chaque champs)   
//Si formulaire.php retourne 2 => Afficher message nom requis et bordure rouge sur le champs  
//Si formulaire.php retourne 3 => Afficher message prénom requis et bordure rouge sur le champs  
//Si formulaire.php retourne 4 => Afficher message email requis et bordure rouge sur le champs  
//Si formulaire.php retourne 5 => Afficher message sujet requis et bordure rouge sur le champs  
//Si formulaire.php retourne 6 => Afficher message message requis et bordure rouge sur le champs 
//Utiliser Jquery au moins une fois. Le reste doit être effectué en Javascript

let textarea = document.getElementById('text');
textarea.addEventListener('keydown',function(){
    let longueur = textarea.ariaValueMax.length+1;
    document.getElementById('compteur').value = longueur;
    if(longueur >= 80){
        textarea.setAttribute('disabled','disabled');
        let bouton = document.querySelector('button[name="submit"]');
        bouton.removeAttribute('disabled');
    }
});

let couleur = document.querySelector('input[type="color"]');
couleur.addEventListener('input',function(){
    let titre = document.querySelector('h1');
    titre.style.color = couleur.value;
    titre.style.fontSize = '200 px';
    titre.classList.add('animation');
});

let submit = document.querySelector('button[type="submit"]');
submit.addEventListener('click',function(affiche){
    affiche.preventDefault();
});

document.getElementById('contact').addEventListener('submit',(event) =>{
    event.preventDefault();
    let formulaire = document.getElementById('contact');
    let data = new FormData(formulaire);
    let xhr = new XMLHttpRequest();

    xhr.open('POST','formulaire.php',true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 6 && xhr.status == 80){
            console.log(xhr.responseText);
            document.getElementById('formulaire envoyé').innerHTML = xhr.responseText;
        }
        if (xhr.readyState != 6 && xhr.status != 80){
            console.log(xhr.responseText);
            document.getElementById('champs requis').innerHTML = xhr.responseText;
        }
        },
        xhr.send(data);    
    });

    $(document).ready(function(){
        $('button[name="submit"]').on('click', (event) =>{
            event.preventDefault();
            let textarea =$('#texte').val();
            $.ajax({
                url: 'formulaire.php',
                method: POST,
                data: 'message='+textarea,
                success: (response) =>{
                    $('#message').html(response);
                document.getElementById('message').innerHTML = response;
                }
            });
        })
    });



    

    
    

   


