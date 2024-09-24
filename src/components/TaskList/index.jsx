import { Box, Button, Card, Checkbox, Popover, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EditTask from '../EditTask'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, getTasks } from '../../Redux/task/taskSlice'


const TaskList = ({ taskItem,  }) => {
  const {checked} = useSelector((state) => state.taskName)
 
  const [open, setOpen] = useState(false)
 const dispatch = useDispatch()

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
  const id = openTab ? 'simple-popover' : undefined

  //update task
  

  //FILTER COMPLETED TASK

    
 
  
  const handleChange = (event) => {
    const { name, checked } = event.target
    if(checked) {
      dispatch(deleteTask(name))
    }
  }
  
    
 
 
  //UPDATE TASK




  return (

    <Card sx={{ backgroundColor: 'primary.main', color: 'primary.lightBack', }}>
      <Box paddingLeft={3} display='flex' justifyContent='space-between' alignItems='center'>
        <Typography p={1} variant='body1' fontWeight='light'>
          {taskItem.task}
        </Typography>

        <Checkbox  checked={checked} onChange={handleChange} color="error"  name={taskItem._id}/>
      </Box>
      <Typography sx={{ paddingLeft: 5 }}>
        Status: {taskItem.status}
      </Typography>

      <Button aria-describedby={id}

        onClick={handleClick} sx={{ color: 'peru', paddingLeft: 45 }}>Edit
      </Button>
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
      ><EditTask taskItem={taskItem} />
      </Popover>


    </Card>


  )
}

export default TaskList