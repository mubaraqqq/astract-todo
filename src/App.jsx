import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import User from './components/User';
import RequireAuth from './components/RequireAuth';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <div>
          <Routes>
            <Route index path='/' element={<Homepage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/user/*' element={ <RequireAuth><User /></RequireAuth> } />
          </Routes>
      </div>
    </AuthProvider>
  )
}

export default App