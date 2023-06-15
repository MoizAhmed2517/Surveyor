import React from 'react';
import { useConfirm } from "material-ui-confirm";

// Material UI Icons
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ShareIcon from '@mui/icons-material/Share';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

// Material UI components
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const SurveyCard = (props) => {

    const confirm = useConfirm();

    const handleDelete = () => {
      confirm({ description: `This will permanently delete ${props.title}.` })
        .then(() => console.log(`${props.title} deleted`))
        .catch(() => console.log("Deletion cancelled."));
    };

    return (
      <Card sx={{ 
        maxWidth: 500, 
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
              <EditOutlinedIcon />
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

          <IconButton aria-label="add to favorites" onClick={handleDelete}>
              <DeleteOutlineOutlinedIcon />
          </IconButton>

          <IconButton aria-label="share" component={props.LinkComponent} to='/view-form' state={{ descr: props.title }}>
            <VisibilityOutlinedIcon />
          </IconButton>

          <IconButton aria-label="share" component={props.LinkComponent} to='/form-response' state={{ descr: props.title }}>
            <BarChartOutlinedIcon />
          </IconButton>

          <Chip icon={<MessageOutlinedIcon sx={{ fontSize: 18 }} />} label="40+" variant="outlined" size="small" sx={{ marginLeft: 'auto', paddingLeft: 1 }}/>
        
        </CardActions>
      </Card>
    );
}

export default SurveyCard