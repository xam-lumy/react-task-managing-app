import { Box, Typography } from '@mui/material'
import React from 'react'

const ClockComponent = () => {
  return (
    <Box  height="85vh"
     width= {600} my={4} display="flex" justifyContent="space-between" flexDirection="column" gap={2}>
        <Typography component="h2">PLAN-A</Typography>
        <Box gap={4} display="flex" flexDirection="column" justifyContent="center"  alignItems="center">
          <Box alignItems="center" alignItem="center"> 
            <Typography variant='h5' color="primary.lightBack">Save stress,</Typography>
            <Typography  variant='h5' color="primary.lightBack">manage your time,</Typography>
            <Typography  variant='h5' color="primary.lightBack">Stay ahead,</Typography>
          </Box>
            <Box>  <img src="/clocks.png" width="350px" /></Box>
        </Box>
       
            
        
    </Box>
  )
}

export default ClockComponent