import React, { useState } from 'react';
import { Paper, Typography, TextField, Box , Button } from '@mui/material';
import { Link } from 'react-router-dom';
import analytics from '../config/firebase-config';
import { firebaseSignup } from '../auth/signup';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const signUpUser = () => {
      console.log(email, password);
      firebaseSignup(email, password);
    };

  return (
    <div className="App">
        <Box>
          <Paper elevation={3} className='sign-in-container' sx={{width: '500px', height: '300px', padding: '1em'}}>
            <Typography variant='h4'>Create an Account</Typography>
            <form action="" onSubmit={signUpUser}>
              <Box className='form'>
                <Box className='form-input'><TextField required label='Email' variant='standard' value={email} onChange={handleEmailChange} /></Box>
                <Box className='form-input'><TextField required label='Password' type='password' variant='standard' value={password} onChange={handlePasswordChange} /></Box>
                <Button color='primary' variant='contained' onClick={signUpUser}>Sign Up</Button>
              </Box>
            </form>
            <Box><Link to='/'><Typography variant='caption'>Already have an Account?</Typography></Link></Box>
          </Paper>
        </Box>
    </div>
  )
}

export default Signup