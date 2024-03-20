import { useState } from 'react'
import Person from './components/Person'
import './App.css'

function App() {

  return (
    <>
      <Person firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <Person firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      <Person firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
      <Person firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"}/>
    </>
  )
}

export default App
