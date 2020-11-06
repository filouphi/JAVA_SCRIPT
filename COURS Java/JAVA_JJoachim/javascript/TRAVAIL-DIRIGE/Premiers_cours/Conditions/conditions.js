let heure =21;
//signe d'egalité 
//heure==11 => egal a 11
//heure != 11 => non egal a 11
//heure < 11 => inferieur a 11
//heure> 11 => superieur a 11
//heure<= 11 => inferieur ou egal a 11
//heure>= 11 => superieur ou egal a 11


//les if et if else ....

// if (heure<12) {
//     console.log( "c'est bientot le matin" );
// }
// else if (heure <18) {
//     console.log( "c'est l'apres midi" );
// } else {
//     console.log( "c'est bla soirée" );
// }


//Challenge 1 : Majorité

// let age =prompt("quel est votre age?");

// if(age <18 ) {alert("Vous n'etes pas majeur !!");
// }
// else if (age >18 && age<21) {
//     alert("felicitation vous etes majeuren France !");
// }
// else { 
//     alert("hourra maintenant vous etes majeur partout...A vous les casinos !")
// }



//conditions switch

// let consommable ="plume" ;

// switch(consommable){
//     case"carotte":
//     case "pomme de terre":
//     case "courgette":
//     case "haricot vert":
//     case "poireaux":
//     alert("ceci est un legume");
//     break;
    
//     case "banane":
//     case "pomme":
//     case "poire":
//     case "cerise":
//     case "mangue":
//     alert("ceci est un fruit");
//     break;
//     default:
//         alert("ceci n'est ni un fruit ni un legume ");

// }

//variante chllenge majorité avec switch (pas tres pratique ^^)
// let age=prompt("entrez votre age");

// switch(age) {
//     case "1 ":
//     case "2 ":
//     case "3":
//     case "4":
//     case "5":
//     case "6":
//     case "7":
//     case "8":
//     case "9":
//     case "10":
//     case "11":
//     case "12":
//     case "13 ":
//     case "14":
//     case "15":
//     case "16":12
//     case "17":
//         alert("vous etes mineur!");
//         break
//         case "18":
//         case "19":
//         case "20":
//             alert("vous etes majeur en France")
//             break
//             default:
//                 alert("Vive les casinos")
// }


//conditions plusieurs verif en meme temps.

let gareDeDepart = "" ;
let gareDArrivee = "kh" ;

if(gareDeDepart !="" || gareDArrivee !=""){
    alert("le train va demarré");
}
else{("le train ne peux pas demarré");
}


