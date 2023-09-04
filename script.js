const locationInput = document.querySelector('input');
const searchButton = document.querySelector('#search')

const getWeatherData = async (place = "pune") => {
    try {
        const rawData = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=5b009d0552f2431abdd32817232808&q=${place}`
        )
        const data = await rawData.json();
        return data;
    }
    catch(err) {
        alert(err)
    }
}

const updateWeatherUI = (weatherData) => {
    document.getElementById('location-name').textContent = `Location: ${weatherData.location.name}`;
    document.getElementById('temperature').textContent = 
        `Temperature: ${weatherData.current.temp_c}°C / ${weatherData.current.temp_f}°F`;
    document.getElementById('condition').textContent = `Condition: ${weatherData.current.condition.text}`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${weatherData.current.wind_kph} kph`;
    document.getElementById('humidity').textContent = `Humidity: ${weatherData.current.humidity}%`;
    
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.classList.remove('hidden');
    const loading = document.getElementById('loading');
    loading.classList.add('hidden');
}

searchButton.addEventListener('click', async () => {
    const location = locationInput.value.trim();
    try {
        const weatherData = location ?
        await getWeatherData(location) :
        await getWeatherData();
        updateWeatherUI(weatherData);
    } catch (error) {
        alert('Error getting weather data:', error);
    }
})