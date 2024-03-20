import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
// import EditPoll from './components/EditPoll';
import SinglePoll from './components/SinglePoll';
import CreatePoll from './components/CreatePoll';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* {
          verified? <Route path='/' element={<Dashboard />} /> : <Route path='/login' element={<Login />} />
        } */}
        <Route path='/' element={<Dashboard />} /> 
        <Route path='/polls' element={<Dashboard />} />
        <Route path='/poll/:id' element={<SinglePoll />} />
        {/* <Route path='/poll/edit/:id' element={<EditPoll />} /> */}
        <Route path='/poll/create' element={<CreatePoll />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

