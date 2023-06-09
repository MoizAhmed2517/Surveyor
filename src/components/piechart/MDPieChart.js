import React from 'react';

// Ant Charts
import { Pie } from '@ant-design/plots';

// Material UI Icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// Material UI components
import { Box, Stack, Tooltip, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';

const MDPieChart = (props) => {
    const data = [
        {
          type: 'In Process',
          value: 27,
        },
        {
          type: 'Resolved',
          value: 25,
        },
        {
          type: 'Pending',
          value: 18,
        },
        {
          type: 'Close',
          value: 15,
        }
      ];
      const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.7,
        label: {
          type: 'outer',
          content: '{name} {percentage}',
        },
        interactions: [
          {
            type: 'pie-legend-active',
          },
          {
            type: 'element-active',
          },
        ],
        legend: {
            position: 'top',
          },
      };

      const chartStyle = { height: 250 };

  return (
    <Card sx={{ marginLeft: 1, marginRight: 1, marginBottom: 2, border: '0 solid rgba(0, 0, 0, 0.125)', borderRadius: '0.5rem', boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)' }}>
      
      <CardContent>
        <Stack direction="row" spacing={1}>
          <Typography variant='h6' sx={{ marginTop: -0.55, color: '#646464'}} >Complain Status</Typography>
          <Tooltip title={props.descr}>
            <InfoOutlinedIcon sx={{ color: '#646464'}} />
          </Tooltip>
        </Stack>
      </CardContent>

      <Divider sx={{ margin: "0px 15px 0px 15px" }}/>
      

      <CardContent >
        <div style={chartStyle}>
          <Pie {...config} sx={{ marginTop: 20}} />
        </div>
          
      </CardContent>

    </Card>
  )
}

export default MDPieChart