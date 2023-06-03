import React from 'react'

// MUI components
import { Box, Grid, IconButton, Stack, Tooltip, Typography, Card, CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';

const Paragraph = (props) => {
  const variant = props.variant === true ? 'standard' : 'outlined';
  return (
    <Card sx={{
      borderRadius: '0.5rem', 
      boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)',
      mb: 2,
      }}
    >
      <CardContent>
        <Grid container spacing={.5}>

          <Grid item xs={12}>
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>{props.question}</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField id={`outlined-basic-${props.label}`} label={props.label} variant={variant} fullWidth={props.fullWidth} placeholder={props.placeholder} multiline />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Paragraph