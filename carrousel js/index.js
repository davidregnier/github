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

function Mario (titre, console, sortie){
    this.titre = titre;
    this.console = console;
    this.sortie = sortie;
}
    let mario1 = new Mario("mario Bros", "game And Watch", 1983 );
    let mario2 = new Mario("super mario bros", "Nes", 1985);
    let mario3 = new Mario("super mario bros special", "pc-88", 1986);
    let mario4 = new Mario("super mario bros 2 th lost level", "famicom", 1986);
    let mario5 = new Mario("super mario bros 2", "gba famicom", 2001);
    let mario6 = new Mario("super mario bros 3", "gba", 2003);
    let mario7 = new Mario("kaettekita mario bros", "famicom", 1988);
    let mario8 = new Mario("super mario bros and friends", "ms-dos", 1992);
    let mario9 = new Mario("new super mario bros wii coin word", "arcade", 2011 );
    let mario10 = new Mario("new super mario bros2", "3ds", 2012);

    let marioCollections = { ...{mario1}, ...{mario2}, ...{mario3}, ...{mario4}, ...{mario5}, ...{mario6}, ...{mario7}, ...{mario8}, ...{mario9}, ...{mario10}};

    console.log(marioCollections)

//grace a la methode map , pour chaque objet de l'objet ma collections nous allons creer une div qui aura comme h2 le nom de la console
//en h3 le nom du jeu et en h4 l'année , cette div doit etre afficher sur l'html


    const marioDivs = Object.values(marioCollections).map((mario) => {
    const div = document.createElement("div");
    const marioCollectionDiv = document.getElementById("marioCollectionDiv");

//la methode Object.values() sert a extraire les valeur de chaque proprieté d'objet de l'objet marioCollections
//puis la methode map() pour boucler a travers chaque elements de ce tableau
    
  
    const h2 = document.createElement("h2");
    h2.textContent = mario.titre;
    div.appendChild(h2);
  
    const h3 = document.createElement("h3");
    h3.textContent = mario.console;
    div.appendChild(h3);
  
    const h4 = document.createElement("h4");
    h4.textContent = mario.sortie;
    div.appendChild(h4);
  
// la fonction map() va creer  un nouvel element <div> pour chaque element du tableau en utilisant la methodes  document.createElement()
//et leur atribut le contenue des propriété console sortie titre de l'objet mario en utilisant la proprieté textContent

    return div;
  });
  
  marioDivs.forEach((div) => {//la methode forEach() ajoute chaque nouvel element <div> crée a l'element <div> avec l'ID marioCollectionDiv dans l'html grace a la methode appenChild()
    marioCollectionDiv.appendChild(div);
  });

  marioDivs.forEach((div) => {
    div.addEventListener("mouseover", () => {//au survol
      div.style.transform = "scale(1.1)";//grossi la div
      div.style.transition = "all 0.3s ease";// transition de 0.3 sec pour atteindre ca taille
      div.style.color = "rgba(155, 155, 155)";//couleur
    });
  
    div.addEventListener("mouseout", () => {// a la sorti de la souris
      div.style.transform = "scale(1)";
      div.style.transition = "all 0.3s ease";
      div.style.color = "rgba(255, 255, 255)"
    });
  });
  
  // Ajout d'un effet de clic pour chaque jeu de la collection
  marioDivs.forEach((div) => {
    div.addEventListener("click", () => {
      div.style.backgroundColor = "rgba(155, 0, 155, 0.5)";
      div.style.borderRadius = "10px";
      div.style.transition = "all 0.3s ease";
  
      setTimeout(() => {// le setTimeout est utilsé pour retarder l'alerte en l'occurence de 1000 millisecondes soit 1sec
        alert(`Vous avez choisi ${div.querySelector("h2").textContent} sorti en ${div.querySelector("h4").textContent} sur ${div.querySelector("h3").textContent}`);//crée une alert et recupere tous les element div grace a la methode querySelector 
      }, 1000);
    });
  });
  
    
