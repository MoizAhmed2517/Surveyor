import React from 'react'
import { Button } from '@mui/material';

const CustomButtonStyling = (props) => {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <Button 
        variant="contained"
        fullWidth
        sx={{ 
            mx: 3, 
            boxShadow: 'none', 
            width: '70%', 
            backgroundColor: `${isActive ? 'rgb(0, 191, 111)' : '#fff' }`, 
            color: `${isActive ? '#fff' : '#000' }`, 
            '&:hover':{ 
                backgroundColor: `${isActive ? 'rgb(0, 191, 111)' : '#f5f5f5' }`, 
                color: `${isActive ? '#fff' : '#000' }`, 
                } 
            }} 
        onClick={handleClick}>
        {props.title}
    </Button>
  )
}

export default CustomButtonStyling