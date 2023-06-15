import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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
import DropDownMultipleField from '../../components/miscellaneous/DropDownMultipleField';
import DropDownMultipleField2 from '../../components/miscellaneous/DropDownMultipleField2';
import DropDownMultipleField3 from '../../components/miscellaneous/DropDownMultipleField3';
import Datetime from '../../components/miscellaneous/Datetime';
import ButtonCustom from '../../components/miscellaneous/ButtonCustom';
import InputField from '../../components/miscellaneous/InputField';

// Random Data

const data = [
  { id: 'A-123', question: "What is the theory of relativity?", category: 'Science' },
  { id: 'B-456', question: "What is the process of photosynthesis?", category: 'Science' },
  { id: 'C-789', question: "What is the structure of DNA?", category: 'Science' },
  { id: 'D-987', question: "What is the meaning of life?", category: 'Management' },
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

function sortDataByType(data) {
  data.sort((a, b) => {
    if (a.type === b.type) {
      return 0; // Maintain the original order if the types are the same
    } else if (a.type === 'Premium') {
      return -1; // Move 'Premium' type before 'Regular' type
    } else {
      return 1; // Move 'Regular' type after 'Premium' type
    }
  });

  return data;
}

function sortDataByCategory(data) {
  data.sort((a, b) => {
    if (a.category === b.category) {
      return 0; // Maintain the original order if the categories are the same
    } else if (a.category < b.category) {
      return -1; // Move category before the other
    } else {
      return 1; // Move category after the other
    }
  });

  return data;
}

const EditSurvey = () => {

    const locationexist = useLocation();
    const descr = locationexist.state?.descr

    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(addOneDay());
  
    return (
      <Box sx={{ flexGrow: 0, p: 0.5, marginLeft: 8, marginTop: -3 }}>
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
                <Typography variant="h6" sx={{ marginTop: -0.55, color: '#646464'}} >{`Editing - ${descr}`}</Typography>
                <Tooltip title="Edit the survey and resend it" placement="right">
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
                  <Grid item xs={12} sm={6} md={6}>
                    <InputField fullWidth={true} label="Survey Name" display="none" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <InputField fullWidth={true} label="Survey Description" display="none" />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <DropDownMultipleField data={sortDataByCategory(data)} label="Select questions to create survey" placeholder="Questions" />
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
                    <DropDownMultipleField3 data={sortDataByType(customerBase)} label="Select customer to send survey" placeholder="Questions" />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <ButtonCustom title="SAVE" iconEnd={<SaveOutlinedIcon />} size="large" fullWidth={true} color="#F39223" hoverColor="#ff8905" linkComponent={Link} address="/survey"/>
                  </Grid>
                  
              </Grid>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    )
}

export default EditSurvey