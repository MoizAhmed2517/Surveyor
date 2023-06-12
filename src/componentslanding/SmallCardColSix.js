import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';


const SmallCardColSix = (props) => {
    return (
        <Card sx={{ 
                width: '110%',
                height: '88%',
                display: 'flex',
                flexDirection: 'column',
                marginLeft: -3,
                borderRadius: 0,
                transition: 'transform 0.1s ease',
                '&:hover': {
                    transform: 'scale(1.03)',
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
            image={props.image}
            alt="Card Image"
            />
            <CardContent sx={{
                position: 'absolute',
                bottom: -6,
                width: '100%', // Add background color
                color: `${props.fontColor}`, // Add text color
                paddingLeft: '18px',
            }}>
                <Stack direction="column">
                    <Typography variant='button' sx={{ fontWeight: 400, fontSize: 14 }}>{props.caption}</Typography>
                    <Typography variant='subtitle' sx={{ fontWeight: 600, fontSize: 14 }}>{props.descr}</Typography>
                </Stack>
            </CardContent>
        {/* </CardActionArea> */}
        </Card>
      );
}

export default SmallCardColSix