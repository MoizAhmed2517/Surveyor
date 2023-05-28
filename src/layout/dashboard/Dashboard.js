import React from 'react'
import MDCardKPI from '../../components/card/MDCardKPI'
import Grid from '@mui/material/Grid';

const Dashboard = () => {
  return (
    <Grid container spacing={0.5}>
      <Grid item xs={1} md={3}>
        <MDCardKPI />
      </Grid>
      <Grid item xs={1} md={3}>
        <MDCardKPI />
      </Grid>
      <Grid item xs={1} md={3}>
        <MDCardKPI />
      </Grid>
      <Grid item xs={1} md={3}>
        <MDCardKPI />
      </Grid>
    </Grid>
  )
}

export default Dashboard