import React, { useState, useEffect } from 'react';
import { TextField, Box, FormLabel, Button, Stack, Card, Typography, Grid } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../config/firebase-config';

const Todos = () => {
  const [category, setCategory] = useState('');
  const [todo, setTodo] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [todoArray, setTodoArray] = useState([]);

  const sortedArray = todoArray.sort((a, b) => a.timestamp - b.timestamp);
  const sorted = Array.from(new Set(todoArray.sort((a, b) => a.timestamp - b.timestamp).map(todo => todo.category)))

  const { currentUser, addToDoc } = useAuth();

  useEffect(() => {
    if (currentUser) {
        const q = query(collection(db, 'todos', currentUser.uid, 'todo'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const todos = [];
            querySnapshot.forEach((doc) => {
                todos.push(doc.data());
            });
            setTodoArray(todos);
        }); 
    }
  }, [])
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          setLoading(true);
          const docRef = await addToDoc(currentUser.uid, {'email': currentUser.email, 'category': category, 'todoItem': todo, timestamp: Date.now()})
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
        <Box>
            <Typography variant='h4'>Todos</Typography>
            <Grid container spacing={2}>
                {
                    sorted?.map(category => (
                        <Grid item xs={6} key={category}>
                            <Card>
                                <Typography variant='h6'>Category: {category}</Typography>
                                {
                                    sortedArray.filter((el) => el.category.toLowerCase() === category.toLowerCase()).map(el => (
                                        <Box key={el.timestamp}>
                                            <Typography variant='body1'>{el.todoItem}</Typography>
                                        </Box>
                                    ))
                                }
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    </Box>
  )
}

export default Todos