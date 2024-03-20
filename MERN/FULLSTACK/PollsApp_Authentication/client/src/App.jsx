import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePoll from './components/CreatePoll';
import Dashboard from './components/Dashboard';
// import EditPoll from './components/EditPoll';
import SinglePoll from './components/SinglePoll';
import { AuthProvider, useAuth } from './AuthContext';
import LoginPage from './views/LoginPage';

function App() {
  const { user } = useAuth();
  const token = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        {
          token ? (
            <>
              {/* {
              verified? <Route path='/' element={<Dashboard />} /> : <Route path='/login' element={<Login />} />
              } */}
              <Route path='/' element={<Dashboard user={user} />} />
              <Route path='/polls' element={<Dashboard user={user} />} />
              <Route path='/poll/:id' element={<SinglePoll user={user} />} />
              {/* <Route path='/poll/edit/:id' element={<EditPoll user={user} />} /> */}
              <Route path='/poll/create' element={<CreatePoll user={user} />} />
            </>
          ) : (
            <Route path='*' element={<LoginPage />} />
          )}
      </Routes>
    </BrowserRouter>
  )
}

export default App

