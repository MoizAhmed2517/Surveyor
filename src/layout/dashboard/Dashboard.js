import React from 'react'
import MDCardKPI from '../../components/card/MDCardKPI'

// Material UI Icon
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import WaterfallChartOutlinedIcon from '@mui/icons-material/WaterfallChartOutlined';

// Material UI Component
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Drawer, Stack, Box } from '@mui/material';
import MDBarChart from '../../components/barchart/MDBarChart';
import MDPieChart from '../../components/piechart/MDPieChart';
import MDStackedColLine from '../../components/dualaxischart/MDStackedColLine';
import MDTableDataGridDashboard from '../../components/tables/MDTableDataGridDashboard';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Dashboard = () => {
  return (

    <Box sx={{ flexGrow: 0, p: 0.5, marginLeft: {xs: 7, sm: 8,  md: 9}, marginTop: -3 }}>
          {/* <DrawerHeader /> */}
      <Stack sx={{ mb: 3 }}>

      <Grid container spacing={0.5}>
        <Grid item xs={12} sm={6} md={3}>
          <MDCardKPI icon={<AssessmentOutlinedIcon sx={{fontSize: '60px'}} />} message="Number of Survey" count="281" percentage="20.1" tag="Since last day" arrowSign="0"/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MDCardKPI icon={<TrendingUpIcon sx={{fontSize: '60px'}} />} message="Number of Feedback" count="52" percentage="25" tag="Since last month" arrowSign="1" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MDCardKPI icon={<DataSaverOnOutlinedIcon sx={{fontSize: '60px'}} />} message="Number of Complains" count="87" percentage="2" tag="Since last month" arrowSign="0" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MDCardKPI icon={<WaterfallChartOutlinedIcon sx={{fontSize: '60px'}} />} message="Survey Reponse Rate" count="42%" percentage="25" tag="Since last day" arrowSign="1" />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={12} md={8}>
          <MDBarChart descr="Loreum ipsum discontinue etc" />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <MDPieChart descr="Loreum ipsum discontinue etc" />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} >
          <Box sx={{ 
              margin: {
                xs: "1px 10px 0px 10px",
                sm: "1px 10px 0px 10px",
                md: '1px 10px 0px 10px'
              }
           }}>
            <MDTableDataGridDashboard />
          </Box>
        </Grid>
      </Grid>

    </Stack>

    </Box>

    
  )
}

export default Dashboard