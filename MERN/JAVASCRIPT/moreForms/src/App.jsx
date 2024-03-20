import { useState } from 'react'
import Form from './components/Form'
import Display from './components/Display'
import './App.css'

function App() {
  const [personList, setPersonList] = useState([])

  return (
    <>
      <Form personList={personList} setPersonList={setPersonList} />
      <Display personList={personList} />
    </>
  )
}

export default App
