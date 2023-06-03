import React from 'react'

// MUI components
import { Box, Grid, IconButton, Stack, Tooltip, Typography, Card, CardContent } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const QuestionCheckBox = (props) => {
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
            <FormGroup>
                {
                props.option.map(((item, index) => {
                    return(
                    <FormControlLabel control={<Checkbox />} label={item.label} key={index} />
                    )
                }))
                }
            </FormGroup>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  )
}

export default QuestionCheckBox