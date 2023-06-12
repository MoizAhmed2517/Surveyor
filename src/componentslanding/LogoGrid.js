import { Container, Grid } from '@mui/material'
import React from 'react';
import logo1 from '../../src/static/images/logo1.png';
import logo2 from '../../src/static/images/logo2.png';
import logo3 from '../../src/static/images/logo3.webp';
import logo4 from '../../src/static/images/logo4.png';
import logo5 from '../../src/static/images/logo5.png';

const LogoGrid = () => {
  return (
    <Container sx={{ my: 3 }}>
        <Grid container spacing={7}>
            <Grid item xs={6} sm={4} md={2.4} >
                <img src={logo1} alt="Logo 1" style={{ width: '100%', height: 'auto' }} />
            </Grid>
            <Grid item xs={6} sm={4} md={2.4} >
                <img src={logo2} alt="Logo 2" style={{ width: '100%', height: 'auto' }} />
            </Grid>
            <Grid item xs={2.4} sm={4} md={2.4} sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
                <img src={logo3} alt="Logo 3" style={{ width: '100%', height: 'auto' }} />
            </Grid>
            <Grid item xs={2.4} sm={2.4} md={2.4} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                <img src={logo4} alt="Logo 4" style={{ width: '100%', height: 'auto' }} />
            </Grid>
            <Grid item xs={2.4} sm={2.4} md={2.4} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                <img src={logo5} alt="Logo 5" style={{ width: '100%', height: 'auto' }} />
            </Grid>
        </Grid>
        
    </Container>
  )
}

export default LogoGrid