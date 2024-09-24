import { Grid } from '@mui/material'
import React from 'react'
import Reminder from '../../components/Reminder'
import TaskRender from '../../components/TaskRender.jsx'

const TaskPage = () => {
  return (
    <Grid
      container
      component="main"
    >
        <Grid xs={12} sm={12} md={6} lg={3}>
          <Reminder />
        </Grid> 
        <Grid my= {5} xs={12} sm={12} md={6} lg={9}>
          <TaskRender />
        </Grid>
    </Grid>
  )
}

export default TaskPage