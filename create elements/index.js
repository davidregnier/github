let inputValue = "";
let input = document.createElement("input");
let form = document.createElement("form");
let maDiv = document.querySelector('#maDiv');
input.setAttribute("type","text");
form.append(input);
document.body.append(form);
form.addEventListener("submit",e=>{
    e.preventDefault();
    let paragraphe = document.createElement("p");
    document.body.append(paragraphe);
    inputValue = input.value;
    paragraphe.innerHTML = inputValue;
    // console.log();
});

// element.classList.toggle('active');
// classList.toogle   
// maDiv.addEventlistener

let open = document.querySelector('#open')
open.addEventListener('click',()=>{
    maDiv.classList.add('active');
});

let close = document.querySelector('#close')
close.addEventListener('click',()=>{
    maDiv.classList.remove('active');
});
