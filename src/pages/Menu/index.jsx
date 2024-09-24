import { Box, TextField, Typography, Button, Checkbox, Card, 
  FormControl, InputLabel, Select,
   MenuItem, 
   Popover} from '@mui/material'
import { red } from '@mui/material/colors'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../FireAuth/fireAuth'
import { UserContext } from '../../Context/UserContext'
import { useSelector, useDispatch } from 'react-redux'
import TaskList from '../../components/TaskList'
import EditTask from '../../components/EditTask'
import CreateTask from '../../components/NewTask'



const MenuList = () => {
  const navigate = useNavigate()
  const { taskName } = useSelector((state) => state.taskName)
  
  const dispatch = useDispatch()
 
  const [priority, setPriority] = useState('')

  

 const handleChange =(event) => {
  setPriority(event.target.value)
 }

//  const filterPriority = (checked, id) => {
//   checked?setTasks(tasks.filter(task => task._id !== id)): tasks
//  }

 //OPEN NEW TASK
 const [open, setOpen] = useState(false)
 

 const handleOpen = () => {
   setOpen(!open)
 }

 //POPOUT COMPONENT
 const [anchorEl, setAnchorEl] = useState(null)
 const handleClick = (event) => {
   {
     setAnchorEl(event.currentTarget)
   }
 }


 
 const handleClose = () => {
   setAnchorEl(null)
 }

 const openTab = Boolean(anchorEl)
 const id = openTab? 'simple-popover': undefined

  
  return (
    <Box 
    width= {400}
    display="flex"
    gap={1.5}
    p={4}
    sx={{ backgroundColor: 'primary.lightBack', color: 'primary.main'}}
    flexDirection="column"
    justifyContent="start"
    >
      <Box display= 'flex' justifyContent='space-between' alignItems='center' textAlign='center'>
        <Typography>Task Priority</Typography>
        <FormControl sx={{width: 100}}>
          <InputLabel id="Priority">Priority</InputLabel>
          <Select
            labelId='Priority'
            id='demo-simple-select'
            value={priority}
            label="Priority"
            onChange={handleChange}
          >
            <MenuItem value={'high'}>High</MenuItem>
            <MenuItem value={'medium'}>Medium</MenuItem>
            <MenuItem value={'low'}>Low</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box display='flex' justifyContent='space-between'>
        <Typography variant='h6' fontWeight='bold'>
          Be gentle with yourself</Typography>
          <Button aria-describedby={id}  
          onClick={handleClick}>Create new</Button>
          
    <Popover
             id={id}
             open={openTab}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
       ><CreateTask /></Popover>
      </Box>
      
      {
        priority?taskName?.filter(item => item.priority === priority)
        .map(task => (
          <div key={task._id}>
          <TaskList key={task._id} taskItem={task} />
          
          </div>
        ))
      : taskName?.map(task => (
        <div key={task._id}>
          <TaskList   taskItem={task} />
          
        </div>
      ))}
      
    </Box>
  )
}

export default MenuList