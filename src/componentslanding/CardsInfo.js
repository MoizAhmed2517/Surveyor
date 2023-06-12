import { Container, Grid, Button } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import basic from '../../src/static/images/basic.svg';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  

const CardsInfo = () => {

  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
        setExpanded(!expanded);
  };

  return (
    <Container sx={{ mb: 4, mt: 3, ml: {xs: 6, sm: 0, md: 12, lg: 12, xl: 45 } }} >

        <Grid container spacing={2} justifyContent="center">

            <Grid item xs={12} sm={4} md={4}>
                <Card sx={{ 
                        maxWidth: 345,
                        boxShadow: '0 12px 16px 0 rgba(51,62,72,.1)',
                        '&:hover': {
                            boxShadow: '0 22px 35px 0 rgba(0,0,0,.2)',
                        },
                    }}
                >
                    <CardHeader sx={{ 
                            backgroundColor: 'rgb(0, 191, 111)',
                            color: 'white',
                            textAlign: 'center',
                            borderRadius: '0 0 50% 50%',
                            marginBottom: 2,
                            paddingBottom: -25,
                            paddingTop: 4,
                        }}
                        title="Basic"
                    />

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                        >
                        <CardMedia
                            component="img"
                            height="194"
                            image={basic}
                            alt="Paella dish"
                            sx={{ height: '20%', width: '20%', mt: 4,  mb: 4,  }}
                        />
                    </div>

                    <CardContent sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button 
                            variant="contained"
                            sx={{
                                backgroundColor: 'rgb(0, 191, 111)',
                                '&:hover': {
                                    backgroundColor: 'rgb(0, 191, 111)',
                                    boxShadow: 'none',
                                }
                            }}
                        >
                            Sign Up
                        </Button>
                    </CardContent>

                    <CardContent>
                        <Typography variant="subtitle2" sx={{ padding: 2, textAlign: 'center', fontWeight: 375, fontSize: 16 }}>Send unlimited surveys with up to 10 questions. Response limits apply.</Typography>
                    </CardContent>

                    
                </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
                <Card sx={{ 
                        maxWidth: 345,
                        boxShadow: '0 12px 16px 0 rgba(51,62,72,.1)',
                        '&:hover': {
                            boxShadow: '0 22px 35px 0 rgba(0,0,0,.2)',
                        },
                    }}
                >
                    <CardHeader sx={{ 
                            backgroundColor: '#065497',
                            color: 'white',
                            textAlign: 'center',
                            borderRadius: '0 0 50% 50%',
                            marginBottom: 2,
                            paddingBottom: -25,
                            paddingTop: 4,
                        }}
                        title="Individual Advantage"
                    />

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                        >
                        <CardMedia
                            component="img"
                            height="194"
                            image={basic}
                            alt="Paella dish"
                            sx={{ height: '20%', width: '20%', mt: 4,  mb: 4,  }}
                        />
                    </div>

                    <CardContent sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button 
                            variant="contained"
                            sx={{
                                backgroundColor: '#065497',
                                '&:hover': {
                                    backgroundColor: '#065497',
                                    boxShadow: 'none',
                                }
                            }}
                        >
                            Sign Up
                        </Button>
                    </CardContent>

                    <CardContent>
                        <Typography variant="subtitle2" sx={{ padding: 2, textAlign: 'center', fontWeight: 375, fontSize: 16 }}>Send unlimited surveys with up to 10 questions. Response limits apply.</Typography>
                    </CardContent>

                    
                </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
                <Card sx={{ 
                        maxWidth: 345,
                        boxShadow: '0 12px 16px 0 rgba(51,62,72,.1)',
                        '&:hover': {
                            boxShadow: '0 22px 35px 0 rgba(0,0,0,.2)',
                        },
                    }}
                >
                    <CardHeader sx={{ 
                            backgroundColor: '#53225b',
                            color: 'white',
                            textAlign: 'center',
                            borderRadius: '0 0 50% 50%',
                            marginBottom: 2,
                            paddingBottom: -25,
                            paddingTop: 4,
                        }}
                        title="Team Advantage"
                    />

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                        >
                        <CardMedia
                            component="img"
                            height="194"
                            image={basic}
                            alt="Paella dish"
                            sx={{ height: '20%', width: '20%', mt: 4,  mb: 4,  }}
                        />
                    </div>

                    <CardContent sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button 
                            variant="contained"
                            sx={{
                                backgroundColor: '#53225b',
                                '&:hover': {
                                    backgroundColor: '#53225b',
                                    boxShadow: 'none',
                                }
                            }}
                        >
                            Sign Up
                        </Button>
                    </CardContent>

                    <CardContent>
                        <Typography variant="subtitle2" sx={{ padding: 2, textAlign: 'center', fontWeight: 375, fontSize: 16 }}>Send unlimited surveys with up to 10 questions. Response limits apply.</Typography>
                    </CardContent>

                    
                </Card>
            </Grid>

        </Grid>

    </Container>
  )
}

export default CardsInfo