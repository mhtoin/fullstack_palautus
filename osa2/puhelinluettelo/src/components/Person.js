import React from 'react'
import personService from '../services/persons'

const Person = ({name, number, id}) => {
    const handleClick = (id) => {
    personService
    .remove(id)
  }
    return (
        <li key={name}>
            {name} {number} <button onClick={handleClick({id})}>delete</button>
        </li>
    )
}

export default Person