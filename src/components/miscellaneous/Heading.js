import React from 'react'

// Material UI components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack, Card, CardContent, Divider } from '@mui/material';
import { Grid } from '@mui/material';


const Heading = (props) => {
  return (
    <>
      <Typography variant='h5' sx={{ fontWeight: 500, color: '#49a3f1', mb: 2 }}>{props.title}</Typography>
      <Typography variant='caption' sx={{ color: '#646464', fontSize: 15  }}>{props.text}</Typography>
      <Divider sx={{ mt: 1 }} />
    </>
  )
}

export default Heading