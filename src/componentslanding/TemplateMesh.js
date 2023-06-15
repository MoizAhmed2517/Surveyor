import { Grid, TextField, Checkbox, Stack, FormGroup, FormControlLabel, FormControl, Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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

  const theme = useTheme();
  const matches = useMediaQuery('(min-width:726px)');
  
  return (
    <Grid container spacing={3} sx={{ mt: 10, mb: 10, justifyContent: 'center', alignItems: 'center' }}>

        <Grid item xs={12} sm={3.5} md={3} sx={{ height: { xs: 120, sm: 450 }, overflowY: 'scroll' }}>

          <Box sx={{ display: { xs: 'flex', sm: 'none'}, justifyContent: 'center', flexDirection: 'column' }}>
              <Typography variant="h6" sx={{ fontWeight: 400, mb: 2, color: 'rgb(161, 164, 167)', fontSize: { sm: 14, md: 20 }, textAlign: 'center' }}>Showing <span style={{ color: 'rgb(0, 191, 111)' }}> 286</span> templates</Typography>
              <TextField 
                  placeholder="Search" 
                  variant="outlined" 
                  size="small"
                  sx={{ 
                      boxShadow: 'none',
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                      width: "100%",
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
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography variant="h6" sx={{ fontWeight: 400, mb: 2, color: 'rgb(161, 164, 167)', fontSize: { sm: 14, md: 20 } }}>Showing <span style={{ color: 'rgb(0, 191, 111)' }}> 286</span> templates</Typography>
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
          </Box>


          <Stack direction="column" sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography variant="h5" sx={{ mt: 1, fontSize: { sm: 18, md: 25 } }}>Filter by survey type</Typography>

              <FormControl sx={{ ml: { xs: 1, sm: 0, md: 0 }, mt: 3 }} component="fieldset" variant="standard">
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

        <Grid item xs={12} sm={7.5} md={8}>
          <ImageList sx={{ width: { sm: 400, md: 610, lg: 850, xl: 1000 }, height: 450 }} cols={matches ? 4 : 2} rowHeight={matches ? 200 : 400} gap={10}>
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