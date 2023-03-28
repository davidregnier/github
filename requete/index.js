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
// const imgUrl = 'https://picsum.photos/200/300';
// fetch(imgUrl)
//     .then(response => response.blob())
//     .then(blob => {
//         const objectUrl = URL.createObjectURL(blob);
//         imgElement.src = objectUrl;
//     })
//     .catch(error => console.error(error));

//Écrivez une fonction qui utilise la méthode fetch pour envoyer des données à un
//serveur distant en utilisant une méthode HTTP POST


function sendDataToServer() {
    const dataToSend = {
        name: document.getElementById('name-input').value,
        email: document.getElementById('email-input').value,
        message: document.getElementById('message-input').value
        
    };
    
    fetch('http://127.0.0.1:5500/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .then(data => {
        console.log('les donnees ont été envoyé avec succés', data);
    })
    .catch(error => {
        console.error('erreur dans l envoie des données :', error);
    });
}
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendDataToServer();
});

