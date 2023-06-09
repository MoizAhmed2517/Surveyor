import React from 'react'

// MUI components
import { Box, Grid, IconButton, Stack, Tooltip, Typography, Card, CardContent } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 18,
  height: 18,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 18,
    height: 18,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const MultipleChoice = (props) => {
  return (
    
        <Grid container >

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: 18 }}>{props.question}</Typography>
          </Grid>

          <Grid item xs={12} sx={{ ml: 2.5, mt: 1 }}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-customized-radios"
                name="customized-radios"
              >
                {
                  props.option.map(((item, index) => {
                    return(
                      <FormControlLabel value={item.value} control={<Radio />} label={item.label} key={index} sx={{
                        '&:hover': {
                            border: '1px dotted black',
                            paddingRight: '150px'
                        } 
                      }} 
                    />
                    )
                  }))
                }
              </RadioGroup>
            </FormControl>
          </Grid>

        </Grid>
  )
}

export default MultipleChoice