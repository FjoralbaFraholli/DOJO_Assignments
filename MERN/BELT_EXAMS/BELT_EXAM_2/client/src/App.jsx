import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditPirate from './components/EditPirate';
import SinglePirate from './components/SinglePirate';
import CreatePirate from './components/CreatePirate';
import Dashboard from './components/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} /> 
        <Route path='/pirates' element={<Dashboard />} />
        <Route path='/pirate/:id' element={<SinglePirate />} />
        <Route path='/pirate/edit/:id' element={<EditPirate />} />
        <Route path='/pirate/create' element={<CreatePirate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

