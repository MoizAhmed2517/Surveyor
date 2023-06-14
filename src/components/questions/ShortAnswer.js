import React from 'react'

// MUI components
import { Box, Grid, IconButton, Stack, Tooltip, Typography, Card, CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';

const ShortAnswer = (props) => {
  const variant = props.variant === true ? 'standard' : 'outlined';
  return (
        <Grid container spacing={.5}>

          <Grid item xs={12}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 500, 
                fontSize: 18, 
                borderBottom: '#fff',
                '&:hover' : {  
                  borderColor: 'transparent',
                }, 
                  '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                      borderColor: 'transparent', // Change the border color when focused
                  },
                },
              }}
          >
            {props.question}
          </Typography>
          </Grid>

          <Grid item xs={12} sx={{ mt: 3}}>
            <TextField id={`outlined-basic-${props.label}`} label={props.label} variant={variant} fullWidth={props.fullWidth} placeholder={props.placeholder} />
          </Grid>
        </Grid>
  )
}

export default ShortAnswer