import React from 'react'
import Navbar from '../../componentslanding/Navbar'
import '../../landing.css'

// Material Ui Component
import { Box, Button, Stack, Typography } from '@mui/material'
import Container from '@mui/material/Container';
import TypeAnimationFont from '../../componentslanding/TypeAnimationFont';

const LandingHome = () => {
    return (
        <Stack>
            <Navbar />

            <Box sx={{
                display: {xs: 'none', md: 'flex'},
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1,
                my: 15,
                flexDirection: 'column',
                }}
            >   

                <TypeAnimationFont />
                <Typography variant="subtitle" sx={{ my: 2, fontWeight: 500  }}>A global leader in survey software. 20 million questions answered daily.</Typography>
                <Box sx={{ display: 'block' }}>
                    
                    <Button variant="contained" size="large" sx={{ my: 2, bgcolor: 'rgb(0, 191, 111)', '&:hover': { bgcolor: 'rgb(0, 191, 111)' } }}>Get Started</Button>
                </Box>  
            </Box>

            <Box sx={{
                display: {xs: 'flex', md: 'none'},
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1,
                my: 15,
                mx: 2,
                flexDirection: 'column',
                }}
            >

                <Typography variant="h3" sx={{ fontWeight: 500 }}>We provide easy forms</Typography>
                <Typography variant="subtitle" sx={{ my: 2, fontWeight: 500  }}>A global leader in survey software. 20 million questions answered daily.</Typography>
                <Box sx={{ display: 'block' }}>
                    <Button variant="contained" size="large" sx={{ my: 2, bgcolor: 'rgb(0, 191, 111)', '&:hover': { bgcolor: 'rgb(0, 191, 111)' } }}>Get Started</Button>
                </Box> 
            </Box>


        </Stack>
    )
}

export default LandingHome
