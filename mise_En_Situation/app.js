// 1 Au chargement de la page, changez la couleur de
// fond de la page index.html

function randomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
window.onload = function () {
    let body = document.getElementById("page-body");
    body.style.backgroundColor = randomColor();
}
/////////////////////////////////////////////////////////////////
//   2 Au chargement de la page, insérez un
// <li>Lorem</li> à la fin d’une liste.
let maListe = document.getElementById('maListe');
let nouvelElement = document.createElement('li');
nouvelElement.textContent = 'Lorem';
maListe.appendChild(nouvelElement);

/////////////////////////////////////////////////////////////////
// 3 Au clic sur le bouton 1, supprimez le dernier <li> dans la liste 1.

btn1.addEventListener("click", function () {

    let liste1 = document.getElementById("maListe");

    if (liste1.childElementCount > 0) {
        liste1.removeChild(liste1.lastElementChild);
    }

});

/////////////////////////////////////////////////////////////////
// 4 Au clic sur le bouton 2, repliez la liste 2.

const btn2 = document.getElementById("btn2");
const element2 = document.getElementById("liste2");

btn2.addEventListener("click", () => {

    element2.style.display = "none";
});

/////////////////////////////////////////////////////////////////
// 5 Au clic sur le bouton 3, ajoutez une classe CSS au
// bouton 1 pour qu'il récupère une marge supérieure
// supplémentaire.

const btn3 = document.getElementById("btn3");

btn3.addEventListener('click', () => {
    btn1.style.marginTop = "500px";
})
/////////////////////////////////////////////////////////////////
// 6 Au clic sur le bouton 4, changez de classe CSS
// pour qu'il change de couleur

const btn4 = document.getElementById("btn4");

btn4.addEventListener('click', () => {
    btn4.style.backgroundColor = "pink";
})
/////////////////////////////////////////////////////////////////
// 7 Au clic sur le bouton 5, chargez l'image
// “background.jpg” en image de fond sur la section
// #section-1.

const btn5 = document.getElementById("btn5");

btn5.addEventListener('click', () => {
    document.body.style.backgroundImage = "url(IMG/background.jpg)";
})

/////////////////////////////////////////////////////////////////
// 8 Au survol du bouton 6, changez la couleur de tous
// les boutons en vert.

const btn6 = document.getElementById("btn6");

const buttons = document.getElementsByTagName("button");

btn6.addEventListener("mouseover", function () {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "green";
    }
});

btn6.addEventListener("mouseleave", function () {
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "";
    };
});

/////////////////////////////////////////////////////////////////
// 9 Annulez le clic sur le bouton 7 et changez sa
// couleur lors d'un double clic.

const btn7 = document.getElementById("btn7");

let clicActif = true;

// btn7.addEventListener('click', function() {
//   if (clicActif) {

//   }
//   clicActif = true;
// });

btn7.addEventListener('dblclick', function () {
    //   clicActif = false;
    btn7.style.backgroundColor = 'red';
});

/////////////////////////////////////////////////////////////////
// 10 Au clic sur le bouton 8, faites
// disparaître/apparaître tous les <h2> de la page.
const btn8 = document.getElementById('btn8');
const h2Elements = document.querySelectorAll('h2');

btn8.addEventListener('click', () => {
    h2Elements.forEach((element) => {
        element.classList.toggle('hidden');
    });
});

/////////////////////////////////////////////////////////////////
// 1 Dans la #section-2, affichez une horloge dynamique
// au format suivant : HH:MM:SS où HH = heures, MM =
// minutes et SS = secondes, en nombre.

function afficherHorloge() {
    const maintenant = new Date();
    let heures = maintenant.getHours();
    let minutes = maintenant.getMinutes();
    let secondes = maintenant.getSeconds();

    if (heures < 10) {
        heures = "0" + heures;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (secondes < 10) {
        secondes = "0" + secondes;
    }

    const horloge = heures + ":" + minutes + ":" + secondes;
    document.getElementById("section-2").innerHTML = horloge;
}

// Mettre à jour l'horloge toutes les secondes
setInterval(afficherHorloge, 1000);

/////////////////////////////////////////////////////////////////
// 2 A l'aide du formulaire #formulaire-title, utilisez
// javascript pour remplacer le contenu du <h1> de la
// page par le contenu du champ texte du formulaire.

function updateTitle() {
    var newTitle = document.getElementById("titre").value;
    document.getElementById("on-change").innerHTML = newTitle;
}
////////////////////////////////////////////////////////
const button = document.getElementById("wow");
const div = document.getElementById("btn9");

button.addEventListener("click", function() {
  const rect = button.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  div.style.transform = `translate(-50%, -50%) scale(40)`;
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
  div.style.backgroundColor = 'yellowgreen' ;
  

  setTimeout(function() {
    div.style.transform = `translate(-50%, -50%) scale(1)`;
  }, 500);
 
});


