import React from 'react';

// Material UI components
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

const MDCardKPI = () => {
  return (
    <Card sx={{ marginLeft: 1, marginRight: 1 }}>
        <Box display="flex" justifyContent="space-between" pt={1} px={2}> 
             <Typography>Hello I am box</Typography>
        </Box>
    </Card>
  )
}

export default MDCardKPI