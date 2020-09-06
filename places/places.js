const axios = require('axios');

let instance;
const API_KEY = '9ec06192bae3d78e902c6d51ca3764bd'

const initAxiosInstance = () => {
    if (instance) {
        return instance
    } else {
        return instance = axios.create({
            baseURL: 'http://api.openweathermap.org',
            timeout: 3000
        })
    }

}

const getCityLocation = async(cityName) => {

    initAxiosInstance()
    const encodedCityName = encodeURI(cityName)
    response = await instance.get(`/data/2.5/weather?q=${encodedCityName}&appid=${API_KEY}`)
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        });
    if (response.status !== 200) {
        throw new Error(`Api responde ${response.response.data.message} to ${cityName}`)
    }

    let data = response.data
    return {
        city: data.name,
        lat: data.coord.lat,
        lon: data.coord.lon
    }
}

const getCityWeatherByLatLon = async(lat, log) => {
    initAxiosInstance();
    response = await instance.get(`/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`)
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        });
    if (response.status !== 200) {
        throw new Error(`Api responde ${response.response.data.message} to ${cityName}`)
    }

    let data = response.data
    return {
        city: data.name,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        temp: `${data.main.temp} celcius`,
    }
}

module.exports = {
    getCityLocation,
    getCityWeatherByLatLon,
}