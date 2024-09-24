import { Box, Button, Card, CardActions, CardContent, Paper, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'

const TaskRender = () => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='space-between'
     alignItems='center'
     
     >
      
      <Card sx={{backgroundColor: 'secondary.main',  gap:1, my: 1}}>
        <CardContent>
          <Box 
          display='flex' justifyContent='space-between' 
          alignContent='center' alignitem='center'>
              <Typography
              color='primary.lightBack' variant='h6'
              >Making a cup of coffee for the staffs
              </Typography>
              <CardActions>
                <Button sx={{color:"#ea80fc"}}>Edit</Button>
              </CardActions>
          </Box>
          <Box color='primary.lightBack' ml={2} gap={1}  display='flex'  alignItems='center'>
              <Typography color='green'>
                priority: low
              </Typography>
              <Typography color='yellow'>
                status: in-progress
              </Typography>
          </Box>
       </CardContent>
      </Card>
      <Card sx={{backgroundColor: 'secondary.main', }}>
        <CardContent>
          <Box 
          display='flex' justifyContent='space-between' 
          alignContent='center' alignItems='center'>
              <Typography
              color='primary.lightBack' variant='h6'
              >Making a cup of coffee for the staffs
              </Typography>
              <CardActions>
                <Button sx={{color:"#ea80fc"}}>Edit</Button>
              </CardActions>
          </Box>
          <Box color='primary.lightBack' ml={2} gap={1}  display='flex'  alignItems='center'>
              <Typography color='green'>
                priority: low
              </Typography>
              <Typography color='yellow'>
                status: in-progress
              </Typography>
          </Box>
       </CardContent>
      </Card>
    </Box>
  )
}

export default TaskRender