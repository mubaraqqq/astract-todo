import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { currentUser } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const logOutUser = async () => {
      try {
          setLoading(true);
          await logout();
          navigate('/');
      } catch (err) {
        setError(err.message)
      }
      setLoading(false);
    }

  return (
    <Box>
        <Typography variant='body1'>{currentUser.email}</Typography>
        <Button disabled={loading} onClick={logOutUser} variant="contained">Log Out</Button>
    </Box>
  )
}

export default Dashboard