import React from 'react'
import { Box, Typography, Grid, Stack, Button } from '@mui/material';
import feedback1 from '../../src/static/images/feedback1.png'
import feedback2 from '../../src/static/images/feedback2.png'

const FeedbackBanner = () => {
  return (
    <Box sx={{
        bgcolor: '#f5f5f5',
        height: {
            xs: '1500px',
            sm: '500px',
            md: '500px',
            lg: '900px',
            xl: '800px',
        },
        mb: 2, 
        mt: 4
    }}>

        <Typography variant="h4" sx={{ mb: 10, mt: 16, fontWeight: 700, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', width: '48%' }}>Go beyond collecting feedback—deliver better experiences that drive your business</Typography> 
        <Grid container spacing={2} >
            <Grid item xs={12} sm={6} md={6}>

                <Stack direction="column" alignItems="center">
                    <img src={feedback1} alt='feedback1' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                    <Typography variant="h4" sx={{ mb: 3, mt: 6, fontWeight: 700, textAlign: 'center' }}>Momentive Solutions</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 450, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', width: '60%' }}>Get a platform that can grow and change along with your survey needs over time. Browse our plans to learn more about specific features.</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                        <Button variant="contained" sx={{ color: '#000', backgroundColor: '#f8f9fa', boxShadow: 'none', border: '1px black solid', '&:hover': { backgroundColor: '#f8f9fa', boxShadow: 'none', } }}>Visit Momentive</Button>
                    </Box>
                </Stack>

            </Grid>

            <Grid item xs={12} sm={6} md={6}>


                <Stack direction="column" alignItems="center">
                    <img src={feedback2} alt='feedback2' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                    <Typography variant="h4" sx={{ mb: 3, mt: 6, fontWeight: 700, textAlign: 'center' }}>GetFeedback</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 450, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', width: '60%' }}>Manage your company’s data with advanced security and control, so you can enable your teams to share and collaborate safely.</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                        <Button variant="contained" sx={{ color: '#000', backgroundColor: '#f8f9fa', boxShadow: 'none', border: '1px black solid', '&:hover': { backgroundColor: '#f8f9fa', boxShadow: 'none', } }}>Visit GetFeedback</Button>
                    </Box>
                </Stack>

            </Grid>
        </Grid>
    </Box>
  )
}

export default FeedbackBanner