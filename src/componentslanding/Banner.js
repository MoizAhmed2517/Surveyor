import React from 'react'
import cover from '../../src/static/images/cover.png';
import { Container, Box, Typography, Stack, Button } from '@mui/material';

const Banner = () => {
  return (
    <Box sx={{ position: 'relative', my: 15 }}>
        <img src={cover} style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'right' }} alt="Banner" />
        <Stack direction="column" spacing={2} sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <Typography
            variant='body1'
            sx={{
                color: '#fff',
                padding: '10px',
                borderRadius: '5px',
                zIndex: '1',
                fontWeight: 500
            }}
            >
                Looking for targeted responses to your surveys?
            </Typography>
            <Typography
            variant='subtitle1'
            sx={{
                color: '#fff',
                padding: '5px',
                borderRadius: '5px',
                zIndex: '1',
                fontWeight: 400
            }}
            >
                Get the responses you need in minutes with SurveyMonkey Audience, our trusted panel of more than 175 million respondents from across the globe.
            </Typography>
            <Button variant="contained" size="large" sx={{ zIndex: '1', fontWeight: 500, backgroundColor: '#fff', color: '#000', boxShadow: 'none', border: '1px black solid', '&:hover': { backgroundColor: '#fff', color: '#000'},  }}>
                Get Started
            </Button>
      </Stack>
    </Box>
  )
}

export default Banner