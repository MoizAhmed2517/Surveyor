import React from 'react';

// Material UI Icons
import ShareIcon from '@mui/icons-material/Share';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
// Material UI components
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { red } from '@mui/material/colors';
import SubscirbeDialog from '../Dialog/SubscirbeDialog';

const SurveyCardUser = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <Card sx={{ 
        maxWidth: 550, 
        '&:hover': {
            border: '1px solid #F39223'
                },
            }}
        >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: '#F39223' }} aria-label="Admin">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" component={props.LinkComponent} to={props.address} state={{ descr: props.title }}>
              <VisibilityOutlinedIcon />
            </IconButton>
          }
          title={props.title}
          subheader={props.date}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.descr}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share" onClick={handleClickOpen}>
            <ShareIcon />
          </IconButton>
          {
            props.status === "filled" ? 
                <Chip variant="outlined" icon={<CheckCircleOutlineOutlinedIcon sx={{ fontSize: 18, color: '#fff' }} />} label={props.status} size="small" sx={{ marginLeft: 'auto' }} color="success" /> 
                :
                <Chip icon={<CancelOutlinedIcon sx={{ fontSize: 18 }} />} label={props.status} variant="outlined" size="small" sx={{ marginLeft: 'auto' }}/> 
          }
          
        </CardActions>
        <SubscirbeDialog open={open} handleState={handleClose} />
      </Card>
    );
}

export default SurveyCardUser