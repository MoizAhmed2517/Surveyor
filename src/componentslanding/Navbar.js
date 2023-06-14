import React from 'react'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

// Icons
import SettingsIcon from '@mui/icons-material/Settings';
import CircleIcon from '@mui/icons-material/Circle';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import RunningWithErrorsOutlinedIcon from '@mui/icons-material/RunningWithErrorsOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

// Material ui components
import { styled, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/material';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };



const Navbar = (props) => {
    return (
        <React.Fragment>
          <CssBaseline />
          <ElevationScroll {...props}>
            <AppBar sx={{ background: '#fcfcfc', color: 'black' }}>
              <Toolbar>
                
                {/* App bar main icon -- desktop */}
                <Typography
                        variant="h5"
                        noWrap
                        sx={{
                        ml: 8,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 1000,
                        letterSpacing: '.2rem',
                        color: 'rgb(0, 191, 111)',
                        textDecoration: 'none',
                    }}
                >
                    SURVEYOR
                </Typography>

                {/* App bar main icon -- mobile */}
                <Typography
                        variant="h5"
                        noWrap
                        sx={{
                        ml: 2,
                        display: { xs: 'fkex', md: 'none' },
                        fontFamily: 'monospace',
                        fontWeight: 1000,
                        letterSpacing: '.2rem',
                        color: 'rgb(0, 191, 111)',
                        textDecoration: 'none',
                    }}
                >
                SURVEYOR
                </Typography>

                <Box sx={{ marginLeft: 'auto' }}>

                    <Button sx={{ mr: 2, color: 'black' }} component={Link} to="/login">Log in</Button>
                    <Button sx={{ boxShadow: 'none', color: 'black', mr: { xs: 2, md: 8}, bgcolor: '#f9be00', '&:hover': { bgcolor: '#f9be00' } }} variant="contained" component={Link} to="/signup">SignUp</Button>

                </Box>
                
              </Toolbar>
            </AppBar>
          </ElevationScroll>
          <Toolbar />
        </React.Fragment>
    );
}

export default Navbar