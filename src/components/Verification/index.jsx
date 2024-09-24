import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Verification = () => {
    
  return (
    <Box color='primary.main'>
        <Typography>A verification has been sent to your email, click on the link to activate your account</Typography>
        <Link to='/login'><Typography>Then proceed to login</Typography></Link>
    </Box>
  )
}

export default Verification