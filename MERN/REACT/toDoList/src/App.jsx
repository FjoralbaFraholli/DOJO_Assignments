import { useState } from 'react';
import ToDo from './components/ToDo';
import Display from './components/Display';
import './App.css'

function App() {
  const [toDo, setToDo] = useState([])

  return (
    <>
      <ToDo toDo={toDo} setToDo={setToDo}/>
      <Display toDo={toDo} setToDo={setToDo} />
    </>
  )
}

export default App
