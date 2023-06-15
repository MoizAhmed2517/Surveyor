import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

// Material UI components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack, Card, CardContent } from '@mui/material';
import { Grid } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

//  React components
import ButtonCustom from '../../components/miscellaneous/ButtonCustom';
import InputField from '../../components/miscellaneous/InputField';
import MDTableDataGridCustomer from '../../components/tables/MDTableDataGridCustomer';
// Random Data

const data = [
  { category: 'Network Problem' },
  { category: 'Customer Service' },
  { category: 'Billing issue' },
  { category: 'Product' },
  { category: 'Contract' },
  { category: 'Quality' },
];

const Customer = () => {
  return (
    <Box sx={{ flexGrow: 0, p: 0.5, marginLeft: 9, marginTop: -3 }}>
      <Stack >
    
          <Box sx={{
                margin: {
                    xs: "10px 100px -10px 10px",
                    sm: "10px 100px -10px 10px",
                    md: '10px 100px 10px 100px'
                }
            }}
          > 
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                <Stack direction="row" spacing={2}>
                <Typography variant="h6" sx={{ marginTop: -0.55, color: '#646464'}} >Add User</Typography>
                <Tooltip title="Log your complain in this section" placement="right">
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
                  <Grid item xs={12} sm={16} md={4}>
                    <InputField fullWidth={true} label="Full Name" display="none" />
                  </Grid>
                  <Grid item xs={12} sm={16} md={4}>
                    <InputField fullWidth={true} label="Email" display="none" />
                  </Grid>
                  <Grid item xs={12} sm={16} md={4} sx={{ marginTop: 0.9 }}>
                    <ButtonCustom title="SAVE" iconEnd={<SaveOutlinedIcon />} size="large" fullWidth={true} color="#F39223" hoverColor="#ff8905"/>
                  </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Box sx={{
                margin: {
                    xs: "10px 100px -10px 10px",
                    sm: "10px 100px -10px 10px",
                    md: '20px 100px 10px 100px'
                }
            }}
          > 
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                <Stack direction="row" spacing={2}>
                <Typography variant="h6" sx={{ marginTop: -0.55, color: '#646464'}} >Customer Base</Typography>
                <Tooltip title="Visit the progress on previous complain" placement="right">
                  <InfoOutlinedIcon sx={{ color: '#646464' }} />
                </Tooltip>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Card sx={{
              margin: {
                  xs: "10px 100px -10px 10px",
                  sm: "10px 100px -10px 10px",
                  md: '10px 100px 10px 100px'
                }
              }}
          >
          <CardContent >
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                      <MDTableDataGridCustomer />
                  </Grid>   
              </Grid>
              </CardContent>
          </Card>

      </Stack>
    </Box>
  )
}

export default Customer