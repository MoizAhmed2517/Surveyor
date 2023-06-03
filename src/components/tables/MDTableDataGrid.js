import React from 'react'


// Material Icon
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


// Material UI components
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Tooltip, Typography } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import Stack from '@mui/material/Stack';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'questions', headerName: 'Questions', width: 250 },
  { field: 'type', headerName: 'Question Type', width: 150 },
  {
    field: 'category',
    headerName: 'Category',
    width: 135,
  },
];

const rows = [
  { id: 1, type: 'Multiple Choice', questions: 'Loreum ipsum how etc loreum working no yes ...', category: 'Science' },
  { id: 2, type: 'Lannister', questions: 'Cersei', category: 'Science' },
  { id: 3, type: 'Lannister', questions: 'Jaime', category: 'Science' },
  { id: 4, type: 'Stark', questions: 'Arya', category: 'Science' },
  { id: 5, type: 'Targaryen', questions: 'Daenerys', category: 'Science' },
  { id: 6, type: 'Melisandre', questions: null, category: 'Science' },
  { id: 7, type: 'Clifford', questions: 'Ferrara', category: 'Science' },
  { id: 8, type: 'Frances', questions: 'Rossini', category: 'Science' },
  { id: 9, type: 'Roxie', questions: 'Harvey', category: 'Science' },
];

const MDTableDataGrid = (props) => {
    return (
        <Paper sx={{
            width: '100%', 
            overflow: 'hidden',
            boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)',
            marginLeft: {
              xs: 0,
              sm: 0,
              md: '8px',
            },
            marginBottom: 2,
          }}
        >
          <Card sx={{ 
            border: 0, 
            borderRadius: 0, 
            // boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)', 
            }}>
            <CardContent sx={{ marginBottom: -1 }}>
              <Stack direction="row" spacing={1}>
              <Typography variant='h6' sx={{ marginTop: -0.55, color: '#646464'}} >KPI heading</Typography>
              <Tooltip title={props.descr}>
                  <InfoOutlinedIcon sx={{ color: '#646464'}} />
              </Tooltip>
              </Stack>
            </CardContent>
          </Card>

          <DataGrid
          sx={{ maxHeight: 390 }}
          rows={rows}
          columns={columns}
          initialState={{
              pagination: {
              paginationModel: { page: 0, pageSize: 5 },
              },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          minwidth={columns.minwidth}
          />
        </Paper>
    );
}

export default MDTableDataGrid