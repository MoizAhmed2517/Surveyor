import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MailLockIcon from '@mui/icons-material/MailLock';

// Material UI components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack, Card, CardContent } from '@mui/material';
import { Grid } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

//  React components
import DropDownMultipleField4 from '../../components/miscellaneous/DropDownMultipleField4';
import ButtonCustom from '../../components/miscellaneous/ButtonCustom';
import InputField from '../../components/miscellaneous/InputField';
import DragDrop from '../../components/miscellaneous/DragDrop';
import MDTableDataGridComplainUser from '../../components/tables/MDTableDataGridComplainUser';
// Random Data

const data = [
  { category: 'Network Problem' },
  { category: 'Customer Service' },
  { category: 'Billing issue' },
  { category: 'Product' },
  { category: 'Contract' },
  { category: 'Quality' },
];


const ComplainUser = () => {

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
              <Grid item xs={12} sm={6} md={6}>
                <Stack direction="row" spacing={2}>
                <Typography variant="h6" sx={{ marginTop: -0.55, color: '#646464'}} >Log Complain</Typography>
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
                  <Grid item xs={12} sm={12} md={12}>
                    <DropDownMultipleField4 data={data} label="Please select your complain category" placeholder="Problem" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={12}>
                    <InputField fullWidth={true} label="Details" multi={true} />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <DragDrop />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <ButtonCustom title="LOG COMPLAIN" iconEnd={<MailLockIcon />} size="large" fullWidth={true} color="#F39223" hoverColor="#ff8905" linkComponent={Link} address="/survey-user"/>
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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} sx={{ my: { xs: 2, md: 0}, marginTop: { md: 2 }}}>
                <Stack direction="row" spacing={2}>
                <Typography variant="h6" sx={{ marginTop: -0.55, color: '#646464'}} >Previous Complain Log</Typography>
                <Tooltip title="Visit the progress on previous complain" placement="right">
                  <InfoOutlinedIcon sx={{ color: '#646464' }} />
                </Tooltip>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Card sx={{
              margin: {
                  xs: "10px 10px -10px 10px",
                  sm: "10px 100px -10px 10px",
                  md: '10px 100px 10px 100px'
                }
              }}
          >
          <CardContent >
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                      <MDTableDataGridComplainUser />
                  </Grid>   
              </Grid>
              </CardContent>
          </Card>

      </Stack>
    </Box>
  )
}

export default ComplainUser