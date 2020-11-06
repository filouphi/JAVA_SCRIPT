
//**********************************sans parametres**************************************************** */

// function direBonjour() {
//     alert("bonjour philippe")
// }
// direBonjour();

//*********************************avec parametres***************************************************** */

//************************addition***************** */

// function addition(nombreUn,nombreDeux) {
//     console.log(nombreUn+nombreDeux)
// }addition( 5 ,9.4);

//***********************bonjour+prenom */

// function bonjour(prenom) {
    
//     alert("salut a toi oh " + prenom);
// }
//     bonjour("philippe");

//******************test perso verif si compris */

// function essai(fruit,legume) {
//     alert("personellement chaque jour \n je mange des " + fruit  + "ainsi que des " + legume );

// }essai("pommes","haricots vert");


//*************************************************variable locale et globale********************* */

//locale variable accessible que la ou on l'a declarée .Dans le cas ci-dessous a l'interieur de la fonction.
// function crieDeGuerre(){

//         let crie="Toujours plus fort !!!!!";
//         console.log(crie);
// }
// crieDeGuerre();

//pour rendre la  portee de  la variable globale il faut declaree la variable crie a l exterieur de la fonction 

// let crie="Toujours plus bas"; //globale
// function crieDeGuerre(){

//     let crie="Toujours plus fort !!!!!";//locale
//     console.log(crie);
// }
// crieDeGuerre();
// console.log(crie);


//**************valeurs de retour  retourne quelque chose et ne l ffiche pas*/

// let nonbreUn=4, nombredeux=7;
// function add (nomreA,nombreB){
//    let resultat=nomreA+nombreB;
//    //console.log(resultat);//affiche
//    return resultat ;//arette la fonction ce qu'il y a apres ne sera pas executer
// }
// function div (nomreA,nombreB){
//    let resultat=nomreA/nombreB;
//    //console.log(resultat);//affiche
//    return resultat ;//arette la fonction ce qu'il y a apres ne sera pas executer
// }
// let resultatadd=add(nonbreUn,nombredeux);
// let resultatdiv=div(nonbreUn,nombredeux);

// console.log (resultatadd*resultatdiv) ;
// //console.log (add(nonbreUn,nombredeux) );


//*********************************pararetres par defaut */

// let nonbreUn=4, nombredeux=7;
// function add (nomreA,nombreB=10){
//    let resultat=nomreA+nombreB;
//    return resultat ;
 
// }
// console.log(add(nonbreUn,));//14

//**********************exemple concret cuisine******* */
// let preparation=10,cuisson=15;
// function cuisiner(nombreDegateaux,minutesDePreparation=10,minutesDecuisson=15){
//     let resultat=nombreDegateaux*(minutesDePreparation+minutesDecuisson);
//     return resultat;//stock resultat

// }
// let gateauxChocolate=cuisiner(4);
// let fraisier=cuisiner(1,20);

// console.log(fraisier+gateauxChocolate);


// function prevoirAge() 
//  {
//     let age=prompt("Veuillez saisir votre age s'il vous plait. ");
//     //age=parseInt(age) //paseint entier/parse float  decimal 
//     age=Number(age);
//     alert("je valide que vous avez " +(age+1 )+ " ans .");//"30"+1
// }
// prevoirAge();

//function anonyme

// let fonctionAnonyme=function () {console.log("je suis une fonction anonyme");
    
// }
// fonctionAnonyme();
// //(function() {console.log("je suis une fonction anonyme")})();



// function abracadabra  (){
//     let prenom =prompt("Quel est votre prénom ?");
//     let nom    =prompt("Quel est votre nom ?");
//     let age    =prompt("Quel est votre age ?");
//     alert("Sapristi! on ne m'avait pas prevenu que c'etait vous , "
//      +prenom 
//      +" ! \n  Euh...Je veux dire... \n monsieur le grand magicien "
//      +nom 
//      +" ! \n Cela fais déja "
//      +age
//       +" ans que vous faites rayonner notre contrée." );

// }
// abracadabra();

function imc(poid,taille){
    //calculer taille en metre
  let tailleEnMetre=taille/100;
  let tailleCalculee=Math.pow (tailleEnMetre,2);// vaut tailleEnMetre*tailleEnMetre
  let resultat=poid/tailleCalculee; //imc
  return resultat;
}
let poid=prompt("Quel est votre poid? (en kg)");
let taille=prompt("Quel est votre taille ? (en cm) ");
alert( "votre imc est de : " +imc(poid,taille));


if( imc(poid,taille)<19){alert("danger il faut manger car votre etat est inquietant!!")

}
else if(imc(poid,taille)>=19 && (imc(poid,taille) <25) ){
    alert("votre poid est normal")

}
else if (imc(poid,taille)>=25 && (imc(poid,taille) <30) ) {
    alert("vous etes en surpoid Mangez un peu plus equilibré et faites un peu de sport.");

}
 else if (imc(poid,taille)>=30 && (imc(poid,taille) <35) ) {
    alert("vous etes obese ! changer votre alimentation et pratiquez un sport!! ")

} 
else {alert("votre imc est superieur a 35 cela veux dire que vous etes en obesité morbide ce qui est tres dangereux!!consultez un nutritioniste.")}; 