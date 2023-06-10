import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

// Material UI Component
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ButtonCustom from '../miscellaneous/ButtonCustom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        xs: 350,
        sm: 400,
        md: 450
    },
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '0.75rem',
    boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)',
    p: 4,
  };

const menu = [
    {value: 'Process', name: 'In Process'},
    {value: 'Close', name: 'Close'},
    {value: 'Done', name: 'Resolved'},
    {value: 'Pending', name: 'Pending'},
]

const ComplainModal = (props) => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
      <Modal
          open={props.openModal}
          onClose={props.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
              <Grid container spacing={2}> 
                  <Grid item xs={12}>
                    <Typography variant="h4" textAlign="center" sx={{  color: '#646464' }}>{`Ticket# ${props.data.id} `}</Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={12} md={6} textAlign="justify">
                    <TextField id='text-para1' label="User" variant="standard" fullWidth defaultValue={props.data.user} />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} textAlign="justify">
                    <TextField id='text-para2' label="Email" variant="standard" fullWidth defaultValue={props.data.email} />
                  </Grid>

                  <Grid item xs={12} textAlign="justify">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Change Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Change Status"
                            onChange={handleChange}
                        >
                            {menu.map((item, index) => (
                                <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
                                )
                            )}
                        </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} textAlign="justify">
                    <TextField id='text-para3' label="Problem Description" variant="standard" fullWidth defaultValue={props.data.problem} multiline />
                  </Grid>

                  <Grid item xs={12} textAlign="justify">
                    <ButtonCustom title="SAVE" iconEnd={<SaveOutlinedIcon />} size="large" fullWidth={true} color="#F39223" hoverColor="#ff8905" />
                  </Grid>
                  
              </Grid>
          </Box>
      </Modal>
    )
}

export default ComplainModal