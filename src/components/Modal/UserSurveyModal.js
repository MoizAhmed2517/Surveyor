import React from 'react';
import { useNavigate } from 'react-router-dom';
// Icons
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import ShareIcon from '@mui/icons-material/Share';

// Material UI Component
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Grid, Stack, IconButton, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        xs: 350,
        sm: 400,
        md: 450
    },
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '0.75rem',
    boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)',
    p: 4,
  };

const privacyMessage = "Your privacy matters to us. We are committed to protecting your personal information and ensuring its confidentiality. Rest assured that we will handle your data with the utmost care and only use it for the intended purposes."

const UserSurveyModal = (props) => {

  const navigate = useNavigate();

  const handleModalClose = () => {
    navigate(props.nav)
    props.setOpenState(false);
  }

  return (
    <Modal
        open={props.openModal}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <Grid container spacing={0.5}> 
                <Grid item xs={12}>
                    <Typography variant="h4" textAlign="center" sx={{  color: '#646464' }}>THANKYOU!</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" textAlign="center" sx={{  color: '#646464', mb: 0.5 }}>Your response has been successfully submited</Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Box sx={{ border: "1px solid black", height: { xs: 80, sm: 70, md: 80}, borderRadius: '0.5rem', margin: '20px 30px', paddingTop: '10px', backgroundColor: '#f9f9f9' }}>
                        <Typography variant="subtitle2" textAlign="center" sx={{  color: '#646464', mb: 0.2 }}>Share this survey with other</Typography>
                        <IconButton>
                            <ShareIcon sx={{ color: '#1976d2' }} />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Box sx={{ margin: '10px 30px' }}>
                        <Typography variant="caption" sx={{  color: '#9b9999', mb: 1, fontSize: '10px' }}>{privacyMessage}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} textAlign="justify">
                    <Typography variant="body1" textAlign="center" sx={{  color: '#646464', mb: 0.5 }}>Any Feedback?</Typography>
                </Grid>
                <Grid item xs={12} textAlign="justify">
                    <Box sx={{ margin: '10px 30px' }}>
                        <TextField id='text-para' label="" variant="outlined" fullWidth placeholder="We'd like to hear feedback from you" />
                    </Box>
                </Grid>
                <Grid item xs={12} textAlign="justify">
                    <Box sx={{ margin: '10px 30px' }}>
                        <Button fullWidth variant="outlined" sx={{ mb: 2, mt:1 }} onClick={handleModalClose}>
                            SEND
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Modal>
  )
}

export default UserSurveyModal