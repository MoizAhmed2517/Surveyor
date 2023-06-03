import React from 'react'

// Material UI components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack, Card, CardContent } from '@mui/material';
import { Grid } from '@mui/material';


const Heading = (props) => {
  return (
    <Typography variant='h4' sx={{ textAlign: 'center', color: '#646464', }}>{props.title}</Typography>
  )
}

export default Heading