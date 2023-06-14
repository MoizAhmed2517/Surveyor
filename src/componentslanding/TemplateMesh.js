import { Grid, TextField, Checkbox, Stack, FormGroup, FormControlLabel, FormControl, Typography } from '@mui/material'
import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
];

const TemplateMesh = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 10, mb: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} md={3} sx={{ ml: 1, height: 450, overflow: 'scroll' }}>
                <Typography variant="h6" sx={{ fontWeight: 400, mb: 2, color: 'rgb(161, 164, 167)' }}>Showing <span style={{ color: 'rgb(0, 191, 111)' }}> 286</span> templates</Typography>
                <TextField 
                    placeholder="Search" 
                    variant="outlined" 
                    size="small"
                    sx={{ 
                        boxShadow: 'none', 
                        borderRadius: 1, 
                        '&:hover' : {  

                        }, 
                        '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: 'transparent', // Change the border color when focused
                        },
                    },
                }} 
            />
                <Stack direction="column">
                    <Typography variant="h5" sx={{ mt: 1 }}>Filter by survey type</Typography>

                    <FormControl sx={{ ml: 3, mt: 3 }} component="fieldset" variant="standard">
                        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                        <FormGroup>
                            <FormControlLabel
                                control={
                                <Checkbox name="gilad" />
                                }
                                label="Gilad Gray"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox name="jason" />
                                }
                                label="Jason Killian"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox name="antoine" />
                                }
                                label="Antoine Llorca"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox name="antoine" />
                                }
                                label="Antoine Llorca"
                            /><FormControlLabel
                                control={
                                <Checkbox name="antoine" />
                                }
                                label="Antoine Llorca"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox name="antoine" />
                                }
                                label="Antoine Llorca"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox name="antoine" />
                                }
                                label="Antoine Llorca"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox name="antoine" />
                                }
                                label="Antoine Llorca"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox name="antoine" />
                                }
                                label="Antoine Llorca"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox name="antoine" />
                                }
                                label="Antoine Llorca"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox name="antoine" />
                                }
                                label="Antoine Llorca"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox name="antoine" />
                                }
                                label="Antoine Llorca"
                            />
                            </FormGroup>
                            {/* <FormHelperText>Be careful</FormHelperText> */}
                    </FormControl>
                </Stack>
            </Grid>

      <Grid item xs={12} md={8}>
        <ImageList sx={{ width: 850, height: 450 }} cols={4} rowHeight={200} gap={10}>
            {itemData.map((item) => (
              <ImageListItem key={item.img} sx={{ padding: 2 }}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
      </Grid>
    </Grid>
  )
}

export default TemplateMesh