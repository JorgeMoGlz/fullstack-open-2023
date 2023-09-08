import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = ( props ) => {
  return (
    <div>
      <p>Hello { props.name }, you are { props.age } years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>

  )
}

export const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Jorge' age={11} />
      <Hello name='Omar' age={age} />
      <Footer />
    </>

  )
}