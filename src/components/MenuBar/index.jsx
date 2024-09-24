import { Card, CardContent, Typography, Box } from '@mui/material'
import React from 'react'

const MenuBar = () => {
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
            <Typography variant='h5' fontWeight='bold'>One step at a time. </Typography>
            <Typography variant='h5' fontWeight='bold'>You'll get there</Typography>
            <Typography>This is how far you have gone</Typography>
            <Typography>50%</Typography>
   </Box>
  )
}

export default MenuBar