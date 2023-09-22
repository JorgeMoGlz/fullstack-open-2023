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
  
export const Course = ({course}) => {
  return (
    <div>
      <Header header={course.name}/>
      <Content content={course.parts}/>
      <Total total={course.parts}/>
    </div>
  )
} 