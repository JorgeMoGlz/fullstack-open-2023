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
  console.log(props.content.name)
  return (
    <div>
      <Part name={props.content.name} exercises={props.content.exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    <p>
      {props.title} {props.exercises.reduce((partialSum, totalExercise) => partialSum+totalExercise, 0)}
    </p>
  )
}

export const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content content={part1} />
      <Content content={part2} />
      <Content content={part3} />
      <Total title='Number of exercises' exercises={[part1.exercises, part2.exercises, part3.exercises]} />
    </div>
  )
}
