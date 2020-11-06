// Les Fonctions automatisent les instructions. et permets les modifications a un seul endroit

// Sans parametres

// function direBonjour () {
//     alert("bonjour toi !")
// }
// direBonjour()

// avec parametres :params =variables modifiables.

// function addition(nombreUn ,nombreDeux) {
//     console.log(nombreUn+nombreDeux)
// }
// addition(5, 9.4);


// challenge

// function bonjour(prenom) {

//     alert("bonjour " + prenom);
// }
// bonjour("filipe");

// Portées des Variables.

// function criDeGuerre(params) {
//     let crie ="toujours plus fort !!!";
//     console.log(crie)
// }
// criDeGuerre();
// console.log(crie); //si on appel la variable a l exterieur de la fonction celle-ci n'est pas reconnue car cell-ci est locale( let).



// let crie; // variable globale definie a la racine du projet deconseillée
// function criDeGuerre(params) {
//     crie ="toujours plus fort !!!";
//     console.log(crie)
// }
// criDeGuerre();
// console.log(crie); 


// let crie = "toujours plus bas"; //globale

// function criDeGuerre() {

//     let crie ="toujours plus fort !!!"; //locale
//     console.log(crie)
// }
// criDeGuerre()
// console.log(crie);

//Valeurs de retour ou fonctions qui retournent quelque chose.

// let nombreUn = 4, nombreDeux = 7;

// function addition(nombreA ,nombreB) {
//     let result = nombreA + nombreB ;
//     // console.log(result); //  console.log ou alert affiche le  resultat 
//    // return arette la fonction automatiquement tous ce qu il y a derriere ne sera pas executer
//    return result//11
// }
// console.log(addition(nombreUn , nombreDeux)) 

// function division(nombreA ,nombreB) {
//     let result = nombreA / nombreB;
//     return result;

// }
// let resultatAddition =addition(nombreUn ,nombreDeux);
// let resultatDivision =division(nombreUn ,nombreDeux); 
// console.log(resultatAddition*resultatDivision);


//parametres par defaut 


// let nombreUn = 4 , nombreDeux = 7 ;

// function addition(nombreA , nombreB =10 ) {
//     let result =nombreA +nombreB ;
//     return result ;
// }
// console.log(addition(nombreUn ));

// let preparation=10 ,cuisson=15;
// function cuisiner(nommbreDeGateaux , minutesDePreparation =10 , minutesDeCuisson = 15) {
//     let resultat = nommbreDeGateaux * (minutesDePreparation +minutesDeCuisson)
//     return resultat
    
// }
// let tempsDePreparationChocolat = cuisiner(4);
// let tempsDePreparationFraisier = cuisiner(1,20);

// console.log(tempsDePreparationFraisier)
// console.log(tempsDePreparationFraisier+tempsDePreparationChocolat)



//modifiez types de données!!

//challenge demander age

// function demanderAge() {
//     let age =prompt("quel est votre age ?");
//    alert("vous avez " + age + "ans" )
// }
// demanderAge()




// function prevoirAge() {
//     let age =prompt("quel est votre age ?");//js en string "30" +1 =301
//     //age = parseInt(age) ; //passe la valeur en entier ex 3.14 => 3 ou "30" => 30  ceci est la methode 1 
//    // age = parseFloat(age); // conserve les valeurs apres la virgule ex : 3.14 + 5 => 8.14    ceci est la methode 2
//     //age = Number(age);  // la conversion est totale ceci est la methode 3 recommandée.
//    alert(" bientot vous aurez " + (age+1) + "ans" );
// }
// prevoirAge()


//autres types que l ont peux modifier : 
//nombre = 45 ;
//nombre en string (chaine de caracteres)= nombre + ""  ici 45 + ""  => "45"  c'est la methode barbare ;
// mieux vaut cette methode :
//nombre.toString()

//fonctions anonymes (fa)...
//appeler la fonction  avec variable
// let fonctionAnonyme =function () {
//     console.log("je suis une fonction anonyme");
// }
// fonctionAnonyme();


//auto execution (sur une seule ligne dans une parenthese . )

//( function () {console.log("je suis une fonction anonyme") } ) ();

//mise en pratique des acquis!! 
//j' ai reussi seul ...

// function abracadabra (){

//    let prenom = prompt("quel est votre prenom ?")
//    let nom    = prompt("quel est votre nom  ?")
//    let age    = prompt("quel age avez vous ?")

//    alert ( "sapristi ! on ne m'avais pas prévenu que c'etait vous " 
//    + prenom 
//    + " ! euh... Je veux dire...monsieur le grand magicien " 
//    + nom + " ! Cela fait déja " 
//    + age
//    + " ans que vous faites rayonner notre contrée !.." )
   
    
// }
// abracadabra()



function IMC(poid , taille ) {

    //calculer la taille en metres
    let tailleEnMetres  =taille/100;
    let tailleCalculee  = Math.pow(tailleEnMetres,2);
    let resultat        = poid / tailleCalculee;
    return resultat;
    
    
}

let poid   =prompt("Quel est votre poid ? (en Kg)");
let taille =prompt("Quel est  votre taille ? (en Cm)");

alert(IMC(poid,taille));

if (IMC>18.5) {alert("biennnnn")};


