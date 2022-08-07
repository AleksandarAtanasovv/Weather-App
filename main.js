const apiKey = '3ece2e1db002a64e975395f5e0ef2684';
const apiurl = (location) =>
`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

async function getSetWeather(location){
    const response = await fetch(apiurl(location));
    const responseData = await response.json();
    const degrees = document.getElementById('deg');
    const desc = document.getElementById('desc');
    const humid = document.getElementById('humid');
    const win = document.getElementById('wind');
    const city = document.getElementById('city');
    const date = document.getElementById('date');
    const day = document.getElementById('day')
    let currentDate = new Date();
    currentDate = currentDate.toString();
    let arrayDate = currentDate.split(' ');
    date.textContent = `${arrayDate[1]} ${arrayDate[2]} ${arrayDate[3]}`;
    day.textContent = arrayDate[0]
    console.log(arrayDate);
    
    humid.textContent = `${responseData.main.humidity} %`
    win.textContent = `${Math.ceil(responseData.wind.speed)} Km/h`
    desc.textContent = `${responseData.weather[0].main}`
    degrees.textContent = `${Math.trunc(responseData.main.temp - 273.15)} °C`
    city.innerHTML = `
    <i class="fas fa-map-marker-alt"></i> ${responseData.name}`
}

const citySearch = document.getElementById('city-search');
const search = document.getElementById('search');
citySearch.addEventListener('submit', (e) =>{
    
    e.preventDefault();
    const location = search.value
    console.log(location);
    
})
getSetWeather("Istanbul")
// {
//     "coord": {
//         "lon": 27.4678,
//         "lat": 42.5061
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 304.21,
//         "feels_like": 303.25,
//         "temp_min": 304.21,
//         "temp_max": 304.21,
//         "pressure": 1010,
//         "humidity": 33
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 8.75,
//         "deg": 70
//     },
//     "clouds": {
//         "all": 0
//     },
//     "dt": 1659889094,
//     "sys": {
//         "type": 1,
//         "id": 6360,
//         "country": "BG",
//         "sunrise": 1659841693,
//         "sunset": 1659893020
//     },
//     "timezone": 10800,
//     "id": 732770,
//     "name": "Burgas",
//     "cod": 200
// }