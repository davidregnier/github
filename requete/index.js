// fetch('https://jsonplaceholder.typicode.com/posts/')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));

// function fetchData() {
//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve('Data has been fetched!')
//         }, 2000);
//     })
// }

// async function run(){
//     try {
//         let result = await fetchData()
//     console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// run()
// console.log('aprés la fonction async');

// async function fetchData() {
//     try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/posts/')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }

// }

// fetchData()

//utilisez la methode fetch pour recuperer un fichier text à partir d'un serveur distant, puis affichez-le dans la console

// fetch('https://fr.lipsum.com/textfile.txt')
//   .then(response => response.text())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

//ecrivez une fonction qui utilise la methode fetch pour recuperer des données json à partir d'une API, puis retourne les données sous forme d'objet js

// async function fetchJsonData() {
//     try {
//       const response = await fetch('https:jsonplaceholder.typicode.com/posts/');
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//utilisez la methode fetch pour recuperer une image a partir d'une url, puis affichez-la dans un element img de votre page html

// const imgElement = document.getElementById('monImage');
// const imgUrl = 'https://picsum.photos/500/500';
// fetch(imgUrl)
//     .then(response => response.blob())
//     .then(blob => {
//         const objectUrl = URL.createObjectURL(blob);
//         imgElement.src = objectUrl;
//     })
//     .catch(error => console.error(error));

//Écrivez une fonction qui utilise la méthode fetch pour envoyer des données à un
//serveur distant en utilisant une méthode HTTP POST


// function sendDataToServer() {
//     const dataToSend = {
//         name: document.getElementById('name-input').value,
//         email: document.getElementById('email-input').value,
//         message: document.getElementById('message-input').value

//     };

//     fetch('http://127.0.0.1:5500/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(dataToSend)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('les donnees ont été envoyé avec succés', data);
//     })
//     .catch(error => {
//         console.error('erreur dans l envoie des données :', error);
//     });
// }
// const form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     sendDataToServer();
// });

//Utilisez la méthode fetch pour récupérer des données JSON à partir de l’API themoviedb,puis utilisez ces données pour générer du contenu html en fonction de ce que l’utilisateur aura entré comme titre dans un input que vous aurez prévu à cet effet.

// keys b080d72a237d0bdc700275fb500dae98


const apiKey = 'b080d72a237d0bdc700275fb500dae98';
const form = document.querySelector('form');
const filmListe = document.getElementById('filmListe');
let title = "";

form.addEventListener('submit', e => {
    e.preventDefault();
    const input = e.target.elements['movie-title'];
    title = input.value;
    getMovies(title)
        .then(movies => {
            const moviesHtml = generateMoviesHtml(movies);
            filmListe.innerHTML = moviesHtml;
        })
        .catch(error => console.error(error));
});

async function getMovies(title) {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}&language=fr-FR`);
    const data = await response.json();
    return data.results;
}
const date = new Date();
const options = { day: 'numeric', month: 'long', year: 'numeric' };
const formattedDate = date.toLocaleDateString('fr-FR', options);
console.log(formattedDate); 

function generateMoviesHtml(movies) {
    const moviesHtml = movies.map(movie => `
    <div>
    ${(movie.poster_path != undefined) ? (`<img src="https://image.tmdb.org/t/p/w400${movie.poster_path}" alt="${movie.title}">`) : (`<img src="img/404erreur.jpg">`)}
    <h2>${movie.title}</h2>
    <h2>${(movie.vote_average >= 5) ? (`<i class="fa-regular fa-thumbs-up"></i>`) : (`<i class="fa-regular fa-thumbs-down"></i>`)}
    ${movie.vote_average}/10</h2>
    <h3>Vo:${movie.original_language}</h3>
    <h3>Date de sortie:${movie.release_date}</h3>
    <p>${movie.overview}</p>
    </div>`).join("");
    return moviesHtml;
}




//   <img src="https://image.tmdb.org/t/p/w400${movie.poster_path}" alt="${movie.title}">
// <i class="fa-regular fa-thumbs-down"></i>
// </h2><i class="fa-regular fa-thumbs-down"></i><h2>${movie.vote_average}/10</h2>
// ${(film.vote_average >= 5) ? (`<i class="fa-regular fa-thumbs-up"></i>`) : (`<i class="fa-regular fa-thumbs-down"></i>`)}

///////////////////////////////////////////////////////////////////




///Afficher tout les titres originaux dans la console.

// Version for:
// for (let i=0; i<results.length; i++)
// {
//     console.log(results[i].original_title);
// }

// // Version map:
// results.map(film => console.log(film.original_title));

// //Afficher tout les titres originaux et le poster dans la console.
// results.map((film) => (
//     console.log(film.original_title),
//     console.log(film.poster_path)
//     ));


// Dans chaque objet on a une vote d'utilisateurs sur 10 (vote_average), avec la méthode map on veut savoir si le film a une note = ou > à 5 dans ce cas le film est bon sinon le film est nul (afficher dans la console)
// Version for:
// for (i=0; i<results.length;i++) {
//         if(results[i].vote_average>=5){
//             console.log("bon film: "+results[i].original_title+" "+"note: "+results[i].vote_average);
//         }
//         else{
//             console.log("mauvais film: "+results[i].original_title+" "+"note: "+results[i].vote_average);
//         }
// };

// Version map:
// results.map((film)=>(
//     console.log(film.original_title),
//     (film.vote_average>=5)?console.log("Bon film, note: "+film.vote_average):console.log("Mauvais film, note: "+film.vote_average)));

// map ne supporte pas plusieurs demande, en posant une question on passe outre.///

// let exercice = document.getElementById("exercice");
// let calcul = 23*2;

// exercice.innerHTML=results.map((film)=>(
//     (film.vote_average>=5)?
//     `<div><h2>${film.original_title}</h2><i class="fa-regular fa-thumbs-up"></i><h2>${film.vote_average}/10</h2>
// <img src=https://image.tmdb.org/t/p/w200${film.poster_path}></div>`:`<div><h2>${film.original_title}</h2><i class="fa-regular fa-thumbs-down"></i><h2>${film.vote_average}/10</h2>
// <img src=https://image.tmdb.org/t/p/w200${film.poster_path}></div>`)).join("")

// si le film a une note qui est sup ou = à 5 => pousse vers le haut sinon pousse vers le bas
{
    /* <i class="fa-regular fa-thumbs-up"></i>
    <i class="fa-regular fa-thumbs-down"></i>  */
}

// if (condition) {

// } else {

// }

// ternaire => condition ? mon code : mon autre code