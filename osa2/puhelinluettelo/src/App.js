import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filterStr, setNewFilterStr] = useState('')

  useEffect(() => {
    personService
    .getAll()    
    .then(personData => {
      setPersons(personData)
    })
  }, [])

  const addName = (event) => {
      event.preventDefault()
      const personObject = {
          name: newName,
          number: newNumber,
          date: new Date().toISOString
        }

        const nameExists = persons
        .map(person => person.name)
        .includes(newName)

        if (nameExists) {
          alert(`${newName} is already added to phonebook`)
          return 
      }

      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
      console.log(event.target.value)
      setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
      console.log(event.target.value)
      setNewFilterStr(event.target.value)
      console.log(numbersToShow)
  }

  const numbersToShow = filterStr ? persons
  .filter(person => person.name.toLowerCase().includes(filterStr.toLowerCase()))
  : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterStr} onChange={handleFilterChange} />
      <h2>Add a new number</h2>
      <PersonForm 
      addName={addName}
      newName={newName}
      newNumber={newNumber}
      handleNameChange={handleNameChange}
      handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Numbers numbersToShow={numbersToShow}/>
    </div>
  )

}

export default App