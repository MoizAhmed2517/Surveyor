import React from 'react';
import Badge from '@mui/material/Badge';

// Material UI Icons
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

const ReponseCard = (props) => {

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
            <IconButton aria-label="settings" >
              <BarChartOutlinedIcon />
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
          <IconButton aria-label="add to favorites" component={props.LinkComponent} to={props.address} state={{ descr: props.title }}>
              <VisibilityOutlinedIcon  />
          </IconButton>
          <Chip icon={<MessageOutlinedIcon sx={{ fontSize: 18 }} />} label="40+" variant="outlined" size="small" sx={{ marginLeft: 'auto', paddingLeft: 1 }}/>
        </CardActions>
      </Card>
    );
}

export default ReponseCard