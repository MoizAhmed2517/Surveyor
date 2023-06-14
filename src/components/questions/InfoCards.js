import React from 'react'

// MUI components
import { Box, Grid, IconButton, Stack, Tooltip, Typography, Card, CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';

// Components
import Heading from '../miscellaneous/Heading';
import Description from '../miscellaneous/Description';
import InputField from '../miscellaneous/InputField';

const InfoCards = (props) => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
            <Heading title={props.descr} text={props.text} />
        </Grid>
        {/* <Grid item xs={12} sm={12} md={12}>
            <Description title={props.text} />
        </Grid> */}
        {/* <Grid item xs={12} sm={6} md={6}>
            <InputField fullWidth={true} label="Full Name" variant={true} placeholder="John" />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <InputField fullWidth={true} label="Email Address" variant={true} placeholder="xyz@gmail.com" />
        </Grid> */}
    </Grid>
  )
}

export default InfoCards