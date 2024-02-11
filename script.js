const inputBox = document.getElementById('input');
const button = document.getElementById('btn');
const image = document.getElementById('main-img');
const weatherDiv = document.querySelector('.weather')

const api = my_Api;
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${api}&units=metric&q=`;

async function weatherApp(city) {
    const res = await fetch(url + city)
    const data = await res.json()
    

    if (inputBox.value == '') {
        alert('Enter Your City Name')
    }
    weatherDiv.style.display = 'block';
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/pr";


    if (data.weather[0].main == 'Clear') {
        image.src = 'images/clear.png'
    }

    if (data.weather[0].main == 'Clouds') {
        image.src = 'images/clouds.png'
    }

    if (data.weather[0].main == 'Drizzle') {
        image.src = 'images/drizzle.png'
    }

    if (data.weather[0].main == 'Mist') {
        image.src = "images/mist.png"
    }

    if (data.weather[0].main == 'Rain') {
        image.src = 'images/rain.png'
    }

    if (data.weather[0].main == 'Snow') {
        image.src = 'images/snow.png'
    }
    inputBox.value = ''
}


button.addEventListener("click", () => {
    weatherApp(inputBox.value)
})

inputBox.onkeydown = function (e) {

    if (e.key == "Enter") {

        weatherApp(inputBox.value)
    }
}









