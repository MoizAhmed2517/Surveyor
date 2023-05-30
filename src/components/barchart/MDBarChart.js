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
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'city',
    yField: 'value',
    seriesField: 'type',
    isGroup: true,
    columnStyle: {
      radius: [10, 10, 0, 0],
    },
    legend: {
      position: 'top',
    },
  };

  const chartStyle = { height: 250 };

  return (
    <Card sx={{ marginLeft: 1, marginRight: 1, marginBottom: 2, border: '0 solid rgba(0, 0, 0, 0.125)', borderRadius: '0.5rem', boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)' }}>
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Typography variant='h6' sx={{ marginTop: -0.55, color: '#646464'}} >KPI heading</Typography>
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