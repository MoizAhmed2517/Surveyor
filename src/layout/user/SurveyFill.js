import React from 'react'
import { useLocation } from 'react-router-dom';
import bg from  '../../static/images/bg3.jpg';
//  Icons
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

// MUI components
import { Box, Grid, IconButton, Stack, Tooltip, Typography, Card, CardContent, Button, Divider } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
import UserSurveyModal from '../../components/Modal/UserSurveyModal';
import InfoCards from '../../components/questions/InfoCards';
import ProgressBar from '../../components/questions/ProgressBar';

// Random Data
const text = "This code should read a single register at each address from 1 to 150 and print the decoded 8-bit integer value. If any exception occurs, the traceback will be printed, providing more information about the error."

const radioData = [
    {value: 'blue' , label: 'Blue'},
    {value: 'green' , label: 'Green'},
    {value: 'red' , label: 'Red'},
    {value: 'orange' , label: 'OrangeBlue'},
]

const checkBoxData = [
    {label: 'Option1'},
    {label: 'Option2'},
    {label: 'Option3'},
    {label: 'Option4'},
    {label: 'Option5'},
    {label: 'Option6'},
]

const SurveyFill = (props) => {
    const locationexist = useLocation();
    const descr = locationexist.state?.descr;
    const [open, setOpen] = React.useState(false);
    const [scrollProgress, setScrollProgress] = React.useState(0);
    const cardContentRef = React.useRef(null);
  
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);
  
    const handleScroll = () => {
      if (cardContentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = cardContentRef.current;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(progress);
      }
    };
  
    React.useEffect(() => {
      if (cardContentRef.current) {
        cardContentRef.current.addEventListener('scroll', handleScroll);
      }
      return () => {
        if (cardContentRef.current) {
          cardContentRef.current.removeEventListener('scroll', handleScroll);
        }
      };
    }, []);
  
  
    return (
      <Box sx={{ mt: -6, backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
          <Box sx={{ flexGrow: 0, p: 0.5, marginLeft: 9, marginTop: -3,  }}>
              <Stack>
  
                  <Box sx={{
                      margin: {
                          xs: "10px 10px 0px -5px",
                          sm: "30px 10px 0px 10px",
                          md: '10px 100px 0px 100px'
                      },
                      
                  }}>
                      <Card sx={{
                          borderRadius: 'none',
                          border: '1px solid rgba( 255, 255, 255, 0.5 )',
                          background: 'rgba( 255, 255, 255, 0.2 );',
                          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                          backdropFilter: 'blur( 5.5px )',
                          WebkitBackdropFilter: 'blur( 5.5px )',
                          mb: 2,
                      }}
                      >
                          <CardContent >
                              <InfoCards descr={locationexist.state?.descr} text={text} />
                              <ProgressBar progress={scrollProgress} />
                          </CardContent>
                          <CardContent sx={{ height: '44.7vh', overflowY: 'scroll' }} ref={cardContentRef}>
                               <MultipleChoice question={`${1}. Do you have thoughts you would like to share`} option={radioData} />
                               <Divider sx={{ mt: 3,mb: 2, width:'20%', mx: 'auto', color: '#000' }} />
                               <QuestionCheckBox question={`${2}. What is color of sky?`} option={checkBoxData} />
                               <Divider sx={{ mt: 3,mb: 2, width:'20%', mx: 'auto', color: '#000' }} />
                               <RangeScale question={`${3}. What is average temperature in USA?`} />
                               <Divider sx={{ mt: 3,mb: 2, width:'20%', mx: 'auto', color: '#000' }} />
                               <ShortAnswer question={`${4}. What your the highest mountain peak in the world?`} label="" variant={false} fullWidth={true} placeholder="Write short description" />
                               <Divider sx={{ mt: 3,mb: 2, width:'20%', mx: 'auto', color: '#000' }} />
                               <LinearScale question={`${5}. What your last year score?`} />
                               <Divider sx={{ mt: 3,mb: 2, width:'20%', mx: 'auto', color: '#000' }} />
                               <Paragraph question={`${6}. What your the highest mountain peak in the world?`} label="" variant={false} fullWidth={true} placeholder="Write brief description" />
                          </CardContent>
                          <CardContent>
                              <Button fullWidth variant="contained" sx={{ mb: 0.5, mt: 3 }} endIcon={<SendOutlinedIcon />} onClick={handleOpenModal}>
                                  SEND
                              </Button>
                          </CardContent>
                      </Card>
  
                  </Box>
  
                  <UserSurveyModal openModal={open} handleClose={handleCloseModal} setOpenState={setOpen} nav={'/survey'} />
  
              </Stack>
          </Box>
      </Box>
    )
}

export default SurveyFill