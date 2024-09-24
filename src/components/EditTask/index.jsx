import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updatesTask } from '../../Redux/task/taskSlice'

const EditTask = ({ taskItem  }) => {
  
 const dispatch = useDispatch()
  
  const [currentText, setCurrentText] = useState(taskItem.task)
  const [newPriority, setNewPriority] = useState(taskItem.priority)
  const [newStatus, setNewStatus] = useState(taskItem.status)


    const handleChangeText = (event) => {
      setCurrentText(event.target.value)
    }


  const handleUpdate = () => {
    const updateTaskItem = {
      ...taskItem,  task: currentText, status: newStatus, priority: newPriority
    
    }
    dispatch(updatesTask(updateTaskItem))
     
 }




  

  return (
    <Box width='65vh'>
      <form
      onSubmit={handleUpdate}
      style={{ display: 'flex', flexDirection: 'column', marginTop: 6 }}>
        <TextField
          type='text'
          label='Edit Task'
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

export default EditTask