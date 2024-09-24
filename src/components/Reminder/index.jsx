import { Box, Typography } from '@mui/material'
import React from 'react'

const Reminder = () => {
  return (
    <Box height='100vh' alignContent='center' alignItems='center'>
        <Typography variant='h4'>Reminder:</Typography>
        <Typography textAlign='left' variant='h5'>You have 2 urgent task to be completed, click here to get started</Typography>
        
    </Box>
  )
}

export default Reminder