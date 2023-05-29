import React from 'react'
import MDCardKPI from '../../components/card/MDCardKPI'

// Material UI Icon
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import WaterfallChartOutlinedIcon from '@mui/icons-material/WaterfallChartOutlined';

// Material UI Component
import Grid from '@mui/material/Grid';

const Dashboard = () => {
  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12} sm={6} md={3}>
        <MDCardKPI icon={<AssessmentOutlinedIcon sx={{fontSize: '60px'}} />} message="Total Survey Created" count="281" percentage="20.1" tag="Since last day" arrowSign="0"/>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MDCardKPI icon={<TrendingUpIcon sx={{fontSize: '60px'}} />} message="Average Response Rate" count="52%" percentage="25" tag="Since last month" arrowSign="1" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MDCardKPI icon={<DataSaverOnOutlinedIcon sx={{fontSize: '60px'}} />} message="Net Promoter Score (NPS)" count="87" percentage="2" tag="Since last month" arrowSign="0" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MDCardKPI icon={<WaterfallChartOutlinedIcon sx={{fontSize: '60px'}} />} message="Open-ended Responses" count="42" percentage="25" tag="Since last day" arrowSign="1" />
      </Grid>
    </Grid>
  )
}

export default Dashboard