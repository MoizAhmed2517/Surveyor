import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';


const InputField = (props) => {
  const variant = props.variant === true ? 'standard' : 'outlined';
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id={`outlined-basic-${props.label}`} label={props.label} variant={variant} fullWidth={props.fullWidth} placeholder={props.placeholder} multiline={props.multi} />
    </Box>
    
  )
}

export default InputField