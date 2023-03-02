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
function fibonacci(nbr) {
    if (nbr === 0) {
      return [0];
    } else if (nbr === 1) {
      return [0, 1];
    } else {
      let fib = fibonacci(nbr - 1);
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
      return fib;
    }
  }
  
  console.log(fibonacci(50));
  
