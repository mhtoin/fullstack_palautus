import React from 'react'

const Course = (props) => {

    const Header = (props) => {
      return (
        <>
        <h1>{props.name}</h1>
        </>
      )
    }
  
    const Content = (props) => {
      const Part = (props) => {
        return (
        <>
        <p>{props.name} {props.number}</p>
        </>
        )
      }
      return (
        <>
        {props.parts.map(part =>
          <Part key={part.id} name={part.name} number={part.exercises} />
          )}
        </>
      )
    }
  
    const Total = (props) => {
      const totalAmount = props.parts.reduce((x, y) => 
        (x + y.exercises), 0)
  
      return (
      <>
      <p>Total number of exercises {totalAmount}
      </p>
      </>
      )
    }
  
    return (
    <>
    <Header name={props.course.name} /> 
    <Content parts={props.course.parts} />
    <Total parts={props.course.parts} />
    </>
    )
  }

  export default Course