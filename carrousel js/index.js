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
// function fibonacci(n) {
//     if (n === 0) {
//         return [0];
//     } else if (n === 1) {
//         return [0, 1];
//     } else {
//         let fib = fibonacci(n - 1);
//         fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//     return fib;
//     }
//   }
  
//   console.log(fibonacci(50));
  
//   function fibonacci(n) {
//     let count = [];
//     for(let i = 0; i <= n; i++) {
//         if(i == 0) {
//             count = [i];
//         } else if (i == 1) {
//             count.push(count[i-1] + i);
//         } else {
//             count.push(count[i-2] + count[i-1]);
//         }
//     }
//     return count;
//   }

//   alert(fibonacci(10));

// titre console anne de sortie

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

    

    let marioDivs = Object.values(marioCollections).map((mario) => {
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
    return div;
  });
  
  marioDivs.forEach((div, i) => {
    let button = document.createElement("button");
    button.textContent = "Voir la description";
    button.addEventListener("click", () => {
     openPopup(i);
  });
    div.appendChild(button);
    marioCollectionDiv.appendChild(div);
  });
 
  function openPopup(i) {
   let marioCollections = { ...{mario1}, ...{mario2}, ...{mario3}, ...{mario4}, ...{mario5}, ...{mario6}, ...{mario7}, ...{mario8}, ...{mario9}, ...{mario10} };
   let selectedMario = Object.values(marioCollections)[i];
   let popup = document.createElement("div");
    popup.classList.add("popup");
    
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
  
// marioDivs.forEach((div) => {
//   div.addEventListener("mouseover", () => {
//     div.style.transform = "scale(1.1)";
//     div.style.transition = "all 0.3s ease";
//     div.style.color = "rgba(155, 155, 155)";
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