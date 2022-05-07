import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Profile from './components/Profile';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <div>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
      </div>
    </AuthProvider>
  )
}

export default App