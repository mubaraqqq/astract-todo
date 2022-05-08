import React, { useState } from 'react';
import { Alert, AlertTitle, Collapse } from '@mui/material';

const ErrorMessage = ({ message }) => {
    const [open, setOpen] = useState(true);

  return (
    <Collapse in={open}>
        <Alert onClose={() => setOpen(false)} severity='error'>
            <AlertTitle>Error!</AlertTitle>
            {message}
        </Alert>
    </Collapse>
  )
}

export default ErrorMessage