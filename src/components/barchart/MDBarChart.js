import React from 'react';

// Ant Charts
import { Column } from '@ant-design/plots';

// Material UI Icons
import PollIcon from '@mui/icons-material/Poll';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';

// Material UI components
import { Box, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';

const MDBarChart = () => {
    const data = [
        {
          type: '1-3秒',
          value: 0.16,
        },
        {
          type: '4-10秒',
          value: 0.125,
        },
        {
          type: '11-30秒',
          value: 0.24,
        },
        {
          type: '31-60秒',
          value: 0.19,
        },
        {
          type: '1-3分',
          value: 0.22,
        },
        {
          type: '3-10分',
          value: 0.05,
        },
        {
          type: '10-30分',
          value: 0.01,
        },
        {
          type: '30+分',
          value: 0.015,
        },
      ];
      const paletteSemanticRed = '#F4664A';
      const brandColor = '#5B8FF9';
      const config = {
        data,
        xField: 'type',
        yField: 'value',
        seriesField: '',
        color: ({ type }) => {
          if (type === '10-30分' || type === '30+分') {
            return paletteSemanticRed;
          }
    
          return brandColor;
        },
        label: {
          content: (originData) => {
            const val = parseFloat(originData.value);
    
            if (val < 0.05) {
              return (val * 100).toFixed(1) + '%';
            }
          },
          offset: 10,
        },
        legend: false,
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
      };

  return (
    <Card sx={{ marginLeft: 1, marginRight: 1, marginBottom: 2, border: '0 solid rgba(0, 0, 0, 0.125)', borderRadius: '0.25rem', boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)' }}>
        <CardContent>
            <Column {...config} />
        </CardContent>
    </Card>
  )
}

export default MDBarChart