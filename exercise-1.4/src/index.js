import React from 'react'
import ReactDOM from 'react-dom'

const Header = ( {course} ) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}



const Content = ( {parts} ) => {
  return (
    <div>
      <p> {parts[0].name} has {parts[0].exercises} exercises</p>
      <p> {parts[1].name} has {parts[1].exercises} exercises</p>
      <p> {parts[2].name} has {parts[2].exercises} exercises</p>
    </div>
  )
}

const Total = ( {parts} ) => {
  return (
    <div>
      <p>There are {parts[0].exercises + parts[1].exercises + parts[2].exercises} exercises total</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


