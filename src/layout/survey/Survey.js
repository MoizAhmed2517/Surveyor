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
import SurveyCard from '../../components/card/SurveyCard'
import PageNumber from '../../components/pagination/PageNumber';

function createData(title, date, descr) {
  return {title, date, descr};
}

const dummyData = [
  createData('New Survey Form - A', "13 March, 2023", "20 character description will be added here. Loreum Ipsum ..."),
  createData('New Survey Form - C', "13 March, 2023", "20 character description will be added here. Loreum Ipsum ..."),
  createData('New Survey Form - B', "13 March, 2023", "20 character description will be added here. Loreum Ipsum ..."),
  createData('New Survey Form - D', "13 March, 2023", "20 character description will be added here. Loreum Ipsum ..."),
  createData('New Survey Form - E', "13 March, 2023", "20 character description will be added here. Loreum Ipsum ..."),
  createData('New Survey Form - F', "13 March, 2023", "20 character description will be added here. Loreum Ipsum ..."),
  createData('New Survey Form - G', "13 March, 2023", "20 character description will be added here. Loreum Ipsum ..."),
]

const Survey = () => {
  return (
    <Box sx={{ flexGrow: 0, p: 0.5, marginLeft: 8, marginTop: -3 }}>
      <Stack >

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Searchbar />
          </Grid>
        </Grid>

        <Box margin="30px 100px 0px 100px"> 
          <Grid container>
            <Grid item xs={12} sm={12} md={8}>
              <Typography variant="h6" sx={{ color: '#646464' }}>Recent Form</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} mt={-1.2} sx={{
                paddingLeft: {
                  md: 16.2,
                  lg: 33.5 
                },
                ml: { xs: -1, }
              }}
            >
              <Tooltip title="Create new survey" placement="top">
                <IconButton component={Link} to="/new-survey">
                  <AddBoxOutlinedIcon sx={{ color: '#F39223' }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Questionnaire Management" placement="top">
                <IconButton sx={{ mt: 0.5 }} component={Link} to="/questionnaire">
                  <QuestionAnswerOutlinedIcon sx={{ color: '#F39223' }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>

        <Box margin="20px 100px 10px 100px">
          <Grid container spacing={2} justifyContent="left">
            {
              dummyData.map((data, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index} >
                  <ConfirmProvider>
                    <SurveyCard title={data.title} date={data.date} descr={data.descr} LinkComponent={Link} address="/edit-survey" />
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

export default Survey