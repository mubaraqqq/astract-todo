import { useState } from 'react';
import './App.css';
import { Paper, Typography, TextField, Box , Button } from '@mui/material';
import { Link } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className="App">
        <Box>
          <Paper elevation={3} className='sign-in-container' sx={{width: '50vw', height: '250px', padding: '1em'}}>
            <Typography variant='h4'>Sign In</Typography>
            <form action="">
              <Box className='form'>
                <Box className='form-input'><TextField label='Email' variant='standard' value={email} onChange={handleEmailChange} /></Box>
                <Box className='form-input'><TextField label='Password' type='password' variant='standard' value={password} onChange={handlePasswordChange} /></Box>
                <Button color='primary' variant='contained'>Submit</Button>
              </Box>
            </form>
            <Box><Link to='/signup'><Typography variant='caption'>Create an Account</Typography></Link></Box>
          </Paper>
        </Box>
    </div>
  );
}

export default App;
