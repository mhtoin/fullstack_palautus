import React from 'react'
import Person from './Person'

const Numbers = (props) => {
    return (
        <ul>
            {props.numbersToShow.map(person =>
                <Person name={person.name} number={person.number} />)}
        </ul>
    )
}
export default Numbers
