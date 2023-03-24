// avec la méthode fetch et les promesse faire une page qui affiche la méteo de la ville 
//que l'utilisateur a entrer dans l'input en utilisant l'api méteo de notre choix
// api key = 0c7d25625a989d81292c12c9d08cee22

let form = document.querySelector('form');
let input = document.querySelector('input');
let weatherDiv = document.querySelector('#weather');

form.addEventListener('submit', e=>{
    e.preventDefault();
    let ville = input.value;
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${ville}&limit=1&appid=0c7d25625a989d81292c12c9d08cee22`)
    .then(response => response.json())
    .then(data => {
      const lat = data[0].lat;
      const lon = data[0].lon;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=0c7d25625a989d81292c12c9d08cee22`)
        .then(response => response.json())
        .then(data => {
          const temperature = data.main.temp;
          const description = data.weather[0].description;
          weatherDiv.innerHTML = `<p>Il fait ${temperature}°C à ${ville} avec ${description}.</p>`;
        })
        .catch(error => {
          console.error(error);
          weatherDiv.innerHTML = `<p>Impossible de récupérer la météo pour ${ville}.</p>`;
        });
    })
    .catch(error => {
            console.error(error);
            weatherDiv.innerHTML = `<p>Impossible de récupérer la météo pour ${ville}.</p>`;
          });
      });
