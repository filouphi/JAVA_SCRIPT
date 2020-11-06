// let variablelet = "globale";
// var variablevar = "globale";

// if (true) {
    
//     let variablelet = "locale";
//     var variablevar = "locale";

//     console.log("let : " +variablelet);
//     console.log("var: " +variablevar);
    
// }
// console.log("let : " +variablelet);
// console.log("var: " +variablevar);

//recursivité: s auto appelle eslle meme:

// function timer(secondes){//10

//     if (secondes>0){
//         console.log(secondes);
//         timer(secondes -1);//9
//                 //afficher 9
//                 //timer(8)
//                     //afficher 8
//                     //timer(7)
//     }
//     else {
//         console.log(secondes);
//     }

// }
// timer(25)

// Exercice:

// function timer(secondes) { //10
//     if(secondes>0){
//         console.log(secondes);
//         timer(secondes-1)  //9
//         //affiche 9
//         //timer 8
//         //affiche 8
//         //timer 7  etc.. jusqu'a zero.
//     }else{console.log(secondes)};
// }timer(10);

function somme(nombre) {
    if (nombre==1){
        return 1;
    }
    return nombre+somme(nombre-1);
    //
}
console.log(somme(5))   ; 