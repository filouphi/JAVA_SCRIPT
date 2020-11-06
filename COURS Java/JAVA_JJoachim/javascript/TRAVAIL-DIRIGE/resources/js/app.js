                            //***********************************//
                            //************ FONCTIONS ************//
                            //***********************************//

//PARTIE 5
// création d'une Fonction qui permet de passer au joueur suivant car le code se repete et c est pas terrible.

function joueurSuivant()    { 
                                joueurActif === 1 ? joueurActif = 2 : joueurActif = 1;   //permet de commutez d'un joueur a l'autre et met a jour les scores globaux.
                                scoreEnCours = 0; 
                                document.getElementById(`encours-${joueurActif}`).textContent = '0'; 
                                document.querySelector('.joueur-1-panel').classList.toggle('active'); 
                                document.querySelector('.joueur-2-panel').classList.toggle('active'); 
                                document.querySelector('.de').style.display = 'none'; 
                            }

//PARTIE  7 
// Création du fonction qui permet l'initialisation de la PARTIE 2.


function initiliseLeJeu()   {  
                                scoresGlobals = [0, 0]; 
                                scoreEnCours = 0; 
                                joueurActif = 1; 
                                document.querySelector('.de').style.display = 'none'; 
                                document.getElementById('score-1').textContent = '0'; 
                                document.getElementById('score-2').textContent = '0'; 
                                document.getElementById('encours-1').textContent = '0'; 
                                document.getElementById('encours-2').textContent = '0';
                                document.getElementById('nom-1').textContent = 'Joueur 1'; 
                                document.getElementById('nom-2').textContent = 'Joueur 2'; 
                                document.querySelector('.joueur-1-panel').classList.remove('vainqueur'); 
                                document.querySelector('.joueur-2-panel').classList.remove('vainqueur'); 
                                document.querySelector('.joueur-2-panel').classList.remove('active'); 
                                document.querySelector('.joueur-1-panel').classList.add('active'); 
                            }                            


                            //***********************************//
                            //************** SCRIPT *************//
                            //***********************************//


// partie 1.
// Ici on cree  des variables ce qui simplifie le code.

 let scoresGlobals  = [0, 0];    // Scores globeaux des deux joueurs.
 let scoreEnCours   = 0;         // score d'une serie de lancée pour le joueur actuel.
 let joueurActif    = 1;         // Joueur actif 1 ou 2. 
 let jouer = true ;


//Partie 2.
//Initialisation de l'interface du jeu (GUI) à zéro . scores a zéro.

// document.getElementById(`score-1`).textContent    = '0';     // Score joueur un a 0.
// document.getElementById(`score-2`).textContent    = '0';     // score joueur deux a 0.
// document.getElementById(`encours-1`).textContent  = '0';     // En cours joueur un a 0.
// document.getElementById(`encours-2`).textContent  = '0';     // En cours joueur deux a 0.
// document.querySelector(`.de`).style.display       = 'none';  // Non affichage du Dé.

initiliseLeJeu()       //J'ai commenté l'ancien code afin de mettre ma fonction cée plus haut .




//Partie 3.
//gestion de l'evenement click sur le bouton "LANCEZ LE DE".


let btnLancezLeDe = document.querySelector(`.btn-lancer`);         // Bouton ciblé grace a sa classe.

btnLancezLeDe.addEventListener('click', () => {                 // Une fonction anonyme fléchée rattache l'evenement Click.

if (jouer) {
    
    let de = Math.floor(Math.random() * 6) + 1;                   // Ici on simule le lancé du dé et on stock le résultat dans la variable dé.

    let domDe = document.querySelector('.de');                    // Mise a jour de l'image du dé suivant le lancé.dans le Gui.
    domDe.style.display = 'block';
    domDe.src = `resources/images/de-${de}.png`;

    if (de !== 1) {                                              //si le jour actif fais 1 on ne met pas a jour le score 

        scoreEnCours += de;                                      //La valeur du dé est differente de 1  on met a jour le score  et on continue.
        document.getElementById(`encours-${joueurActif}`).textContent = scoreEnCours;

    } else {                                                     // ici le 1 est sorti . On passe la main au joueur suivant.

    //     joueurActif === 1 ? joueurActif = 2 : joueurActif = 1;  //Valeur ternaire  pour changer de  joueurs .

    //     scoreEnCours = 0;                                       //Score en cours du joueur actuel passe a 0.


                                        
    // document.getElementById(`encours-${joueurActif}`).textContent = "0"; //mise  jouur du score en cours a 0.

    // document.querySelector('.joueur-1-panel').classList.toggle('active'); //mise a jour du voyant jouure actif 1 dans GUI.
    // document.querySelector('.joueur-2-panel').classList.toggle('active'); //mise a jour du voyant jouure actif 2 dans GUI.

    // document.querySelector('.de').style.display = 'none';                 //mise a jour de l affichage du dé en le masquant.

    joueurSuivant();                //J'ai commenter l'ancien code et fais appel a ma fonction  cree partie 5.
     }

}
});

        

//PARTIE 4
//gestion de l'evenement click sur le bouton "COMMUTEZ". 

let btnCommutez = document.querySelector('.btn-commuter');    //Bouton ciblé grace a sa classe.
btnCommutez.addEventListener('click', () => {                 // Une fonction anonyme fléchée rattache l'evenement Click.

if(jouer) {

    scoresGlobals[joueurActif - 1] += scoreEnCours;           //Tableau score globale mis a jour lors de commutation. Index a zero.

    document.getElementById(`score-${joueurActif}`).textContent=scoresGlobals[joueurActif-1]; //mise a jour score global.

    // joueurActif === 1 ? joueurActif = 2 : joueurActif = 1;  //passe la main au joueur suivant .
    
    if (scoresGlobals[joueurActif - 1] >= 100) { 
        document.getElementById(`nom-${joueurActif}`).textContent = 'Bravo !!!'; 
        document.querySelector('.de').style.display = 'none'; 
        document.querySelector(`.joueur-${joueurActif}-panel`).classList.add('vainqueur'); 
        document.querySelector(`.joueur-${joueurActif}-panel`).classList.remove('active');

    // scoreEnCours = 0; 
    // document.getElementById(`encours-${joueurActif}`).textContent = '0'; 
    // document.querySelector('.joueur-1-panel').classList.toggle('active'); 
    // document.querySelector('.joueur-2-panel').classList.toggle('active'); 
    // document.querySelector('.de').style.display = 'none';
}else { 
    joueurSuivant(); 
}
 }
                   //J'ai commenter l'ancien code et fais appel a ma fonction  cree partie 5.
});

//PARTIE  debut de page (fonction joeur suivant. )

//PARTIE 6.
//gestion de l'evenement click sur le bouton "NOUVEAU JEU".

let btnNouveauJeu = document.querySelector('.btn-nouveau');     //Bouton ciblé grace a sa classe.

 btnNouveauJeu.addEventListener('click',()=>{                   // Une fonction anonyme fléchée rattache l'evenement Click.

//  scoresGlobals = [0, 0];                                       //reinitialisation de tous le GUI .Le jeu redemarre a zéro.
//  scoreEnCours = 0; 
//  joueurActif = 1;

//  document.querySelector('.de').style.display = 'none'; 
//  document.getElementById('score-1').textContent = '0'; 
//  document.getElementById('score-2').textContent = '0'; 
//  document.getElementById('encours-1').textContent = '0'; 
//  document.getElementById('encours-2').textContent = '0'; 

initiliseLeJeu()    //J'ai commenté l'ancien code afin de mettre ma fonction cée plus haut .
});

//PARTIE 7 Debut de page (fonction D'initialisation du jeu. )
