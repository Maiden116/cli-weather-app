const argv = require('yargs').options({
    city: {
        alias: 'c',
        desc: 'City that we want to obtain the weather',
        demand: true,
    }
}).argv

module.exports = {
    argv
}