//crer les fonctions d'operations:

//fonction addition:

function addition (nombreA,nombreB) {
    return nombreA + nombreB;
}

//fonction multiplier:

function multiplication (nombreA,nombreB) {
    return nombreA * nombreB;
}

//fonction soustraire:

function soustraction (nombreA,nombreB) {
    return nombreA - nombreB;
}

//fonction diviser:

function division (nombreA,nombreB) {
    if(nombreB==0){
        throw new Error("Impossible de diviser par 0 .");
    }
    return nombreA / nombreB;
}

//1ere boucle choix calcul:

function calc() {
    

do{
    var choix =Number(prompt ("que souhaitez vous faire ? \n\n 1 -Additions \n 2 -Multiplications \n 3 -Soustractions \n 4 -Divisions \n"));
}while( choix != 1 && choix != 2 && choix != 3 && choix != 4) 

//2eme boucle choix des nombres :

do {
    var premierNombre= Number(prompt("entrez un premier nombre : "));
    var deuxiemeNombre=Number(prompt("entrez un deuxieme nombre : "));
} while  (isNaN(premierNombre) || isNaN(deuxiemeNombre));//isNaN = n est pas un nombre.


//switch appeler la fonction choisie :

try {

    switch(choix) {
        case 1:
            var resultat = addition (premierNombre , deuxiemeNombre);
            break;
    
        case 2:
            var resultat = multiplication (premierNombre , deuxiemeNombre);
            break;
    
        case 3:
            var resultat = soustraction (premierNombre , deuxiemeNombre);
            break;
    
        case 4:
            var resultat = division(premierNombre , deuxiemeNombre);
            break;
    
            //Exception erreur 
    
            default:
                throw new Error("Une erreur est survenue!")
    
            }
            //Afficher le resultat :
            alert("voici le résultat : " + resultat );
        }
        catch(error){
            alert(error);
        }
        
    }
    let oui=prompt("Souhaitez vous un second calcul? ");
    if (oui=="oui" ){calc()}

    
    
            




