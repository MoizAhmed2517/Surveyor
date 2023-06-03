import React from 'react'

// MUI components
import { Box, Grid, IconButton, Stack, Tooltip, Typography, Card, CardContent } from '@mui/material'

//  React components
import InputField from '../../components/miscellaneous/InputField';
import Heading from '../../components/miscellaneous/Heading';
import Description from '../../components/miscellaneous/Description';
import MultipleChoice from '../../components/questions/MultipleChoice';
import QuestionCheckBox from '../../components/questions/QuestionCheckBox';
import RangeScale from '../../components/questions/RangeScale';
import LinearScale from '../../components/questions/LinearScale';
import ShortAnswer from '../../components/questions/ShortAnswer';
import Paragraph from '../../components/questions/Paragraph';

// Random Data
const text = "This code should read a single register at each address from 1 to 150 and print the decoded 8-bit integer value. If any exception occurs, the traceback will be printed, providing more information about the error."

const radioData = [
    {value: 'blue' , label: 'Blue'},
    {value: 'green' , label: 'Green'},
    {value: 'red' , label: 'Red'},
    {value: 'orange' , label: 'Orange'},
]

const checkBoxData = [
    {label: 'Option1'},
    {label: 'Option2'},
    {label: 'Option3'},
    {label: 'Option4'},
    {label: 'Option5'},
    {label: 'Option6'},
]

const SurveyFill = () => {
  return (
    <Stack>

        <Box sx={{
            margin: {
                xs: "30px 10px 0px 10px",
                sm: "30px 10px 0px 10px",
                md: '10px 100px 0px 100px'
            },
        }}>
            <Card sx={{
                borderRadius: '0.5rem', 
                boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)',
                mb: 2,
            }}
            >
                <CardContent >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12}>
                        <Heading title="World Tourist Survey" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                        <Description title={text} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                        <InputField fullWidth={true} label="Full Name" variant={true} placeholder="John" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                        <InputField fullWidth={true} label="Email Address" variant={true} placeholder="xyz@gmail.com" />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <MultipleChoice question="What is color of sky?" option={radioData} />

            <QuestionCheckBox question="What is color of sky?" option={checkBoxData} />

            <RangeScale question="What is average temperature in USA?" />

            <LinearScale question="What your last year score?" />

            <ShortAnswer question="What your the highest mountain peak in the world?" label="" variant={true} fullWidth={true} placeholder="Write short description" />

            <Paragraph  question="What your the highest mountain peak in the world?" label="" variant={true} fullWidth={true} placeholder="Write brief description" />

        </Box>

    </Stack>
  )
}

export default SurveyFill