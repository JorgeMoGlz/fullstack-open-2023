import { useState } from 'react'
import { areTheseObjectsEqual } from './helpers/areTheseObjectsEqual'
import { Person } from './components/Person'

export const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phone: '555 555 5555'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addPerson = ( event ) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      phone: newPhone
    }
    
    var personExist = false
    for(var p=0; p<persons.length; p++) {
      if (persons[p].name===personObject.name) {
        personExist = true
        alert(`${personObject.name} is already added to phonebook`)
        setNewName('')
        setNewPhone('')
      }

      if ((persons[p].phone===personObject.phone) && !personExist) {
        personExist = true
        alert(`${personObject.phone} is already added to phonebook`)
        setNewName('')
        setNewPhone('')
      }
    }
    
    if(!personExist) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewPhone('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={ addPerson }>
        <div>
          name: <input value={ newName } onChange={ handleNameChange } />
        </div>
        <div>
          number: <input value={ newPhone } onChange={ handlePhoneChange } />
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
