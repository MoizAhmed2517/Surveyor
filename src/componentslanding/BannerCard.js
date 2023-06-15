import { Container, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import banner1 from '../../src/static/images/3.png';
import banner2 from '../../src/static/images/2.png';
import banner3 from '../../src/static/images/1.png';

const BannerCard = () => {
  return (
    <Grid container spaxing={3} justifyContent="center" sx={{ mt: 4 }}>

        <Grid item xs={12} sm={12} md={4} sx={{ textAlign: 'center' }}>
            <img src={banner1} style={{ maxWidth: '90%', height: 'auto', objectFit: 'cover' }} />
            <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 600 }}>Customer Support</Typography>
            <Typography variant='body1' sx={{ textAlign: 'center', fontWeight: 500, marginLeft: 'auto', marginRight: 'auto', width: '70%', mt: 2 }}>Provide better customer experiences while keeping your teams engaged.</Typography>
            <Button sx={{ justifyContent: 'center', display: 'flex', margin: '15px auto', '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', border: 'none', textDecoration: 'underline' } }}>Learn More</Button>
        </Grid>

        <Grid item xs={12} sm={12} md={4} sx={{ textAlign: 'center' }}>
            <img src={banner2} style={{ maxWidth: '90%', height: 'auto', objectFit: 'cover' }}  />
            <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 600 }}>Human Resources</Typography>
            <Typography variant='body1' sx={{ textAlign: 'center', fontWeight: 500, marginLeft: 'auto', marginRight: 'auto', width: '70%', mt: 2 }}>Retain your workforce by fostering a world-class employee experience.</Typography>
            <Button sx={{ justifyContent: 'center', display: 'flex', margin: '15px auto', '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', border: 'none', textDecoration: 'underline' } }}>Learn More</Button>
        </Grid>
        
        <Grid item xs={12} sm={12} md={4} sx={{ textAlign: 'center' }}>
            <img src={banner3} style={{ maxWidth: '90%', height: 'auto', objectFit: 'cover' }}  />
            <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 600 }}>Product Management</Typography>
            <Typography variant='body1' sx={{ textAlign: 'center', fontWeight: 500, marginLeft: 'auto', marginRight: 'auto', width: '70%', mt: 2 }}>Build products that drive impact and offer a strong product-market fit.</Typography>
            <Button sx={{ justifyContent: 'center', display: 'flex', margin: '15px auto', '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', border: 'none', textDecoration: 'underline' } }}>Learn More</Button>
        </Grid>
    </Grid>
  )
}

export default BannerCard