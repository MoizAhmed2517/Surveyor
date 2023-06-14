import React from 'react'
import { Box, Grid, Typography, Stack, Button } from '@mui/material';
import curious1 from '../../src/static/images/curious1.png'
import curious2 from '../../src/static/images/curious2.png'
import curious3 from '../../src/static/images/curious3.png'

const CuriousBanner = () => {
  return (
    <Box sx={{
        mt: 4,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
        mb: 4, 
    }}>

        <Typography variant="h4" sx={{ mb: 2, mt: 16, fontWeight: 700, textAlign: 'center' }}>Still curious?</Typography>
        <Typography variant="body1" sx={{ mb: 7, fontWeight: 450, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', width: '40%' }}>Explore these additional resources to help you launch successful survey projects.</Typography> 
        <Grid container spacing={8}>

            <Grid item xs={12} sm={12} md={4}>
                <Stack direction="column">
                    <img src={curious1} alt='feedback1' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                    <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 700, ml: 4 }}>Success Stories</Typography>
                    <Typography variant="body1" sx={{ mt: 2, fontWeight: 400, ml:4, lineHeight: 2, }}>Read about our customers, explore our webinars, and get guides on collecting feedback in your industry.</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'left', my: 2, ml: 3 }}>
                        <Button sx={{ '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', border: 'none', textDecoration: 'underline' } }}>Explore resources</Button>
                    </Box>
                </Stack>
            </Grid> 

            <Grid item xs={12} sm={12} md={4}>
                <Stack direction="column">
                    <img src={curious2} alt='feedback1' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                    <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 700, ml: 4 }}>Blog</Typography>
                    <Typography variant="body1" sx={{ mt: 2, fontWeight: 400, ml:4, lineHeight: 2, }}>Get tips on how to create better surveys, hear the latest product news, or check out our signature research.</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'left', my: 2, ml: 3 }}>
                        <Button sx={{ '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', border: 'none', textDecoration: 'underline' } }}>See Curiosity at Work</Button>
                    </Box>
                </Stack>
            </Grid> 

            <Grid item xs={12} sm={12} md={4}>
                <Stack direction="column">
                    <img src={curious3} alt='feedback1' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                    <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 700, ml: 4 }}>Help Center</Typography>
                    <Typography variant="body1" sx={{ mt: 2, fontWeight: 400, ml:4, lineHeight: 2, }}>Access tutorials on how features work, learn more about billing, contact Customer Support, and more.</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'left', my: 2, ml: 3 }}>
                        <Button sx={{ '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', border: 'none', textDecoration: 'underline' } }}>Visit Help Center</Button>
                    </Box>
                </Stack>
            </Grid> 

        </Grid>
    </Box>
  )
}

export default CuriousBanner