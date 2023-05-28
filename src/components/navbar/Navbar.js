import React from 'react';
import { Link, useLocation  } from 'react-router-dom';

// Icons
import AdbIcon from '@mui/icons-material/Adb';
import SettingsIcon from '@mui/icons-material/Settings';


// Material UI components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { BorderBottom } from '@mui/icons-material';

// Pages
const pages = [
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Survey',
      link: '/survey',
    },
    {
      name: 'Complain',
      link: '/complain',
    },
    {
      name: 'Analysis',
      link: '/analysis',
    },
  ];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const colors = ['linear-gradient(195deg, #49a3f1, #1A73E8)', 'linear-gradient(195deg, #42424a, #191919)', 'linear-gradient(195deg, #66BB6A, #43A047)', 'linear-gradient(195deg, #FFA726, #FB8C00)', 'linear-gradient(195deg, #EC407A, #D81B60)', 'linear-gradient(195deg, #EF5350, #E53935)' ]
const activeTabColor = ['#F39223', '#044d95', '#890404', '#202326', '#83062e', '#e3d20e']
const Navbar = () => {

  // States
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState(0);

  // Global variables

  // State functions and mapping functions
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleTabClickMobile = (index) => {
    setActiveTab(index);
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{background: colors[2], marginBottom: 2}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1}} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/dashboard"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 1000,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SURVEYOR
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem 
                  key={page.name} 
                  onClick={() => handleTabClickMobile(index)} 
                  component={Link} 
                  to={page.link}
                  sx={{
                    color: index === activeTab ? 'primary' : 'blue',
                  }}
                >
                    <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SURVEYOR
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page.name}
                // onClick={handleCloseNavMenu}
                onClick={() => handleTabClick(index)}
                sx={{
                  mx: .5,
                  color: index === activeTab ? activeTabColor[0] : '#ffffff', 
                  display: 'block',
                  borderBottom: index === activeTab ? `2px inset ${activeTabColor[0]}` : '2px inset #ffffff',
                  borderRadius: 0,
                }}
                component={Link}
                to={page.link}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>

            <Tooltip title="Settings">
              <IconButton size="large" padding={2} >
                  <SettingsIcon sx={{ maxWidth: '20px', height: '20px', padingLeft:2 }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginLeft: 'auto' }}>
                <Avatar alt="Moiz Ahmed" src="./statics/images/avater.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;

