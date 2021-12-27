"use strict"
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');


error.style.display = "none";


let nombreAleatoire = Math.floor(Math.random() * 101);
let coups = 0;
let nombreChoisi;


function verifier(nombreChoisi) {
    let instruction = document.createElement('div');

    if(nombreChoisi < nombreAleatoire){
        instruction.textContent = "." + coups + ": (" + nombreChoisi + ") C'est plus!";
        instruction.className = "instruction plus";
    }
    else if (nombreChoisi > nombreAleatoire){
         instruction.textContent = "." + coups + ": (" + nombreChoisi + ") C'est moins!";
        instruction.className = "instruction moins";
}  
    else{
          instruction.textContent = "." + coups + ": (" + nombreChoisi + ") Félicitation vous avez trouvé le juste prix";
        instruction.className = "instruction fini";
        input.disabled = true;
    }
    document.querySelector("#instructions").append(instruction);
}

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("ici")
    if (isNaN(input.value) || input.value == ""){
        input.style.color = "red";
    } else {
        coups++;
        input.style.color = "silver";
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
});

input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        error.style.display = 'inline';

    } else {
        error.style.display = "none";
    }
});


