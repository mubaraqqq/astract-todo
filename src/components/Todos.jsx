import React, { useState } from 'react';
import { TextField, Box, FormLabel, Button, Stack } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const Todos = () => {
  const [category, setCategory] = useState('');
  const [todo, setTodo] = useState(''); 
  
  const [todoArray, setTodoArray] = useState([]);

  const { currentUser, addToDoc } = useAuth();

  
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const docRef = await addToDoc(currentUser.uid, {'category': category, 'todoItem': todo})
      } catch (err) {
          console.log(err)
      }
  }  

  return (
    <Box>
        <form action="" className='form' onSubmit={handleSubmit}>
            <Box sx={{margin: '1em 0 2em 0'}}>
                <FormLabel sx={{padding: '0 1em 0 0'}}>Category:</FormLabel>
                <TextField value={category} onChange={(e) => setCategory(e.target.value)} className='category-input' />
            </Box>
            <Box sx={{margin: '1em 0 2em 0'}}>
                <FormLabel sx={{padding: '0 1em 0 0'}}>Todo Item:</FormLabel>
                <TextField value={todo} onChange={(e) => setTodo(e.target.value)} className='todo-input' />
            </Box>
            <Button onClick={handleSubmit} variant='contained'>Add Todo</Button>
        </form>
    </Box>
  )
}

export default Todos