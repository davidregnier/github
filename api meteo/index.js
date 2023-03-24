// avec la méthode fetch et les promesse faire une page qui affiche la méteo de la ville 
//que l'utilisateur a entrer dans l'input en utilisant l'api méteo de notre choix
// api key = 0c7d25625a989d81292c12c9d08cee22
// essayer avec api weatherstack

let form = document.querySelector('form');
let input = document.querySelector('input');
let weatherDiv = document.querySelector('#weather');

form.addEventListener('submit', e => {
    e.preventDefault();
    let ville = input.value;
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${ville}&limit=1&appid=0c7d25625a989d81292c12c9d08cee22`)
        .then(response => response.json())
        .then(data => {
            // console.log(data[0]);
            let lat = data[0].lat;
            let lon = data[0].lon;
            getmeteo(lat, lon, ville)
        })
        .catch(error => {
            console.error(error);
            weatherDiv.innerHTML = `<p>Impossible de récupérer la météo pour ${ville}.</p>`;
        });
});
const getmeteo = (lat, lon, ville) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=0c7d25625a989d81292c12c9d08cee22`)
        .then(response => response.json())
        .then(data => {
            let temperature = data.main.temp;
            let description = data.weather[0].description;
            weatherDiv.innerHTML = `<p>Il fait ${temperature}°C à ${ville} avec ${description}.</p>`;
            // console.log(data);
        })
        .catch(error => {
            console.error(error);
            weatherDiv.innerHTML = `<p>Impossible de récupérer la météo pour ${ville}.</p>`;
        });
}