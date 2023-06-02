import React from 'react';

// Ant Charts
import { DualAxes } from '@ant-design/plots';

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
    const uvBillData = [
        {
          time: '2019-03',
          value: 350,
          type: 'uv',
        },
        {
          time: '2019-04',
          value: 900,
          type: 'uv',
        },
        {
          time: '2019-05',
          value: 300,
          type: 'uv',
        },
        {
          time: '2019-06',
          value: 450,
          type: 'uv',
        },
        {
          time: '2019-07',
          value: 470,
          type: 'uv',
        },
        {
          time: '2019-03',
          value: 220,
          type: 'bill',
        },
        {
          time: '2019-04',
          value: 300,
          type: 'bill',
        },
        {
          time: '2019-05',
          value: 250,
          type: 'bill',
        },
        {
          time: '2019-06',
          value: 220,
          type: 'bill',
        },
        {
          time: '2019-07',
          value: 362,
          type: 'bill',
        },
      ];
      const transformData = [
        {
          time: '2019-03',
          count: 800,
        },
        {
          time: '2019-04',
          count: 600,
        },
        {
          time: '2019-05',
          count: 400,
        },
        {
          time: '2019-06',
          count: 380,
        },
        {
          time: '2019-07',
          count: 220,
        },
      ];
      const config = {
        data: [uvBillData, transformData],
        xField: 'time',
        yField: ['value', 'count'],
        geometryOptions: [
          {
            geometry: 'column',
            isStack: true,
            seriesField: 'type',
          },
          {
            geometry: 'line',
          },
        ],
        legend: {
            position: 'top',
        }
      };

      const chartStyle = { height: 330 };

  return (
    <Card sx={{ marginLeft: 1, marginRight: 1, marginBottom: 2, border: '0 solid rgba(0, 0, 0, 0.125)', borderRadius: '0.5rem', boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)' }}>
      
      <CardContent>
        <Stack direction="row" spacing={1}>
          <Typography variant='h6' sx={{ marginTop: -0.55, color: '#646464'}} >KPI heading</Typography>
          <Tooltip title={props.descr}>
            <InfoOutlinedIcon sx={{ color: '#646464'}} />
          </Tooltip>
        </Stack>
      </CardContent>

      <Divider sx={{ margin: "0px 15px 0px 15px" }}/>
      

      <CardContent >
        <div style={chartStyle}>
          <DualAxes {...config} />
        </div>
      </CardContent>

    </Card>
  )
}

export default MDPieChart