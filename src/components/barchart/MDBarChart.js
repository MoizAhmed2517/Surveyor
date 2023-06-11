import React, {useEffect, useState} from 'react';

// Ant Charts
import { Column } from '@ant-design/plots';

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

const MDBarChart = (props) => {
  const data = [
    {
      name: 'Sent',
      survey: 'Survey 1',
      kpi: 100,
    },
    {
      name: 'Sent',
      survey: 'Survey 2',
      kpi: 75,
    },
    {
      name: 'Sent',
      survey: 'Survey 3',
      kpi: 40,
    },
    {
      name: 'Sent',
      survey: 'Survey 4',
      kpi: 57,
    },
    {
      name: 'Sent',
      survey: 'Survey 5',
      kpi: 67,
    },
    {
      name: 'Sent',
      survey: 'Survey 6',
      kpi: 68,
    },
    {
      name: 'Receive',
      survey: 'Survey 1',
      kpi: 98,
    },
    {
      name: 'Receive',
      survey: 'Survey 2',
      kpi: 20,
    },
    {
      name: 'Receive',
      survey: 'Survey 3',
      kpi: 39,
    },
    {
      name: 'Receive',
      survey: 'Survey 4',
      kpi: 8,
    },
    {
      name: 'Receive',
      survey: 'Survey 5',
      kpi: 47,
    },
    {
      name: 'Receive',
      survey: 'Survey 6',
      kpi: 28,
    },
  ];

  const config = {
    data,
    isGroup: true,
    xField: 'survey',
    yField: 'kpi',
    seriesField: 'name',

    columnStyle: {
      radius: [10, 10, 0, 0],
    },

    legend: {
      position: 'top',
    },

    /** 设置颜色 */
    //color: ['#1ca9e6', '#f88c24'],

    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        }, 
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  const chartStyle = { height: 250 };

  return (
    <Card sx={{ marginLeft: 1, marginRight: 1, marginBottom: 2, border: '0 solid rgba(0, 0, 0, 0.125)', borderRadius: '0.5rem', boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)' }}>
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Typography variant='h6' sx={{ marginTop: -0.55, color: '#646464'}} >Suvrey Wise Response</Typography>
          <Tooltip title={props.descr}>
            <InfoOutlinedIcon sx={{ color: '#646464'}} />
          </Tooltip>
        </Stack>
      </CardContent>

      <Divider sx={{ margin: "0px 15px 0px 15px" }}/>

      <CardContent>
          <div style={chartStyle}>
            <Column {...config} />
          </div>
      </CardContent>
    </Card>
  )
}

export default MDBarChart