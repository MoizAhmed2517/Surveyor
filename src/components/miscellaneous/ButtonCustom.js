import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import Stack from '@mui/material/Stack';

const ButtonCustom = (props) => {
  return (
    <Button variant="contained" component={props.linkComponent} to={props.address} size={props.size} endIcon={props.iconEnd} fullWidth={props.fullWidth} sx={{ backgroundColor: props.color, '&:hover': { backgroundColor: props.hoverColor } }}>
        {props.title}
    </Button>
  )
}

export default ButtonCustom