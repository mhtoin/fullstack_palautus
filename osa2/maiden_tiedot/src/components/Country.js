import React from 'react'

const Country = ({country}) => {
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
            {/*
            <h2>Weather in {country.capital}</h2>
            <p>Temperature: {weather_api.temp}</p>
            <img alt="weather icon" src={weather_api.icon}></img>
            <p>Wind: {weather_api.wind} {weather_api.wind_dir}</p>
            */}
        </div>
    )
}

export default Country