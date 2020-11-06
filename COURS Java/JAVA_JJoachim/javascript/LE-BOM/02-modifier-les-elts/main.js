//Recuperer le contenu de la balise h1
// let premierH1 = document.querySelector("h1");
// console.log(premierH1.innerText);
// console.log(premierH1.textContent);
// console.log(premierH1.innerHTML);

//Modifier le text de la balise h1
//premierH1.innerHTML = "<div style='color: red'>Text modifié par JS</div>";
// let lienA = document.querySelector("a");
// lienA.textContent = "wikipedia.org";
// lienA.href = "https://fr.wikipedia.org";
//
// premierH1.style.color="teal";
// premierH1.style.fontSize="5rem";

let navItemLink = document.getElementsByClassName("nav-link");
console.log(navItemLink);
navItemLink[4].innerHTML = "Lien 4";
navItemLink[5].innerHTML = "Lien 5";
navItemLink[6].innerHTML = "Lien 6";
