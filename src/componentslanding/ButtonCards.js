import { Grid, Button } from '@mui/material'
import React from 'react'

const ButtonCards = () => {
  return (
    <Grid container spacing={2} sx={{ mb: 5, mt: 5, justifyContent: 'center' }}>
        <Grid item xs={12} sm={12} md={4}>
                <Button sx={{ justifyContent: 'center', display: 'flex', width: '100%', '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', border: 'none', textDecoration: 'underline' } }}>Demand generation manager</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
                <Button sx={{ justifyContent: 'center', display: 'flex', width: '100%', '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', border: 'none', textDecoration: 'underline' } }}>Diversity, equity & Inclusion</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
                <Button sx={{ justifyContent: 'center', display: 'flex', width: '100%', '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', border: 'none', textDecoration: 'underline' } }}>Product marketer</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={4} >
                <Button sx={{ justifyContent: 'center', display: 'flex', width: '100%', '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', border: 'none', textDecoration: 'underline' } }}>Brand marketer</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
                <Button sx={{ justifyContent: 'center', display: 'flex', width: '100%', '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', border: 'none', textDecoration: 'underline' } }}>User researcher</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
                <Button sx={{ justifyContent: 'center', display: 'flex', width: '100%', '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', border: 'none', textDecoration: 'underline' } }}>CRM admin</Button>
        </Grid>
    </Grid>
  )
}

export default ButtonCards