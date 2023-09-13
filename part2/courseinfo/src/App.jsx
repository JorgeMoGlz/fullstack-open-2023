const Header = ( {header} ) => {
  return (
    <h1> {header.name} </h1>
  )
}

const Part = (props) => {
  return (
    <p> { props.name } {props.exercises} </p>
  )
}

const Content = ({content}) => {

  return (
    <div>
      <Part name={content.parts[0].name} exercises={content.parts[0].exercises} />
      <Part name={content.parts[1].name} exercises={content.parts[1].exercises} />
      <Part name={content.parts[2].name} exercises={content.parts[2].exercises} />
    </div>
  )
}

const Total = ({total}) => {
  return (
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    <p>
      Number of exercises {[
        total.parts[0].exercises,
        total.parts[1].exercises,
        total.parts[2].exercises,
      ].reduce((partialSum, totalExercise) => partialSum+totalExercise, 0)}
    </p>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header header={course}/>
      <Content content={course}/>
      <Total total={course}/>
    </div>
  )
} 

export const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <Course course={course} />
  )
}
