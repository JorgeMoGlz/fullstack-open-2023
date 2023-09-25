import { useState } from 'react'

import { Person } from './components/Person'

export const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = ( event ) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }

    var personExist = false

    for(var p=0; p<=persons.length; p++) {
      if (JSON.stringify(personObject)===JSON.stringify(persons[p])) {
        personExist = true
        alert(`${personObject.name} is already added to phonebook`)
        setNewName('')
      }
    }

    if(!personExist) {
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={ addPerson }>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        debug: 
          {
            persons.map(person =>
              <Person key={ person.name } person={ person }/>)
          }
      </div>
    </div>
  )
}
