import React, { useState } from 'react';
import { Paper, Typography, TextField, Box , Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import analytics from '../config/firebase-config';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseSignup } from '../auth/signup';
import { useAuth } from '../contexts/AuthContext';
import User from './User';
import ErrorMessage from './ErrorMessage';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const signUpUser = async (e) => {
      // firebaseSignup(email, password);
      e.preventDefault();
      setError('');

      try {
        setLoading(true);
        await signup(email, password);
        navigate('/user')
      } catch (err) {
        setError(err.message)
      }

      setLoading(false);
    };

    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     const uid = user.uid;
    //     setUserID(uid);
    //     // ...
    //   } else {
    //     // User is signed out
    //     // ...
    //   }
    // });
    

    // console.log(userID);

  return (
      <div className="App">
        <Box>
          <Paper elevation={3} className='sign-in-container' sx={{width: '500px', height: '300px', padding: '1em'}}>
            <Typography variant='h4'>Create an Account</Typography>
            {error && <ErrorMessage message={error} />}
            <form action="" onSubmit={signUpUser}>
              <Box className='form'>
                <Box className='form-input'><TextField required label='Email' variant='standard' value={email} onChange={handleEmailChange} /></Box>
                <Box className='form-input'><TextField required label='Password' type='password' variant='standard' value={password} onChange={handlePasswordChange} /></Box>
                <Button disabled={loading} color='primary' variant='contained' onClick={signUpUser}>Sign Up</Button>
              </Box>
            </form>
            <Box><Link to='/'><Typography variant='caption'>Already have an Account?</Typography></Link></Box>
          </Paper>
        </Box>
    </div>
  )
}

export default Signup