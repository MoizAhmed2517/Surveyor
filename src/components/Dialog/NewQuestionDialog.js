import * as React from 'react';

// Icons
import CloseIcon from '@mui/icons-material/Close';

// Material UI components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const formList = [
    'Multiple Choice',
    'Check boxes',
    'Range between linear scale',
    'Linear scale',
    'Short answer',
    'Paragraph',
];

// const formList = [
//     {id: 0, name: 'Multiple Choice'},
//     {id: 1, name: 'Check boxes'},
//     {id: 2, name: 'Range between linear scale'},
//     {id: 3, name: 'Linear scale'},
//     {id: 4, name: 'Short answer'},
//     {id: 5, name: 'Paragraph'},
// ];

const formCategory = [
    'Science',
    'Philosophy',
    'Management',
];

const NewQuestionDialog = (props) => {

    const [selectType, setSelectType] = React.useState('');
    const [multipleChoise, setMultipleChoices] = React.useState(false);
    const [checkbox, setCheckbox] = React.useState(false);
    // const [range, setRange] = React.useState(false);
    // const [short, setShort] = React.useState(false);
    // const [paragraph, setParagraph] = React.useState(false);
    // const [linear, setLinear] = React.useState(false);
 
    const handleStateChangeQuestion = (event, value) => {
        setSelectType(value);
        setMultipleChoices(value === "Multiple Choice");
        setCheckbox(value === "Check boxes");
    }

    const handleStateChangeCategory = (event, value) => {
        // console.log(value);
    }

    React.useEffect(() => {
        if (selectType === "Multiple Choice") {
            setMultipleChoices(true)
        } else if (selectType === "Check boxes"){
            setCheckbox(true)
        }
    }, [selectType])

    return (
        <Dialog
        //   fullScreen
          maxWidth="lg"
          open={props.open}
          onClose={props.handleState}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative', background: '#F39223' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={props.handleState}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Create New Question
              </Typography>
              <Button autoFocus color="inherit" onClick={props.handleState}>
                add
              </Button>
            </Toolbar>
          </AppBar>

          <Grid container spacing={2} sx={{p: 2 }}>
            <Grid item xs={12} sm={6} md={6}>
                <Autocomplete
                    fullWidth
                    disablePortal
                    id="combo-box-demo"
                    options={formCategory}
                    // defaultValue={"Hello"}
                    renderInput={(params) => <TextField {...params} label="Select Category" />}
                    onChange={handleStateChangeCategory}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Autocomplete
                    fullWidth
                    disablePortal
                    id="combo-box-demo"
                    options={formList}
                    renderInput={(params) => <TextField {...params} label="Select Question Type" />}
                    onChange={handleStateChangeQuestion}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField fullWidth label="Question" variant='outlined' ></TextField>
            </Grid>
          </Grid>

          {
            multipleChoise === true && (
                <Grid container spacing={2} sx={{p: 2 }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField fullWidth label="Option 1" variant='outlined' ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField fullWidth label="Option 2" variant='outlined' ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField fullWidth label="Option 3" variant='outlined' ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField fullWidth label="Option 4" variant='outlined' ></TextField>
                    </Grid>
                </Grid>
                
            )
          }

        {
            checkbox === true && (
                <Grid container spacing={2} sx={{p: 2 }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField fullWidth label="Option 1" variant='outlined' ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField fullWidth label="Option 2" variant='outlined' ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField fullWidth label="Option 3" variant='outlined' ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField fullWidth label="Option 4" variant='outlined' ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField fullWidth label="Option 5" variant='outlined' ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField fullWidth label="Option 6" variant='outlined' ></TextField>
                    </Grid>
                </Grid>
                
            )
          }

        </Dialog>
    );
}

export default NewQuestionDialog