import React from 'react'
import { Link } from 'react-router-dom';
import { ConfirmProvider } from "material-ui-confirm";

// Material UI Icon
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

// MUI components
import { Box, Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material'

// React components
import Searchbar from '../../components/searchbar/Searchbar'
import PageNumber from '../../components/pagination/PageNumber';
import SurveyCardUser from '../../components/card/SurveyCardUser';

function createData(title, date, descr, status) {
  return {title, date, descr, status};
}

const dummyData = [
  createData('New Survey Form - A', "13 March, 2023", "20 character description will be added here. Loreum Ipsum ...", "filled"),
  createData('New Survey Form - C', "13 March, 2023", "20 character description will be added here. Loreum Ipsum ...", "filled"),
  createData('New Survey Form - B', "13 March, 2023", "20 character description will be added here. Loreum Ipsum ...", "Not filled"),
  createData('New Survey Form - D', "13 March, 2023", "20 character description will be added here. Loreum Ipsum ...", "Not filled"),
  createData('New Survey Form - E', "13 March, 2023", "20 character description will be added here. Loreum Ipsum ...", "filled"),
  createData('New Survey Form - F', "13 March, 2023", "20 character description will be added here. Loreum Ipsum ...", "Not filled"),
  createData('New Survey Form - G', "13 March, 2023", "20 character description will be added here. Loreum Ipsum ...", "Not filled"),
]

const SurveyUser = () => {
  return (
    <Box sx={{ flexGrow: 0, p: 0.5, marginLeft: 9, marginTop: -3 }}>
      <Stack >

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Searchbar />
          </Grid>
        </Grid>

        <Box margin="30px 100px 0px 100px"> 
          <Grid container>
            <Grid item xs={6} sm={12} md={10}>
              <Typography variant="h6" sx={{ color: '#646464' }}>Assigned Survey</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box margin="20px 100px 10px 100px">
          <Grid container spacing={2} justifyContent="left">
            {
              dummyData.map((data, index) => (
                <Grid item xs={12} sm={6} md={3} key={index} >
                  <ConfirmProvider>
                    <SurveyCardUser title={data.title} date={data.date} descr={data.descr} LinkComponent={Link} address="/view-response-user" status={data.status} />
                  </ConfirmProvider>
                </Grid>
              ))
            }
          </Grid>
        </Box>

        <Grid container spacing={2} marginTop={1} marginBottom={2.5}>
          <Grid item xs={12} sx={{ display:'flex', justifyContent: 'center'}}>
            <PageNumber />
            {/* <PageNumber handleCurrentPage={handleCurrentPageDisplay} totalPostCount={totalPost}/> */}
          </Grid>
        </Grid>

      </Stack>
    </Box>
  )
}

export default SurveyUser