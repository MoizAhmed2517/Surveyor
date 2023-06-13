import { Box, Grid, Stack, MenuItem, Menu, Button, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const options = ["English", "Spanish", "Mandarin Chinese", "Hindi", "Arabic", "Bengali", "Portuguese", "Russian", "Japanese", "Punjabi", "German", "Javanese", "Korean", "French", "Telugu", "Marathi", "Tamil", "Turkish", "Vietnamese", "Urdu", "Italian", "Gujarati", "Polish", "Ukrainian", "Persian", "Malayalam", "Kannada", "Oriya"];
const ITEM_HEIGHT = 70;

const Footer = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [answer, setAnswer] = React.useState('English');
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (val) => {
        setAnswer(val);
        setAnchorEl(null);
    };

  return (
    <Box sx={{ 
        mx: 'auto', 
        my: 4, 
        width: '95%',
        }}
    >
        <Grid container>
            <Grid item xs={8}>

                <Stack direction="column">

                    <Button
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        variant="contained"
                        endIcon={<KeyboardArrowDownOutlinedIcon />}
                        sx={{ 
                            width: '30%',
                            color: 'white',
                            backgroundColor: '#000',
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#000',
                                boxShadow: 'none',
                            }
                        }}
                    > 
                        {answer}
                    </Button>

                    <Menu
                        id="long-menu"
                        MenuListProps={{
                        'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                        }}
                    >
                        {options.map((option, index) => (
                        <MenuItem key={index} selected={option === 'Pyxis'} onClick={() => handleClose(option)}>
                            {option}
                        </MenuItem>
                        ))}
                    </Menu>

                    <Box sx={{ mt: 2  }}>
                        <Typography variant='subtitle2' sx={{ fontWeight: 400, fontSize: 16, marginRight: 'auto', width: "60%" }}>Surveyor is brought to you by momentive.ai. Shape what's next with AI‑driven insights and experience management solutions built for the pace of modern business.</Typography>
                    </Box>

                    <Box sx={{ mt: 3, mb: 4  }}>
                        <Typography variant='subtitle2' sx={{ fontWeight: 400, fontSize: 16, marginRight: 'auto', width: "60%" }}>Copyright © 1999-2023 Momentive</Typography>
                    </Box>
                </Stack>

            </Grid>
            
            <Grid item xs={4}>

                        

            </Grid>
        </Grid>
    </Box>
  )
}

export default Footer