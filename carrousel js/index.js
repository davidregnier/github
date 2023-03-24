// document.body.onload=function(){
//     let nbr=5;
//     let p=0;
//     container=document.getElementById("container");
//     r=document.getElementById("r");
//     l=document.getElementById("l");
//     container.style.width=(800*nbr)+"px";
//     for (i = 1; i <=nbr ; i++) {
//         div=document.createElement("div");
//         div.className="photo";
//         div.style.backgroundImage="url('IMG/im"+i+".jpg')";
//         container.appendChild(div);
//     }
//     l.onclick=function () {
//         if (p>-nbr+1)
//         p--;
//         container.style.transform="translate("+p*800+"px)";
//         container.style.transition="all 0.5s ease";
//     }
//     r.onclick=function () {
//         if(p<0)
//         p++;
//         container.style.transform="translate("+p*800+"px)";
//         container.style.transition="all 0.5s ease";
//     }
// }

  function Mario (titre, console, sortie, description){
    this.titre = titre;
    this.console = console;
    this.sortie = sortie;
    this.description = description;
  }
    let mario1 = new Mario("mario Bros", "game And Watch", 1983, "est un jeu d'arcade développé et édité par Nintendo en 1983. Il a été conçu par Shigeru Miyamoto comme la suite de Donkey Kong, avec lequel il constitue un des premiers jeux de plates-formes jamais créés." );
    let mario2 = new Mario("super mario bros", "Nes", 1985, "Super Mario Bros. est un jeu vidéo de plates-formes à défilement horizontal développé par Nintendo R&D4 et édité par Nintendo. Il est sorti sur Famicom au Japon en 1985 puis sur Nintendo Entertainment System en Amérique du Nord la même année et en 1987 en Europe. Il s'agit du premier jeu de la série Super Mario.");
    let mario3 = new Mario("super mario bros special", "pc-88", 1986, "est un jeu vidéo de plates-formes à défilement horizontal développé par Nintendo R&D4 et édité par Nintendo.");
    let mario4 = new Mario("super mario bros 2 th lost level", "famicom", 1986, "Super Mario Bros.: The Lost Levels, nommé Super Mario Bros, au Japon, est un jeu vidéo de plates-formes édité par Nintendo et développé par Nintendo R&D4 f");
    let mario5 = new Mario("super mario bros 2", "gba famicom", 2001, "Super Mario Advance est un portage de Super Mario Bros. 2 dans sa version de Super Mario All-Stars sorti en 2001 sur Game Boy Advance");
    let mario6 = new Mario("super mario bros 3", "gba", 2003, "Mario and Luigi: Superstar Saga est un jeu vidéo de rôle");
    let mario7 = new Mario("kaettekita mario bros", "famicom", 1988, "est un jeux video");
    let mario8 = new Mario("super mario bros and friends", "ms-dos", 1992, "est un autre jeux video");
    let mario9 = new Mario("new super mario bros wii coin word", "arcade", 20110,"Jeu uniquement sorti au Japon. C'est une machine à sous mélangé à de l'arcade se jouant à 4 en incarnant Mario, Luigi et deux Toads." );
    let mario10 = new Mario("new super mario bros2", "3ds", 2012, "New Super Mario Bros. 2 est un jeu vidéo de plates-formes de la série Super Mario, développé par Nintendo EAD, sorti le 28 juillet 2012 au Japon, et en août 2012 dans le reste du monde sur Nintendo 3DS. Le jeu fait suite à New Super Mario Bros sorti en 2006 sur Nintendo DS.");

    let marioCollections = { ...{mario1}, ...{mario2}, ...{mario3}, ...{mario4}, ...{mario5}, ...{mario6}, ...{mario7}, ...{mario8}, ...{mario9}, ...{mario10} };

    let marioDivs = Object.values(marioCollections).map((mario,i) => {
    let div = document.createElement("div");
    let marioCollectionDiv = document.getElementById("marioCollectionDiv");
    
    let h2 = document.createElement("h2");
    h2.textContent = mario.titre;
    div.appendChild(h2);
    
    let h3 = document.createElement("h3");
    h3.textContent = mario.console;
    div.appendChild(h3);
  
    let h4 = document.createElement("h4");
    h4.textContent = mario.sortie;
    div.appendChild(h4);
    
    let button = document.createElement("button");
    button.textContent = "Voir la description";
    div.appendChild(button);
    button.classList.add("button")
    marioCollectionDiv.appendChild(div);
    marioCollectionDiv.appendChild(button);
    
    return div;
  });
  const btn = document.querySelectorAll(".button");

  console.log(btn);
  btn.forEach((el, i) => {
      el.addEventListener("click", () => {
      openPopup(i);
      console.log("ok");
    });
  });
  
  function openPopup(i) {
    let marioCollections = { ...{mario1}, ...{mario2}, ...{mario3}, ...{mario4}, ...{mario5}, ...{mario6}, ...{mario7}, ...{mario8}, ...{mario9}, ...{mario10} };
    let selectedMario = Object.values(marioCollections)[i];
    let popup = document.createElement("div");
    popup.setAttribute("class", "popup");
    
    let title = document.createElement("h2");
    title.textContent = selectedMario.titre;
    popup.appendChild(title);
    
    let console = document.createElement("h3");
    console.textContent = selectedMario.console;
    popup.appendChild(console);
    
    let sortie = document.createElement("h4");
    sortie.textContent = selectedMario.sortie;
    popup.appendChild(sortie);
    
    let description = document.createElement("p");
    description.textContent = selectedMario.description;
    popup.appendChild(description);
    
    let closeBtn = document.createElement("button");
    closeBtn.textContent = "Fermer";
    closeBtn.addEventListener("click", () => {
      popup.remove();
    });

    popup.appendChild(closeBtn);
    document.body.appendChild(popup);
   
  }
  let marios = [mario1, mario2, mario3, mario4, mario5, mario6, mario7, mario8, mario9, mario10];
  
  let currentIndex = 0;
  
  function displayMario() {
    marioCollectionDiv.innerHTML = 
    `<h2>${marios[currentIndex].titre}</h2>
    <p>${marios[currentIndex].console}</p>
    <p>${marios[currentIndex].sortie}</p>`;
    let button = document.createElement("button");
    button.textContent = "Voir la description";
    button.addEventListener("click", () => {
    openPopup(currentIndex);
    });
    marioCollectionDiv.appendChild(button);

    };
  
  function nextMario() {
    currentIndex++;
    if (currentIndex >= marios.length) {
      currentIndex = 0;
    }
    displayMario();
  }
  
  function previousMario() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = marios.length - 1;
    }
    displayMario();
  }

displayMario();

let nextBtn = document.createElement('button');
nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
nextBtn.classList.add('next-btn');
nextBtn.addEventListener('click', nextMario);

let previousBtn = document.createElement('button');
previousBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
previousBtn.classList.add('previous-btn');
previousBtn.addEventListener('click', previousMario);

let buttonsDiv = document.createElement('div');
buttonsDiv.classList.add('buttons');
buttonsDiv.appendChild(previousBtn);
buttonsDiv.appendChild(nextBtn);

let marioCollection = document.querySelector('#mario-collection');
marioCollection.appendChild(buttonsDiv);



// marioDivs.forEach((div) => {
//     div.addEventListener("mouseover", () => {
//         div.style.transform = "scale(1.1)";
//         div.style.transition = "all 0.3s ease";
//         div.style.color = "rgba(155, 155, 155)";
//   });

//   div.addEventListener("mouseout", () => {
//     div.style.transform = "scale(1)";
//     div.style.transition = "all 0.3s ease";
//     div.style.color = "rgba(255, 255, 255)"
//   });
// });

// marioDivs.forEach((div) => {
//   div.addEventListener("click", () => {
//     div.style.backgroundColor = "rgba(155, 0, 155, 0.5)";
//     div.style.borderRadius = "10px";
//     div.style.transition = "all 0.3s ease";
//   });
// });