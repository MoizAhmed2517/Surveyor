import React from 'react'
import TextField from '@mui/material/TextField';

const InputField = (props) => {
  const variant = props.variant === true ? 'standard' : 'outlined';
  return (
    <TextField id={`outlined-basic-${props.label}`} label={props.label} variant={variant} fullWidth={props.fullWidth} placeholder={props.placeholder} multiline={props.multi} />
  )
}

export default InputField