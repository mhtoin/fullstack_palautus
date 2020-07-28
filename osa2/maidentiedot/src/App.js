import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'

const App = () => {
  const [ countries, setCountries] = useState([])
  const [filterVal, setFilterVal] = useState('')

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

  return (
    <div>
      Find countries <Filter value={filterStr} onChange={handleFilterChange} />
    </div>
  )

}

export default App