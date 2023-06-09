import React from 'react'
import Navbar from '../../componentslanding/Navbar'
import '../../landing.css'

// Material Ui Component
import { Box, Button, Stack, Typography, Grid, Divider } from '@mui/material'
import Container from '@mui/material/Container';
import TypeAnimationFont from '../../componentslanding/TypeAnimationFont';
import MidCard from '../../componentslanding/MidCard';
import LogoGrid from '../../componentslanding/LogoGrid';
import CardsInfo from '../../componentslanding/CardsInfo';
import Banner from '../../componentslanding/Banner';
import BannerCard from '../../componentslanding/BannerCard';
import ButtonCards from '../../componentslanding/ButtonCards';
import FeedbackBanner from '../../componentslanding/FeedbackBanner';
import CuriousBanner from '../../componentslanding/CuriousBanner';
import DefBanner from '../../componentslanding/DefBanner';
import Footer from '../../componentslanding/Footer';
import TemplateMesh from '../../componentslanding/TemplateMesh';

const LandingHome = () => {
    return (
        <Stack>
            <Navbar />

            <Box sx={{
                display: {xs: 'none', sm: 'none', md: 'flex'},
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1,
                flexWrap: 'wrap',
                my: 17,
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
                display: {xs: 'none', sm: 'flex', md: 'none'},
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1,
                flexWrap: 'wrap',
                my: 15,
                mx: 2,
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
                display: {xs: 'flex', sm: 'none', md: 'none'},
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1,
                my: 15,
                mx: 2,
                flexDirection: 'column',
                }}
            >

                <Typography variant="h3" sx={{ fontWeight: 500, textAlign: 'center' }}>We provide easy forms</Typography>
                <Typography variant="subtitle" sx={{ my: 2, fontWeight: 500, textAlign: 'center'  }}>A global leader in survey software. 20 million questions answered daily.</Typography>
                <Box sx={{ display: 'block' }}>
                    <Button variant="contained" size="large" sx={{ my: 2, bgcolor: 'rgb(0, 191, 111)', '&:hover': { bgcolor: 'rgb(0, 191, 111)' } }}>Get Started</Button>
                </Box> 
            </Box>

            <MidCard />

            <Typography variant="h5" sx={{ mt: -10, fontWeight: 500, textAlign: 'center'  }}>Join more than 17 million active users worldwide</Typography>

            <LogoGrid />

            <Typography variant="h4" sx={{ mt: 10, fontWeight: 500, textAlign: 'center'  }}>Choose a plan that works for you</Typography>
            <Typography variant="body" sx={{ my: 2, fontWeight: 400, textAlign: 'center', fontSize: 18  }}>Get an individual plan with features that you need, or create a team instead!</Typography>
            
            <CardsInfo />

            <Banner />

            <Typography variant="h4" sx={{ fontWeight: 500, textAlign: 'center' }}>Start with an expert-written template</Typography>
            <Typography variant="body" sx={{ mb: 8, my: 2, fontWeight: 400, textAlign: 'center', fontSize: 18, marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>
                Our sample survey templates make it easy for you to start collecting feedback in just minutes. Explore hundreds of questions across different survey types, all designed to get you accurate results you can rely on.
            </Typography>

            <TemplateMesh />

            <Typography variant="h4" sx={{ fontWeight: 500, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', width: '40%' }}>Tools that spark business breakthroughs</Typography>
            <Typography variant="body" sx={{ mb: 8, my: 2, fontWeight: 400, textAlign: 'center', fontSize: 18, marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>
                Discover specialized toolkits designed for your role and industry.
            </Typography>

            <BannerCard />

            <Typography variant="h4" sx={{ mt: 14, fontWeight: 500, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', width: '40%' }}>More toolkits for industry leaders</Typography>

            <ButtonCards />

            <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
                <Button variant="contained" sx={{ color: '#000', backgroundColor: '#f8f9fa', boxShadow: 'none', border: '1px black solid', '&:hover': { backgroundColor: '#f8f9fa', boxShadow: 'none', } }}>View all</Button>
            </Box>

            <FeedbackBanner />

            <CuriousBanner />

            {/* <DefBanner /> */}

            <Box sx={{ mx: 'auto', my: 4, width: '95%'  }}>
                <Divider />
            </Box>

            <Footer />


            
        </Stack>
    )
}

export default LandingHome
