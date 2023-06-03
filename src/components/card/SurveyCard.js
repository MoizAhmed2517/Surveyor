import React from 'react';
import { useConfirm } from "material-ui-confirm";

// Material UI Icons
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ShareIcon from '@mui/icons-material/Share';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

// Material UI components
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const SurveyCard = (props) => {

    const confirm = useConfirm();

    const handleDelete = () => {
      confirm({ description: `This will permanently delete ${props.title}.` })
        .then(() => console.log(`${props.title} deleted`))
        .catch(() => console.log("Deletion cancelled."));
    };

    return (
      <Card sx={{ 
        maxWidth: 435, 
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
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
}

export default SurveyCard