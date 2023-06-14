import React from 'react'

// MUI components
import { Box, Grid, IconButton, Stack, Tooltip, Typography, Card, CardContent } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const QuestionCheckBox = (props) => {
  return (
        <Grid container >

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: 18 }}>{props.question}</Typography>
          </Grid>

          <Grid item xs={12} sx={{ ml: 2.5, mt: 1 }}>
            <FormGroup>
                {
                props.option.map(((item, index) => {
                    return(
                    <FormControlLabel control={<Checkbox />} label={item.label} key={index} sx={{ 
                      '&:hover': {
                          border: '1px dotted black',
                          paddingRight: '15px'
                        } 
                      }} 
                    />
                    )
                }))
                }
            </FormGroup>
          </Grid>

        </Grid>
  )
}

export default QuestionCheckBox