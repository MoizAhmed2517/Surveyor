import React from 'react'
import TextField from '@mui/material/TextField';

const InputField = (props) => {
  return (
    <TextField id={`outlined-basic-${props.label}`} label={props.label} variant="outlined" fullWidth={props.fullWidth} />
  )
}

export default InputField