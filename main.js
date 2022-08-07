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
    const icon = document.getElementById('icon')
    const divider = document.querySelector('.divider');
    const weatherDisp = document.getElementById('weatherDisp');
    const right = document.getElementById('right')
    let currentDate = new Date();
    currentDate = currentDate.toString();
    let arrayDate = currentDate.split(' ');
    date.textContent = `${arrayDate[1]} ${arrayDate[2]} ${arrayDate[3]}`;
    weatherDisp.classList.remove('remove');
    weatherDisp.classList.add('move-left'); ``
    divider.classList.remove('remove')
    right.classList.remove('round')
    
    if(arrayDate[0] == 'Mon'){
        day.textContent = "Monday"
    }else if(arrayDate[0] == 'Tue' || arrayDate[0] == 'Tues'){
        day.textContent = 'Tuesday'
    }else if(arrayDate[0] =='Wed'){
        day.textContent = 'Wednesday'
    }else if(arrayDate[0] == 'Thu' || arrayDate[0] == 'Thur' || arrayDate[0] == 'Thurs'){
        day.textContent = 'Thursday'
    }else if(arrayDate[0] == 'Fri'){
        day.textContent = 'Friday'
    }else if(arrayDate[0] == 'Sat'){
        day.textContent = "Saturday"
    }else if(arrayDate[0] == 'Sun'){
        day.textContent = "Sunday"
    }
    humid.textContent = `${responseData.main.humidity} %`
    win.textContent = `${Math.ceil(responseData.wind.speed)} Km/h`
    desc.textContent = `${responseData.weather[0].main}`
    degrees.textContent = `${Math.trunc(responseData.main.temp - 273.15)} °C`
    city.innerHTML = `
    <i class="fas fa-map-marker-alt"></i> ${responseData.name}, ${responseData.sys.country}`
}

const citySearch = document.getElementById('city-search');
const search = document.getElementById('search');
citySearch.addEventListener('submit', (e) =>{
    const humText = document.getElementById('hum-text');
    const windText = document.getElementById('wind-text');
    humText.textContent = "HUMIDITY"
    windText.textContent = "WIND"
    e.preventDefault();
    const location = search.value
    getSetWeather(location)
    search.value = ''
    
    
})