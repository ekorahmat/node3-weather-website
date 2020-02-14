const request = require('request')

const forecast = (latitude, longitude, callback) => {
const url = 'https://api.darksky.net/forecast/3bd929b421bf4e39cf0118f82439290c/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?lang=id'
// const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiZWtvcHJhc2V0aW8iLCJhIjoiY2s2ZTduNGxoMXA4aTNkcWpkeHQxdXhudiJ9.l4R1Ld9-Dpkr5wOy-D-KpQ&&limit=1'
    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services', undefined)        
        } else if(body.error) {
            callback('Unable to find location. Tray another search.', undefined)
        } else {
            callback(undefined, {
                summary: body.daily.data[0].summary, 
                temperature: body.currently.temperature,
                rain: body.currently.precipProbability 
            })
        }
    })
    
}

module.exports = forecast
