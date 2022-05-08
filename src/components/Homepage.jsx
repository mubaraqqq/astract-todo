import { useState } from 'react';
import '../App.css';
import { Paper, Typography, TextField, Box , Button, Alert } from '@mui/material';
import analytics from '../config/firebase-config';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';

function Homepage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const signInUser = async (e) => {
    e.preventDefault();
    setError('');

    try {
      setLoading(true);
      await login(email, password);
      navigate('/profile')
    } catch (err) {
      setError(err.message)
    }

    setLoading(false);
  }

  return (
    <div className="App">
        <Box>
          <Paper elevation={3} className='sign-in-container' sx={{width: '50vw', height: '250px', padding: '1em'}}>
            <Typography variant='h4'>Sign In</Typography>
            {error && <ErrorMessage message={error} />}
            <form action="" onSubmit={signInUser}>
              <Box className='form'>
                <Box className='form-input'><TextField label='Email' variant='standard' value={email} onChange={handleEmailChange} /></Box>
                <Box className='form-input'><TextField label='Password' type='password' variant='standard' value={password} onChange={handlePasswordChange} /></Box>
                <Button disabled={loading} onClick={signInUser} color='primary' variant='contained'>Log In</Button>
              </Box>
            </form>
            <Box><Link to='/signup'><Typography variant='caption'>Create an Account</Typography></Link></Box>
          </Paper>
        </Box>
    </div>
  );
}

export default Homepage;
