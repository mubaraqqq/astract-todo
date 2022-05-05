import React from 'react';
import { Paper, Typography, TextField, Box , Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="App">
        <Box>
          <Paper elevation={3} className='sign-in-container' sx={{width: '500px', height: '250px', padding: '1em'}}>
            <Typography variant='h4'>Sign In</Typography>
            <form action="">
              <Box className='form'>
                <Box className='form-input'><TextField label='Email' variant='standard' value={email} onChange={handleEmailChange} /></Box>
                <Box className='form-input'><TextField label='Password' type='password' variant='standard' value={password} onChange={handlePasswordChange} /></Box>
                <Button color='primary' variant='contained'>Submit</Button>
              </Box>
            </form>
            <Box><Link to='/'><Typography variant='caption'>Already have an Account?</Typography></Link></Box>
          </Paper>
        </Box>
    </div>
  )
}

export default Signup