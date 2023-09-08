const Header = ( props ) => {
  return (
    <h1> {props.course} </h1>
  )
}

const Part = (props) => {
  return (
    <p> { props.name } {props.exercises} </p>
  )
}

const Content = (props) => {
  console.log(props.parts)
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  console.log(props.totalParts[0].exercises)
  return (
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    <p>
      Number of exercises {[
        props.totalParts[0].exercises,
        props.totalParts[1].exercises,
        props.totalParts[2].exercises,
        ].reduce((partialSum, totalExercise) => partialSum+totalExercise, 0)}
    </p>
  )
}

export const App = () => {
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
      <Total totalParts={parts} />
    </div>
  )
}
