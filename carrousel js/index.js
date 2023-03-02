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

    //grace a la methode map , pour chaque objet de l'objet ma collections nous allons creer une div qui aura comme h2 le nom de la console en h3 le nom du jeu et en h4 l'année , cette div doit etre afficher sur l'html


    const marioDivs = Object.values(marioCollections).map((mario) => {
    const div = document.createElement("div");
  
    const h2 = document.createElement("h2");
    h2.textContent = mario.console;
    div.appendChild(h2);
  
    const h3 = document.createElement("h3");
    h3.textContent = mario.titre;
    div.appendChild(h3);
  
    const h4 = document.createElement("h4");
    h4.textContent = mario.sortie;
    div.appendChild(h4);
  
    return div;
  });
  
  marioDivs.forEach((div) => {
    marioCollectionDiv.appendChild(div);
  });
  