import React from 'react';

// Icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// Material UI components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
//  React components
import MDTableDataGrid from '../../components/tables/MDTableDataGrid';

const NewSurvey = () => {
  return (
    
    <Stack >

      {/* <Grid container spacing={2}>
        <Grid item xs={12}>
          <Searchbar />
        </Grid>
      </Grid> */}

      <Box sx={{
            margin: {
                xs: "10px 100px 0px 60px",
                sm: "10px 100px 0px 60px",
                md: '10px 100px 0px 100px'
            }
        }}
      > 
        <Grid container>
          <Grid item xs={6} sm={6} md={6}>
            <Stack direction="row" spacing={2}>
            <Typography variant="h6" sx={{ marginTop: -0.55, color: '#646464'}} >Create New Survey </Typography>
            <Tooltip title="Check the boxes to make the survey" placement="right">
              <InfoOutlinedIcon sx={{ color: '#646464' }} />
            </Tooltip>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{
            margin: {
                xs: "30px 10px 0px 10px",
                sm: "30px 10px 0px 10px",
                md: '10px 100px 0px 100px'
            }
        }}
      >
        <Grid container>
            <Grid item xs={8} sm={8} md={8}>
              <MDTableDataGrid />
            </Grid>
        </Grid>
      </Box>

    </Stack>
  )
}

export default NewSurvey