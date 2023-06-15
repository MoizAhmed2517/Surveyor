import React from 'react';
import { useLocation } from 'react-router-dom';

// Icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// Material UI Component
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack, Card, CardContent } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

// React Components
import MDTableDataGridResponse from '../../components/tables/MDTableDataGridResponse';

const FormResponse = (props) => {
  const locationExist = useLocation();
  const descr = locationExist.state?.descr;
  return (
    <Box sx={{ flexGrow: 0, p: 0.5, marginLeft: 8, marginTop: -3 }}>
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
            <Grid item xs={12} sm={12} md={12}>
              <Stack direction="row" spacing={2}>
              <Typography variant="h6" sx={{ marginTop: -0.55, color: '#646464'}} >{`Response - ${descr} `}</Typography>
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
                  <MDTableDataGridResponse />
                </Grid>   
            </Grid>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  )
}

export default FormResponse