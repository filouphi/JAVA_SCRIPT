//************************************les tableaux permettent de stocker plusieurs elements dans une variable.


//pour creer un tableau .

// avant on faisait :
// let monTableau= new Array('element un' ,'element deux ', 'element trois');

//ensuite on a fait:
// let monTableau = Array('element un' ,'element deux ', 'element trois');

//  aujourd'hui:
//lenght = nombre d'elements dans tableau  / pour le dernier element .length -1

//let monTableau= ['element un' ,'element deux ', 'element trois'] ;
//console.log(monTableau[monTableau.length-2]);

// ************************************tableau a plusieurs dimensions :

 //let mnonTableau2D =[
    [ 'Mark','Jeff','Bill' ],
    [ 'Zuckerberg','Bezos' , 'Gates']  //dernier element donc pas de virgules.
 //;
//console.log(mnonTableau2D[1][2]);
// //*************************************tableaux associatifs 

// let monTableauAsssociatif = {
//     'prenom': 'mark',
//     'nom'   : 'zuckerberg',
//     'poste' : 'PDG de Facebook'
//  };

// console.log(monTableauAsssociatif[ 'nom' ]);
// // //Accedez aux elements du tableau 


//code trier :
//ajouter des elements.

// let monTableau =[ 'un' , 'deux' , 'trois' , 'quatre' ];
// monTableau.push('cinq');      //Ajoute un element .
// monTableau.unshift('zero');   //Ajoute un element au debut. .
//indexof permet de reperer l 'index ex : pour l element deux alors cela retourne 1.
// //console.log(monTableau);

// let monTableau2D = [
//     [ 'Mark' , 'jeff' , 'Bill'  ],
//     [ 'Zuckerberg' , 'bezos' , 'Gates' ]

// ];
// monTableau2D[1].push('test');
// //console.log(monTableau2D[1]);


// let monTableauAsssociatif = {
//     'prenom' : 'Mark' ,
//     'nom'    : 'Zuckerberg' ,
//     'poste'  : 'PDG de facebook'
// };
// monTableauAsssociatif['nationalité'] = 'americaine';
// console.log(monTableauAsssociatif);


// // pop pour supprimer dernier element  et shift pour supprimer le premier .delete pour tableau associatif /delete(monTableauassociatif.poste)
 

