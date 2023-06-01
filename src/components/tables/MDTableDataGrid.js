import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Tooltip } from '@mui/material';
const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'questions', headerName: 'Questions', width: 345 },
  { field: 'type', headerName: 'Question Type', width: 150 },
  {
    field: 'category',
    headerName: 'Age',
    width: 150,
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

const MDTableDataGrid = () => {
    return (
        <Paper sx={{ height: 371, width: '100%', overflow: 'hidden' }}>
            <DataGrid
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