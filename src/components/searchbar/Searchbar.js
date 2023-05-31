import React from 'react';

// MUI Icons


// MUI components
import { Box, Paper, Container, Grid, FormControl, InputLabel, Select } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "5px",
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)',
    },
    width: '80%',
    aligntItem: 'center',
    margin: '10px auto', // Center the search bar horizontally
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#F39223',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
     color: 'inherit',
     backgroundColor: 'rgba(255, 255, 255, 0.1)',
     borderRadius: '10px',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: '100%',
      
    },
  }));

const Searchbar = () => {

    const [search, setSearch] = React.useState("");

    const handleSearch = (e) => {
        const filtername = e.target.value.toLowerCase();
    }

  return (
    <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder='Search...'
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearch}
                fullWidth
            />
            </Search>
        </Grid>
    </Grid>
  )
}

export default Searchbar