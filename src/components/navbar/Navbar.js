import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import Cookies from 'js-cookie';

// Icons
import AdbIcon from '@mui/icons-material/Adb';
import SettingsIcon from '@mui/icons-material/Settings';
import CircleIcon from '@mui/icons-material/Circle';

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
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';

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
const colors = [ 'linear-gradient(195deg, #42424a, #191919)', 'linear-gradient(195deg, #49a3f1, #1A73E8)', 'linear-gradient(195deg, #66BB6A, #43A047)', 'linear-gradient(195deg, #FFA726, #FB8C00)', 'linear-gradient(195deg, #EC407A, #D81B60)', 'linear-gradient(195deg, #EF5350, #E53935)' ]
const primaryColors = ['#42424a', '#49a3f1', '#66BB6A', '#FFA726', '#EC407A', '#EF5350']
const activeTabColor = ['#F39223', '#044d95', '#890404', '#202326', '#83062e', '#e3d20e']
const iconColor = ['#044d95', '#04951d', '#7f0495', '#6c6c6c', '#a30e0e', '#ffb100' ]

const Navbar = () => {

  // States 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElSetting, setAnchorElSetting] = React.useState(null);
  const [tabColor, setTabColor] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState(0);
  const [activeTabColors, setActiveTabColors] = React.useState(0);

  // Global variables

  // State functions and mapping functions
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenSettings = (event) => {
    setAnchorElSetting(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseSettings = (event) => {
    setAnchorElSetting(null);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleTabClickMobile = (index) => {
    setActiveTab(index);
    setAnchorElNav(null);
  };

  const handleNavColor = (event, index) => {
    setTabColor(index);
  } 

  const handleActiveTabColor = (event, index) => {
    setActiveTabColors(index);
  }

  const handleIconColor = (event, index) => {
    Cookies.set('IconColor', iconColor[index])
  }

  return (
    <AppBar position="static" sx={{background: colors[tabColor], marginBottom: 2}}>
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
                  color: index === activeTab ? activeTabColor[activeTabColors] : '#ffffff', 
                  display: 'block',
                  borderBottom: index === activeTab ? `2px inset ${activeTabColor[activeTabColors]}` : '2px inset #ffffff',
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
              <IconButton onClick={handleOpenSettings} size="large" padding={2} >
                  <SettingsIcon sx={{ maxWidth: '20px', height: '20px', padingLeft:2, color: '#FFFFFF' }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginLeft: 'auto' }}>
                <Avatar alt="Moiz Ahmed" src="./statics/images/avater.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElSetting}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElSetting)}
              onClose={handleCloseSettings}
            >

              <Stack direction="column" spacing={2} sx={{ padding: '10px 0px 0px 10px', mx: '10px'}}>
                <Typography variant="h5" >UI Configurator</Typography>
                <Divider />
                <Typography variant="button" display="block" gutterBottom>Navbar Colors</Typography>
              </Stack>

              <Stack direction="row" spacing={1} onClick={handleCloseSettings} sx={{ padding: '0px 10px 10px 10px'}}>
                {primaryColors.map((colour, index) => (
                  <IconButton key={index} onClick={(event) => handleNavColor(event, index)}>
                    <CircleIcon sx={{ color: `${colour}`, display: 'inline-flex'}} />
                  </IconButton>
                ))}
              </Stack>

              <Stack direction="column" spacing={2} sx={{ padding: '10px 0px 0px 10px', mx: '10px'}}>
                <Typography variant="button" display="block" gutterBottom>Active Tab Colors</Typography>
              </Stack>

              <Stack direction="row" spacing={1} onClick={handleCloseSettings} sx={{ padding: '0px 10px 10px 10px'}}>
                {activeTabColor.map((colour, index) => (
                  <IconButton key={index} onClick={(event) => handleActiveTabColor(event, index)}>
                    <CircleIcon sx={{ color: `${colour}`, display: 'inline-flex'}} />
                  </IconButton>
                ))}
              </Stack>

              <Stack direction="column" spacing={2} sx={{ padding: '10px 0px 0px 10px', mx: '10px'}}>
                <Typography variant="button" display="block" gutterBottom>Icon Colors</Typography>
              </Stack>

              <Stack direction="row" spacing={1} onClick={handleCloseSettings} sx={{ padding: '0px 10px 10px 10px'}}>
                {iconColor.map((colour, index) => (
                  <IconButton key={index} onClick={(event) => handleIconColor(event, index)}>
                    <CircleIcon sx={{ color: `${colour}`, display: 'inline-flex'}} />
                  </IconButton>
                ))}
              </Stack>


            </Menu>

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

