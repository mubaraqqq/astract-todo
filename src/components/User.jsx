import React from 'react';
import { Button, Grid, Typography, Stack } from '@mui/material';
import { Link, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Todos from './Todos';

const User = () => {

  return (
    <Grid container>
      <Grid item xs={3}>
        <Stack direction='column' spacing={2}>
          <Link to='/user/profile'>Profile</Link>
          <Link to='/user/todos'>Todos</Link>
        </Stack>
      </Grid>
      <Grid item xs={9}>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/todos' element={<Todos />} />
        </Routes>
      </Grid>
    </Grid>
  )
}

export default User