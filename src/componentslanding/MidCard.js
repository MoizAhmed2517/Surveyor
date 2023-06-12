import { Box, Container, Grid, Typography, Button, ButtonGroup, Stack } from '@mui/material'
import React from 'react'
import CustomButtonStyling from './CustomButtonStyling';
import BigCardColSix from './BigCardColSix';
import SmallCardColSix from './SmallCardColSix';
import SmallCardColSix2 from './SmallCardColSix2';
import SmallCardColSix3 from './SmallCardColSix3';
import SmallCardColSix4 from './SmallCardColSix4';
import cardImage2 from '../../src/static/images/2ndcard.png';
import cardImage3 from '../../src/static/images/3rdcard.png';
import cardImage4 from '../../src/static/images/4thcard.png';
import cardImage5 from '../../src/static/images/5thcard.png';
const MidCard = () => {
  
  
  return (

        <Grid container spacing={2}>

            <Grid item xs={12}>

                <Box sx={{
                    display: { xs: 'none', md: 'block' }, 
                    margin: '0 auto',
                    bgcolor: '#f5f5f5',
                    width: '75%',
                    height: {md: '615px', xl: '800px'},
                    mb: 2,
                    my: 15
                }}>
                    
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography variant='h5' sx={{ fontWeight: 500, textAlign: 'center', my: 3, color: 'rgb(51, 62, 72)' }}>Who is your survey audience?</Typography>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="center" sx={{ marginLeft: 2, mt: 2 }}>
                        <Grid item xs={3}>
                            <CustomButtonStyling title="Employees" />
                        </Grid>
                        <Grid item xs={3}>
                            <CustomButtonStyling title="Employees" />
                        </Grid>
                        <Grid item xs={3}>
                            <CustomButtonStyling title="Employees" />
                        </Grid>
                        <Grid item xs={3}>
                            <CustomButtonStyling title="Employees" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={0.9} sx={{ mt: 3 }}>

                        <Grid item xs={5}>
                            <BigCardColSix />
                        </Grid>

                        <Grid item xs={3.5}>
                            <Stack direction="column">
                                <SmallCardColSix image={cardImage2} fontColor={'white'} caption="How it works" descr="See how easy it is to create, send, and analyze surveys." />
                                <SmallCardColSix2 image={cardImage3} fontColor={'black'} caption="How it works" descr="See how easy it is to create, send, and analyze surveys." />
                            </Stack>
                        </Grid>

                        <Grid item xs={3.5}>
                            <Stack direction="column">
                                <SmallCardColSix3 image={cardImage4} fontColor={'black'} caption="How it works" descr="See how easy it is to create, send, and analyze surveys." />
                                <SmallCardColSix4 image={cardImage5} fontColor={'white'} caption="How it works" descr="See how easy it is to create, send, and analyze surveys." />
                            </Stack>
                        </Grid>

                    </Grid>

                </Box>
            </Grid>

        </Grid>
    // </Container>
  )
}

export default MidCard