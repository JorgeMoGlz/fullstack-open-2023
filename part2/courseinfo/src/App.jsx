const Header = ({ header }) => {
  return (
    <h1> { header } </h1>
  )
}

const Part = ({ cont }) => {
  return (
    <p> { cont.name }: {cont.exercises} </p>
  )
}

const Content = ({content}) => {

  return (
    content.map((cont) => <Part key={cont.id} cont={cont} />)
  )
}

const Total = ({total}) => {
  var numberOfCourses = [];

  total.map((course) => {
    numberOfCourses.push(course.exercises)
  })

  return (
    // already had it
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    <p>
      total of {numberOfCourses.reduce((partialSum, totalExercise) => partialSum+totalExercise, 0)} exercises
    </p>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header header={course.name}/>
      <Content content={course.parts}/>
      <Total total={course.parts}/>
    </div>
  )
} 

export const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    courses.map((course) => <Course key={course.id} course={course} />)
  )
}
