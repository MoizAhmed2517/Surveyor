import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// Material UI Component
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack, Card, CardContent } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

// React Components
import MDTableDataGridComplain from '../../components/tables/MDTableDataGridComplain';


const Complain = () => {
  return (
    <Stack>
      <Box sx={{
        margin: {
            xs: "10px 100px -10px 10px",
            sm: "10px 100px -10px 10px",
            md: '10px 100px 10px 100px'
          }
        }}
      > 
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <Stack direction="row" spacing={2}>
            <Typography variant="h6" sx={{ marginTop: -0.55, color: '#646464'}} >Complain Management </Typography>
            <Tooltip title="Select all mentioned options to create a survey" placement="right">
              <InfoOutlinedIcon sx={{ color: '#646464' }} />
            </Tooltip>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Card sx={{
        margin: {
          xs: "30px 10px 0px 10px",
          sm: "30px 10px 0px 10px",
          md: '10px 100px 0px 100px'
          }
        }}
      >
        <CardContent >
          <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <MDTableDataGridComplain />
              </Grid>   
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default Complain