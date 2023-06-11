import React from 'react';
import profileImage from '../../static/images/avatar.jpg'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SaveIcon from '@mui/icons-material/Save';

// Material UI components
import { Box, Stack, Grid, IconButton, TextField, Tooltip, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const AdminProfile = () => {

  const [disableConfirm, setDisableConfirm] = React.useState(true);

  const handlePassword = (event) => {
    setDisableConfirm(false);
    console.log(event.target.value);
  }

  return (
    <Box sx={{ flexGrow: 0, p: 0.5, marginLeft: 8, marginTop: -3  }}>
        <Stack>
            <Box sx={{
            margin: {
                xs: "10px 100px -10px 10px",
                sm: "10px 100px -10px 10px",
                md: '10px 100px 10px 100px'
                }
            
            }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <Tooltip title="Upload your avatar">
                            <IconButton >
                                <input hidden accept="image/*" type="file" />
                                <Avatar
                                    alt="Remy Sharp"
                                    src={profileImage}
                                    sx={{ 
                                        width: 200, 
                                        height: 200,
                                        '&:hover': {
                                            width: 202,
                                            height: 202,
                                            transition: 'width 1s, height 1s, trasnform 2s',
                                        }
                                    }}
                                >
                                    <CloudUploadIcon />
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                       <TextField fullWidth variant='outlined' placeholder="First Name" label="First Name" defaultValue={"John"} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                       <TextField fullWidth variant='outlined' placeholder="Second Name" label="Second Name" defaultValue={"DeSouza"} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                       <TextField fullWidth variant='outlined' placeholder="xyz@gmail.com" label="Email" defaultValue={'johndesouza@xysmail.com'} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                       <TextField fullWidth variant='outlined' placeholder="09XXX-XXXXXX" label="Contact#" defaultValue={'+41 XXX XXXXX'} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                       <TextField fullWidth variant='outlined' label="Change Password" defaultValue={'xyzxyzxyzxyzxyzxyz'} type='password' onChange={handlePassword} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                       <TextField fullWidth variant='outlined' label="Confirm Password" type='password' disabled={disableConfirm} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                       <Button endIcon={<SaveIcon />} fullWidth variant='outlined' >Save</Button>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    </Box>
  )
}

export default AdminProfile