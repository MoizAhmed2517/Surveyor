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
  { field: 'id', headerName: 'Ticket', width: 100 },
  { field: 'category', headerName: 'Category', width: 200 },
  { field: 'datetime', headerName: 'Elapsed Time', width: 200, type: 'datetime' },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderCell: (params) => {
      let toolttipText;
      let icon;
      switch (params.value) {
        case 'Process':
          icon = <PublishedWithChangesOutlined color="primary" sx={{ marginLeft: 1, marginTop: 1 }} />;
          toolttipText = "In process";
          break;
        case 'Close':
          icon = <CloseOutlined color="error" sx={{ marginLeft: 1, marginTop: 1 }} />;
          toolttipText = "Close";
          break;
        case 'Done':
          icon = <DoneOutlined color="success" sx={{ marginLeft: 1, marginTop: 1 }} />;
          toolttipText = "Resolved";
          break;
        case 'Pending':
          icon = <RunningWithErrorsOutlined color="warning" sx={{ marginLeft: 1, marginTop: 1 }} />;
          toolttipText = "Pending";
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
  { field: 'problem', headerName: 'Problem Description', width: 350 },
];

const rows = [
  { id: 1, category: 'Product', status: 'Process', problem: 'Loreum ipsum 123 testing description Loreum ipsum 123 testing descriptionLoreum ipsum 123 testing description', datetime: '2 Days, 3 hours'  },
  { id: 2, category: 'Service', status: 'Close', problem: 'Loreum ipsum 123 testing descriptionLoreum ipsum 123 testing descriptionLoreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 3, category: 'Contract', status: 'Pending', problem: 'Loreum ipsum 123 testing descriptionLoreum ipsum 123 testing descriptionLoreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 4, category: 'Quality of service', status: 'Pending', problem: 'Loreum ipsum 123 testing descriptionLoreum ipsum 123 testing descriptionLoreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 5, category: 'Payment', status: 'Process', problem: 'Loreum ipsum 123 testing descriptionLoreum ipsum 123 testing descriptionLoreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 6, category: 'Product', status: 'Done', problem: 'Loreum ipsum 123 testing descriptionLoreum ipsum 123 testing descriptionLoreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 7, category: 'Contract', status: 'Done', problem: 'Loreum ipsum 123 testing descriptionLoreum ipsum 123 testing descriptionLoreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
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