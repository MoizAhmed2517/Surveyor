import * as React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

// Icons
import SettingsIcon from '@mui/icons-material/Settings';
import CircleIcon from '@mui/icons-material/Circle';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

// Material UI elements
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

// Pages
const pages = [
    {
      name: 'Dashboard',
      link: '/dashboard',
      icon: <AddAPhotoOutlinedIcon />,
    },
    {
      name: 'Survey',
      link: '/survey',
      icon: <InboxIcon />,
    },
    {
      name: 'Response',
      link: '/response',
      icon: <MailIcon />,
      subItems: [
        {
          name: 'Sub Item 1',
          link: '/response/subitem1',
        },
        {
          name: 'Sub Item 2',
          link: '/response/subitem2',
        },
      ],
    },
    {
      name: 'Complain',
      link: '/complain',
      icon: <AddAPhotoOutlinedIcon />,
    },
  ];

const settings = ['My profile', 'Logout'];
const colors = [ 'linear-gradient(195deg, #49a3f1, #1A73E8)', 'linear-gradient(195deg, #42424a, #191919)', 'linear-gradient(195deg, #66BB6A, #43A047)', 'linear-gradient(195deg, #FFA726, #FB8C00)', 'linear-gradient(195deg, #EC407A, #D81B60)', 'linear-gradient(195deg, #EF5350, #E53935)' ]
const primaryColors = [ '#49a3f1', '#42424a', '#66BB6A', '#FFA726', '#EC407A', '#EF5350']
const activeTabColor = ['#F39223', '#044d95', '#890404', '#202326', '#83062e', '#e3d20e']
const iconColor = ['#044d95', '#04951d', '#7f0495', '#6c6c6c', '#a30e0e', '#ffb100' ]

const Sidebar = () => {
    const theme = useTheme();
    const timeoutRef = React.useRef(null);
    // States 
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElSetting, setAnchorElSetting] = React.useState(null);
    const [tabColor, setTabColor] = React.useState(0);
    const [activeTab, setActiveTab] = React.useState(0);
    const [activeTabColors, setActiveTabColors] = React.useState(0);
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

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

    const handleMouseEnter = () => {
        setOpen(true);
      };
      
    const handleMouseLeave = () => {
    // Add a delay of 200 milliseconds before closing the menu
    timeoutRef.current = setTimeout(() => {
        setOpen(false);
    }, 200);
    };
      
    const handleMouseMove = () => {
    // Clear the timeout to prevent closing the menu
    clearTimeout(timeoutRef.current);
    };
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <AppBar position="fixed" sx={{ background: colors[tabColor] }}>
          <Toolbar>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={()=> setOpen(!open)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>

            {/* App bar main icon -- desktop */}
            <Typography
                variant="h5"
                noWrap
                sx={{
                ml: 4,
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

            {/* App bar main icon -- mobile */}
            <Typography
                variant="h5"
                noWrap
                sx={{
                ml: 4,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 900,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
                textAlign: 'center',
                justifyContent: { xs: 'center' },
                }}
            >
            SURVEYOR
            </Typography>

            <Box sx={{ marginLeft: 'auto' }}>

                <Tooltip title="Settings">
                <IconButton onClick={handleOpenSettings} size="large" padding={2} >
                    <SettingsIcon sx={{ maxWidth: '20px', height: '20px', padingLeft:2, color: '#FFFFFF' }} />
                </IconButton>
                </Tooltip>

                <Tooltip title="Profile">
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
                    <Typography textAlign="center" component={Link} to="/" sx={{ textDecoration : 'None' }}>{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>

            </Box>

          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            {/* <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronRightIcon />}
            </IconButton> */}
          </DrawerHeader>
          <Divider />
          <List>
            {pages.map((item, index) => {
                console.log((item.subItems && open) && item.subItems) 
                return(
                    <Tooltip key={index} title={item.name} placement='bottom-end'>
                        <ListItem  disablePadding sx={{ display: 'block', my: 0.5 }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    borderRight: index === activeTab ? `3px inset ${activeTabColor[activeTabColors]}` : '2px inset #ffffff',
                                    borderRadius: 0,
                                    color: index === activeTab && activeTabColor[activeTabColors], 
                                }}
                                component={Link}
                                to={item.link}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                                onClick={() => handleTabClick(index)}
                                >
                                <ListItemIcon
                                    sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: index === activeTab && activeTabColor[activeTabColors],
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} component={Link} to={item.link} />
                            </ListItemButton>
                        </ListItem>
                    </Tooltip>
                )

                
            })}
          </List>
          
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

        </Box>

      </Box>
    );
}

export default Sidebar