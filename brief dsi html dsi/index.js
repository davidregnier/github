// menu burger en js ////////////////////////////////////

// const burgerMenu = document.querySelector('.burger-menu');
// const menuBurger = document.querySelector('.menu-burger');

// burgerMenu.addEventListener('click', () => {
//   menuBurger.classList.toggle('show');
//   burgerMenu.classList.toggle('active');
// });

//  // Sélection des éléments HTML
//  const carousel = document.querySelector('.diagrame');
//  const images = carousel.querySelectorAll('.diagrame1 img');
//  const prevButton = document.createElement('button');
//  const nextButton = document.createElement('button');

//  // Configuration des boutons "précédent" et "suivant"
//  prevButton.textContent = 'Précédent';
//  nextButton.textContent = 'Suivant';

//  // Ajout des boutons au HTML
//  carousel.appendChild(prevButton);
//  carousel.appendChild(nextButton);

//  // Variables pour le suivi de l'image actuelle
//  let currentImage = 0;
//  const maxImages = images.length - 1;

//  // Fonction pour masquer toutes les images sauf celle actuelle
//  function hideAllImages() {
//      for (let i = 0; i <= maxImages; i++) {
//          images[i].style.display = 'none';
//      }
//  }

//  // Affichage initial de la première image
//  hideAllImages();
//  images[currentImage].style.display = 'block';

//  // Fonction pour passer à l'image suivante
//  function nextImage() {
//      hideAllImages();
//      currentImage++;
//      if (currentImage > maxImages) {
//          currentImage = 0;
//      }
//      images[currentImage].style.display = 'block';
//  }

//  // Fonction pour passer à l'image précédente
//  function prevImage() {
//      hideAllImages();
//      currentImage--;
//      if (currentImage < 0) {
//          currentImage = maxImages;
//      }
//      images[currentImage].style.display = 'block';
//  }

//  // Ajout des écouteurs d'événements pour les clics sur les boutons
//  prevButton.addEventListener('click', prevImage);
//  nextButton.addEventListener('click', nextImage);
 // Sélection des éléments HTML
 const carousel = document.querySelector('.diagrame');
 const images = carousel.querySelectorAll('.diagrame1 img');
 const prevButton = document.createElement('button1');
 const nextButton = document.createElement('button2');

 // Configuration des boutons "précédent" et "suivant"
 prevButton.textContent = '<';
 nextButton.textContent = '>';

 // Ajout des boutons au HTML
 carousel.appendChild(prevButton);
 carousel.appendChild(nextButton);

 // Variables pour le suivi de l'image actuelle
 let currentImage = 0;
 const maxImages = images.length - 1;

 // Fonction pour masquer toutes les images sauf celle actuelle
 function hideAllImages() {
     for (let i = 0; i <= maxImages; i++) {
         images[i].style.display = 'none';
     }
 }

 // Affichage initial de la première image
 hideAllImages();
 images[currentImage].style.display = 'block';

 // Fonction pour passer à l'image suivante
 function nextImage() {
     hideAllImages();
     currentImage++;
     if (currentImage > maxImages) {
         currentImage = 0;
     }
     images[currentImage].style.display = 'block';
 }

 // Fonction pour passer à l'image précédente
 function prevImage() {
     hideAllImages();
     currentImage--;
     if (currentImage < 0) {
        currentImage = maxImages;
    }
    images[currentImage].style.display = 'block';
}

// Ajout des écouteurs d'événements pour les boutons
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

// Fonction pour passer automatiquement à l'image suivante toutes les 5 secondes
function autoNextImage() {
    setInterval(nextImage, 500);
}

// Appel de la fonction pour passer automatiquement à l'image suivante
autoNextImage();
