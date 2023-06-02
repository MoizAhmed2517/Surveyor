import React from 'react';

// Icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// Material UI components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack, Card, CardContent } from '@mui/material';
import { Grid } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import DropDownMultipleField from '../../components/miscellaneous/DropDownMultipleField';
import { DatePickerToolbar } from '@mui/x-date-pickers';
import Datetime from '../../components/miscellaneous/Datetime';
import DatetimeDesktop from '../../components/miscellaneous/DatetimeDesktop';
import DropDownMultipleField2 from '../../components/miscellaneous/DropDownMultipleField2';


//  React components


// Random Data

const data = [
  { id: 'A-123', question: "What is the theory of relativity?", category: 'Science' },
  { id: 'B-456', question: "What is the process of photosynthesis?", category: 'Science' },
  { id: 'C-789', question: "What is the structure of DNA?", category: 'Science' },
  { id: 'D-987', question: "What is the meaning of life?", category: 'Philosophy' },
  { id: 'E-654', question: "What is the nature of reality?", category: 'Philosophy' },
  { id: 'F-321', question: "What is the ethical theory of utilitarianism?", category: 'Philosophy' },
  { id: 'G-135', question: "What are the key principles of effective leadership?", category: 'Management' },
  { id: 'H-246', question: "What is the difference between management and leadership?", category: 'Management' },
  { id: 'I-579', question: "How can you improve team collaboration and communication?", category: 'Management' }
];

// console.log(data.map(item => Object.keys(item))[0][1])

const population = [
  { population: 10000 },
  { population: 20000 },
  { population: 30000 },
  { population: 40000 }
];

const customerBase = [
  { id: 'CUST-001', name: 'John Smith', age: 35, type: 'Premium' },
  { id: 'CUST-002', name: 'Emily Johnson', age: 28, type: 'Regular' },
  { id: 'CUST-003', name: 'Michael Davis', age: 42, type: 'Premium' },
  { id: 'CUST-004', name: 'Emma Wilson', age: 31, type: 'Regular' },
  { id: 'CUST-005', name: 'Daniel Anderson', age: 39, type: 'Premium' },
  { id: 'CUST-006', name: 'Sophia Taylor', age: 24, type: 'Regular' },
  { id: 'CUST-007', name: 'Matthew Brown', age: 47, type: 'Premium' },
  { id: 'CUST-008', name: 'Olivia Martinez', age: 33, type: 'Regular' },
  { id: 'CUST-009', name: 'Christopher Thompson', age: 29, type: 'Premium' },
  { id: 'CUST-010', name: 'Ava Garcia', age: 36, type: 'Regular' },
  { id: 'CUST-011', name: 'David Rodriguez', age: 43, type: 'Premium' },
  { id: 'CUST-012', name: 'Mia Hernandez', age: 27, type: 'Regular' },
  { id: 'CUST-013', name: 'James Adams', age: 51, type: 'Premium' },
  { id: 'CUST-014', name: 'Sophie King', age: 30, type: 'Regular' },
  { id: 'CUST-015', name: 'Alexander Campbell', age: 37, type: 'Premium' },
  { id: 'CUST-016', name: 'Charlotte Allen', age: 26, type: 'Regular' },
  { id: 'CUST-017', name: 'Benjamin Turner', age: 44, type: 'Premium' },
  { id: 'CUST-018', name: 'Amelia Stewart', age: 32, type: 'Regular' },
  { id: 'CUST-019', name: 'William Phillips', age: 38, type: 'Premium' },
  { id: 'CUST-020', name: 'Ella Young', age: 25, type: 'Regular' }
];

function addOneDay(date = new Date()) {
  date.setDate(date.getDate() + 1);
  return date;
}

const NewSurvey = () => {

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(addOneDay());

  return (
    
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
            <Typography variant="h6" sx={{ marginTop: -0.55, color: '#646464'}} >Create New Survey </Typography>
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
                <DropDownMultipleField data={data} label="Select questions to create survey" placeholder="Questions" />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                  <Datetime label="Start Date" defaultVal={startDate} />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                  <Datetime label="End Date" defaultVal={endDate} />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <DropDownMultipleField2 data={population} label="Select target population" placeholder="population" />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <DropDownMultipleField data={data} label="Select questions to create survey" placeholder="Questions" />
              </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default NewSurvey