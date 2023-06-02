import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ConfirmProvider } from "material-ui-confirm";

// Material UI Icon
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

// Material UI components
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material';

// React components
import Searchbar from '../../components/searchbar/Searchbar'
import MDStickyheaderSimpleTable from '../../components/tables/MDStickyheaderSimpleTable';

const Questionnair = () => {
  return (
    <Stack >

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Searchbar />
        </Grid>
      </Grid>

      <Box sx={{
            margin: {
                xs: "30px 100px 0px 60px",
                sm: "30px 100px 0px 60px",
                md: '30px 100px 0px 100px'
            }
        }}
      > 
        <Grid container>
          <Grid item xs={11} sm={10} md={10}>
            <Typography variant="h6" sx={{ color: '#646464' }}>Questionnaire</Typography>
          </Grid>
          <Grid 
            item 
            xs={1}
            sm={2}
            md={2} 
            mt={-0.4} 
            sx={{
              paddingLeft: {
                xs: 1.8, 
                sm: 12.6, 
                md: 19.2, 
              },
            }}
          >
            <Tooltip title="Add new question" placement="top">
              <IconButton >
                <AddBoxOutlinedIcon sx={{ color: '#F39223' }} />
              </IconButton>
            </Tooltip>
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
            <Grid item xs={12} md={12}>
              <ConfirmProvider >
                <MDStickyheaderSimpleTable />
              </ConfirmProvider>
            </Grid>
        </Grid>
      </Box>

    </Stack>
  )
}

export default Questionnair