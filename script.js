const locationInput = document.querySelector('input');
const search = document.querySelector('#search')

search.addEventListener('click', () => {
    locationInput.value ?
    getWeatherData(locationInput.value) :
    getWeatherData()
})

const getWeatherData = async (place = "pune") => {
    try {
        const rawData = await fetch(`https://api.weatherapi.com/v1/current.json?key=5b009d0552f2431abdd32817232808&q=${place}`)
        const data = await rawData.json();
        console.log(data);
    }
    catch(err) {
        throw new Error(err)
    }
}