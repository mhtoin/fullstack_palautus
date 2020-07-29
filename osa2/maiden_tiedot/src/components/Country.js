import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Country = ({country, api_key}) => {
    const [weatherData, setWeatherData] = useState([])

    // Often, the API seems to think a https request is being made --> request fails

    const queryUri = 'http://api.weatherstack.com/current'
    const params = {
        access_key: api_key,
        query: country.capital
    }
    
    useEffect(() => { 
        axios
        .get(queryUri, {params})      
        .then(response => {console.log('request complete', response.data)
        setWeatherData(response.data) })
      }, [])
    
    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Languages</h2>
            <ul>
                {country.languages.map(language =>
                   <li key={language.name}>{language.name}</li> )}
            </ul>
            <p><img alt="flag for country" src={country.flag} height="80vw" width="90vw"></img></p>
            
            <h2>Weather in {country.capital}</h2>
            <p>Temperature: {`${weatherData.current ? weatherData.current.temperature : ''} Celsius`}</p>
            <img alt="weather icon" src={weatherData.current ? weatherData.current.weather_icons[0] : ''}></img>
            <p>Wind: {weatherData.current ? weatherData.current.wind_speed : ''} {weatherData.current ? weatherData.current.wind_dir : ''}</p>
        </div>
    )
}

export default Country