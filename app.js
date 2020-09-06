const { argv } = require('./config/yargs');
const { getCityLocation, getCityWeatherByLatLon } = require('./places/places');

const getWeatherByCityName = async(city) => {
    try {
        citylocation = await getCityLocation(city);
        cityweather = await getCityWeatherByLatLon(citylocation.lat, citylocation.lon)
        return cityweather
    } catch (error) {
        throw (`No se pudo encontrar el clima de ${city}`, err)
    }

}

getWeatherByCityName(argv.city).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});