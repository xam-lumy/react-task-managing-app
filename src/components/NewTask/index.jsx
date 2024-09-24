import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNewTask } from '../../Redux/task/taskSlice'

const CreateTask = () => {

  const [currentText, setCurrentText] = useState('')
  const [newPriority, setNewPriority] = useState('')
  const [newStatus, setNewStatus] = useState('')
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.userData)
 
    
  const handleChangeText = (event) => {
      setCurrentText(event.target.value)
    }


    const handleSubmit = () => {
      const newTasks = {
        task: currentText, status: !newStatus? 'pending': newStatus, priority: !newPriority? 'medium': newPriority, tokenAccess: user?.accessToken
      }
      
      dispatch(createNewTask(newTasks))

    }

  return (
    <Box width='65vh'>
      <form
       style={{ display: 'flex', flexDirection: 'column', marginTop: 6 }}
       onSubmit={handleSubmit}
       >
        <TextField
          type='text'
          label='New Task'
          multiline
          minRows={2}
          value={currentText}
          focused
          variant='filled'
          onChange={handleChangeText}
        />
        
          <FormControl>
            <InputLabel>Select Priority</InputLabel>
            <Select
              labelId='Priority'
              id='demo-simple-select'
              value={newPriority}
              label="Priority"
              onChange={(event) => setNewPriority(event.target.value)}
            >
              <MenuItem value='high'>High</MenuItem>
              <MenuItem value='medium'>Medium</MenuItem>
              <MenuItem value='low'>Low</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Select Status</InputLabel>
            <Select
                labelId='Priority'
                id='demo-simple-select'
                value={newStatus}
                label="Priority"
                onChange={(event) => setNewStatus(event.target.value)}              
            >
              <MenuItem  value='pending'>Pending</MenuItem>
              <MenuItem  value='in-progress'>In-Progress</MenuItem>
              
            </Select>
          </FormControl>
          <Button type='submit'>Add</Button>
      </form>
    </Box>
  )
}

export default CreateTask