import React from 'react'

// Material UI components
import Typography from '@mui/material/Typography';


const Description = (props) => {
  return (
    <Typography variant='subtitle2' sx={{ color: '#646464', }}>
       Description: {props.title}
    </Typography>
  )
}

export default Description