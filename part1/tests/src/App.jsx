import { useState } from 'react'
import './App.css'


export const App = (props) => {
  
  const [ counter, setCounter ] = useState(2)
  
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  
  console.log('rendering...', counter)

  return (
    <>
      <div>{counter}</div>
    </>
  )
}
