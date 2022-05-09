import React, { useState, useEffect } from 'react';
import { TextField, Box, FormLabel, Button, Stack } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../config/firebase-config'

const Todos = () => {
  const [category, setCategory] = useState('');
  const [todo, setTodo] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [todoArray, setTodoArray] = useState([]);

  const { currentUser, addToDoc, getTheDocs } = useAuth();

  useEffect(() => {
    if (currentUser) {
        const q = query(collection(db, currentUser.uid));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const todos = [];
            querySnapshot.forEach((doc) => {
                todos.push(doc.data());
            });
            setTodoArray(todos);
        }); 
    }
  }, [])

  console.log(todoArray)
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          setLoading(true);
          const docRef = await addToDoc(currentUser.uid, {'category': category, 'todoItem': todo})
      } catch (err) {
          console.log(err)
      }
      setLoading(false);
      setTodo('');
      setCategory('');
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
            <Button disabled={loading} onClick={handleSubmit} variant='contained'>Add Todo</Button>
        </form>
    </Box>
  )
}

export default Todos