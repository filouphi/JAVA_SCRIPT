

var firstname;
firstname=25;
console.log(typeof (firstname));




/* operateurs */
/* exemples  */
/* var num1=2 , num2=5 , result ;
result = num1 + num2;
console.log (result); */
/* result = num2 - num1 * num2 ; */
/* num1 =num1 +10  est egale a  num1 += 10  */
/* num1 =num1 -1  est egale a  num1 -= 1  */
/* num1 =num1 *2 est egale a  num1 *= 2  */
/* num1 =num1 /3  est egale a  num1 /= 3 */

/* var a=2;
a++
console.log(a++)
console.log(a) */
/* var age = 65;
var name= ' "Big Joe"'
console.log( `mon papa est ${name} 
et il a ${age} ans`); */
/* var val =parseInt(prompt("entrer un nombre:"));

console.log (val);
console.log( typeof (val)); */

/* les conditions */


var age=parseInt(prompt('entrez votre age')) ;
/* if(age<18){
    console.log( ` tu as  ${age} ans 
    tu es mineurs ` );
}
else if(age==18){
    console.log(  ` tu as  ${age} ans 
    tu es un vrai homme man`);
}
else {
    console.log(` tu as  ${age} ans 
    tu es adulte` );
} */

(age<18)? console.log(` tu as  ${age} ans tu es mineur` ): console.log(` tu as  ${age} ans 
tu es adulte` )