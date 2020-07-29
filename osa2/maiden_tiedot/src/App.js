import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/FilterForm'
import Country from './components/Country'

const App = () => {
  const [ countries, setCountries] = useState([])
  const [filterVal, setFilterVal] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => { 
    axios
    .get('https://restcountries.eu/rest/v2/all')      
    .then(response => {console.log('request complete', response)
    setCountries(response.data) })
  }, [])

  const handleFilterChange = (event) => {
      console.log(event.target.value)
      setFilterVal(event.target.value)
  }

  const filteredCountries = filterVal ? countries
  .filter(country => country.name.toLowerCase().includes(filterVal.toLowerCase()))
  : countries

  const showCountries = (filterResults) => {
    if (filterResults.length > 10) {
      return 'Too many matches'
    }

    if (filterResults.length > 1 && filterResults.length <= 10) {
      return (
        <ul>
          {filterResults.map(country => 
            <li key={country.name + filterResults.length + 1}>{country.name} <button onClick={() => setFilterVal(country.name)}>show</button></li>)}
        </ul>
      )
    }

      /*
      axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${filterResults.map(country => country.capital)}`)      
      .then(response => {console.log('request complete', response.data)
      setWeatherData(response.data) })
      */

    return (
      <div>
        {filterResults.map(country =>
          <Country country={country} api_key={api_key}/>)}
          </div>
    )
  }

  
  return (
    <div>
      Find countries <Filter value={filterVal} onChange={handleFilterChange} />
      {showCountries(filteredCountries)}
    </div>
  )

}

export default App