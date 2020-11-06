 /* ternaire

 (age>=18)?console.log (` A ${age} ans , vous etes majeur.`): console.log (` A ${age} ans , vous etes  encore mineur.`)
var age = 46;

 */



 /* Boucle While  

 var a =1

 while (a<10) {

   console.log( ` la valeure de la variable a est ${a}.`);
   a++;
 }
 console.log('fini'); */


 /*  variante do while on verifie apres execution
 
  var a =18
  do {
 
     console.log( ` la valeure de la variable a est ${a}.`);
     a++;
  }while (a<10)
  console.log('fini'); */





 /* boucle for
 for (var i =1; i<10 ;i++) {
     if(i==5){
         break;
     }
     console.log( ` la valeure de la variable i est ${i}.`) 
 }
 console.log("boucle ok");

 */



 /*  boucle for each  

 var colors =["rouge", "vert", "bleu" ];
 var person = {
    firstname:"Damien",
    lastname:"polo",     
    age:45,
    sexe:"M"
 };

for ( color in colors) {
    console.log(` ma couleur preferee est le ${colors[color]}`);
 }
 for(prop in person) {
    console.log(`la valeur de la cle ${prop} est ${person[prop]}`)
 }  */


 /* le switch */
/*  var jour = prompt(" quel jour on est ?");

 switch(jour){
     case"vendredi":
     console.log("yes ! c'est le week end");
    break;
 
    case"samedi":
    case "dimanche":
    console.log("C'est le week end")
    break;
    default:
        console.log("000h la fin du week end")
break;
default:
    console.log('c est quant le week end')

} */

/* var str="";
for (var i =0; i<9 ;i++) {
    if(i==5) { continue;}
str += i ;

}
console.log(str); */
            
    
/* var n=5 ;
while (n<6) {
    n++;
}
console.log(`la valeur est ${n}`) */

/* var iter =0;
do{
    console.log( `la boucle affiche ${iter}`);
    iter++ ;
  
}while (iter<15)
console.log("terminé")
 */


 /* 6 valeurs falsyvalue 
 NaN ; Null ; 0 ; vide ("") ; undefined ;false 

var n = ;
var bool = Boolean(n);
console.log(bool);
 */





// les fonctions

<<<<<<< HEAD
// var a = 2, b = 3, result;

// var addNumbers = function (num1 =3, num2 = 5){
//     result = num1 * num2;
//     console.log(result); 
=======
/* var a = 2, b = 3, result; */

/* var table = function (num1 , num2 = 5){
    result = num1 * num2;
    console.log(result); 
>>>>>>> 372bcc44977226faf7628480a7c74e73d3d127d5

// }
// addNumbers(1);
// addNumbers(2);
// addNumbers(3);
// addNumbers(4);
// addNumbers(5);
// addNumbers(6);
// addNumbers(7);
// addNumbers(8);
// addNumbers(9);
// addNumbers(10);




function marges (a ,b ) ;
if ( (a>=40 && a<=60 && b >=40 && b<=60 ) || 
     (a>=70 && a<=100 && b >=70 && b<100 )) {
         return true;
}
else{
    return false;
}
<<<<<<< HEAD
console.log(marges(45,60));
=======
table(1);
table(2);
table(3);
table(4);
table(5);
table(6);
table(7);
table(8);
table(9);
table(10); */



/* function add (num1, num2 ){
    var n = num1 + num2;
    return n ;  rappel resultat de n 
}
    p= add (2,5);
    var division =14/p ;
 
  console.log(division);  */

/*   function add(num1 , num2 ){
      if(true){
      var n= num1+num2;}
      console.log(n)
  }
  add(4,5); */

    /*  les constantes appliquent une variable non modifiable
  const name ="ABOUDOU"; 
  name==
  console.log(name);  */

/*   var nameG="glo";
  let nameL="glo";
  if (true ){
    var nameG="loc";
    let nameL="loc";
}
console.log(nameG);
console.log(nameL); */

/* Les Tableaux */
/* 
let tab= ["banane", "pomme","3" , "abricot" ,"5"];
tab.push("orange");
tab.sort()
console.log(tab[1] ,tab[2]);
for (let i =0; i<tab.length ;i++) {
    console.log( ` la valeure est ${tab[i]}`) 
    console.log("boucle ok");
}
 */

/*  objets */

var personne = {
    firstname : "philippe",
    lastname : "da costa",
    age : "40 ans"

};
console.log(personne);
    
  




    

    




>>>>>>> 372bcc44977226faf7628480a7c74e73d3d127d5



