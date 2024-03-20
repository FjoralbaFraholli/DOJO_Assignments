import { useState } from 'react'
import Boxes from './components/Boxes'
import Display from './components/Display'
import './App.css'

function App() {
  const [box , setBox] =  useState([]);

  return (
    <>
      <Boxes box={box} setBox={setBox}/>
      <Display box={box}/>
    </>
  )
}

export default App
