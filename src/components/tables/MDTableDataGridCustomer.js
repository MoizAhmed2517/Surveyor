import React from 'react'


// Material Icon
import {
  PublishedWithChangesOutlined,
  InfoOutlined,
  CloseOutlined,
  DoneOutlined,
  RunningWithErrorsOutlined,
} from '@mui/icons-material'

// Material UI components
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Tooltip, Typography } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import Stack from '@mui/material/Stack';

const columns = [
  { field: 'id', headerName: 'Customer ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 350 },
  { field: 'email', headerName: 'email', width: 350 },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderCell: (params) => {
      let toolttipText;
      let icon;
      switch (params.value) {
        case 'Assign':
          icon = <DoneOutlined color="success" sx={{ marginLeft: 1, marginTop: 1 }} />;
          toolttipText = "In process";
          break;
        case 'Not Assign':
          icon = <CloseOutlined color="error" sx={{ marginLeft: 1, marginTop: 1 }} />;
          toolttipText = "Close";
          break;
        default:
          icon = null;
          break;
      }
      return (
        <Tooltip title={toolttipText} placement="right">
            <span>{icon}</span>
        </Tooltip>
      );
    },
  },
];

const rows = [
  { id: 1, name: 'John Smith', email: 'jsmith@exmaple.com', status: "Assign"},
  { id: 2, name: 'Kluster Smith', email: 'jsmith@exmaple.com', status: "Assign"},
  { id: 3, name: 'Jessie Jonas', email: 'jsmith@exmaple.com', status: "Not Assign" },
  { id: 4, name: 'Jimm Scott', email: 'jsmith@exmaple.com', status: "Assign"},
  { id: 5, name: 'Lena paul', email: 'jsmith@exmaple.com', status: "Assign"},
  { id: 6, name: 'Madison Smith', email: 'jsmith@exmaple.com', status: "Not Assign"},
  { id: 7, name: 'Tom Cruise', email: 'jsmith@exmaple.com', status: "Assign"},
];

const MDTableDataGrid = (props) => {
    return (
          <DataGrid
            sx={{
              maxHeight: 500,
              boxShadow: 2,
              border: 2,
              borderColor: 'primary.light',
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
              },
            }}
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10, 15, 20]}
            checkboxSelection
            minwidth={columns.minwidth}
          />
    );
}

export default MDTableDataGrid