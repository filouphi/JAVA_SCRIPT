//Definition de la function
// function isMultiple(n, m) {
//     return n % m === 0
// }

// let resultat = isMultiple(15, 3);
// console.log(resultat);

// function isEven(i) {
//     return isMultiple(i, 2);
// }
//
// let resultat = isEven(8);
// console.log(resultat);

// function isMultiple(n, m) {
//     return n % m === 0;
// }
//
// let estMultiple = function (n, m) {
//     return n % m === 0;
// }
//
// estMultiple(8, 3);
//
// let isMultiple = (n, m) => {
//     return n % m === 0;
// }
//
// function addition(a = 5, b = 0) {
//     return a + b;
// }
//
// let resultat = addition(3, 6);
// // console.log("resultat = " + resultat);
//
// resultat = addition(3);
// resultat = addition(3, 6, 10);
// resultat = addition();
//
// function additionner(...unArgument) {
//     let resultat = 0;
//     for (const arg of unArgument) {
//         resultat += arg;
//     }
//     return resultat;
// }
//
// resultat = additionner(3, 5, 9)
// console.log(`resultat = ${resultat}`);
//
// let multiplication = (a, b) => a * b;


// (function multiplication(a, b) {
//     console.log(a * b);
// })(6, 9);

//Fonction auto executée
// (() => {
//     prompt("Entrez votre prenom")
// })();

// function portee() {
//      for (let i = 0; i < 5; i++) {
//         console.log(`portée boucle = ${i}`);
//     }
//     console.log(`portée function = ${i}`);
// }
// portee();

// let tableau1 = ['a','z','e'];
// console.log(typeof tableau);
//
// let tableau2 = ['a','z','e'];
//
// console.log(tableau1 == tableau2);
// console.log(tableau1 === tableau2);
//
// let prenom1 =  new String("Kim");
// console.log(typeof prenom1);

class Compte {

    //Constructeur
    constructor(n) {
        this.numero = n;
        this.solde = 50;
    }

    //Methode
    crediter(montant) {
        this.solde += montant;
    }
}

// let compte1 = new Compte();
//
// compte1.solde = 300;
// compte1.numero = "OO1";
//
// console.log(typeof compte1)
// // console.log(compte1)
//
// let compte2 = new Compte();
// compte2.solde = 300;
// compte2.numero = "OO1";
//
// // console.log(compte1 == compte2);
//
// let compte3 = compte2;
// // console.log(compte3 === compte2);
//
// console.log(compte3)
//
// compte3.numero = 16;
// compte3.solde = 15000;
//
// console.log(compte2);
//
// let a = 5;
// let b = a;
// console.log(b);
//
// b = 45;
//
// console.log(a)

let compteA = new Compte("001");
console.log(compteA)

compteA.crediter(5000);
console.log(compteA);

//JSON = JavaScript Object Notation

let personne = new Object();
personne.prenom = "Joachim";
personne.age = 52;

console.log(personne);



