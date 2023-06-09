import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';
import cardImage from '../../src/static/images/1stcard.png';

const BigCardColSix = (props) => {
    return (
        <Card sx={{ 
                width: '104%',
                height: '95.2%',
                display: 'flex',
                flexDirection: 'column',
                marginLeft: -5,
                borderRadius: 0,
                transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.03)',
                    transition: 'transform 0.3s ease-in',
                    boxShadow: '0 22px 35px 0 rgba(0,0,0,.2)',
                },
                '&:hover:not(:hover)': {
                    transform: 'scale(1)',
                    
                },
                position: 'relative',
            }}
        >
        {/* <CardActionArea> */}
            <CardMedia
            component="img"
            sx={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
            }}
            image={cardImage}
            alt="Card Image"
            />
            <CardContent sx={{
                position: 'absolute',
                bottom: { sm: -2, md: 10 },
                width: {sm: '100%', md: '90%'}, // Add background color
                color: 'black', // Add text color
                paddingLeft: '32px',
            }}>
                <Stack direction="column">
                    <Typography variant='button' sx={{ fontWeight: 400, fontSize: 14 }}>TEMPLATE LIBRARY</Typography>
                    <Typography variant='subtitle' sx={{ fontWeight: 600, fontSize: 14 }}>Explore expert-written survey questions and templates.</Typography>
                </Stack>
            </CardContent>
        {/* </CardActionArea> */}
        </Card>
      );
}

export default BigCardColSix