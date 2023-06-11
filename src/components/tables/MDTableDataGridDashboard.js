import React from 'react'


// Material Icon
import {
  PublishedWithChangesOutlined,
  InfoOutlined,
  CloseOutlined,
  DoneOutlined,
  RunningWithErrorsOutlined,
} from '@mui/icons-material'
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';

// Material UI components
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Tooltip, Typography } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import Stack from '@mui/material/Stack';

const columns = [
  { field: 'id', headerName: 'Ticket', width: 80 },
  { field: 'user', headerName: 'User', width: 150 },
  { field: 'email', headerName: 'Email', width: 150, type: 'email' },
  { field: 'category', headerName: 'Category', width: 200 },
  { field: 'type', headerName: 'Feedback Type', width: 200 },
  { field: 'datetime', headerName: 'Elapsed Time', width: 200, type: 'datetime' },
  // {
  //   field: 'status',
  //   headerName: 'Status',
  //   width: 135,
  //   renderCell: (params) => {
  //     let toolttipText;
  //     let icon;
  //     switch (params.value) {
  //       case 'Process':
  //         icon = <PublishedWithChangesOutlined color="primary" sx={{ marginLeft: 1, marginTop: 1 }} />;
  //         toolttipText = "In process";
  //         break;
  //       case 'Close':
  //         icon = <DoneAllOutlinedIcon color="inherit" sx={{ marginLeft: 1, marginTop: 1 }} />;
  //         toolttipText = "Close";
  //         break;
  //       case 'Done':
  //         icon = <DoneOutlined color="success" sx={{ marginLeft: 1, marginTop: 1 }} />;
  //         toolttipText = "Resolved";
  //         break;
  //       case 'Pending':
  //         icon = <RunningWithErrorsOutlined color="warning" sx={{ marginLeft: 1, marginTop: 1 }} />;
  //         toolttipText = "Pending";
  //         break;
  //       default:
  //         icon = null;
  //         break;
  //     }
  //     return (
  //       <Tooltip title={toolttipText} placement="right">
  //           <span>{icon}</span>
  //       </Tooltip>
  //     );
  //   },
  // },
  { field: 'problem', headerName: 'Problem Description', width: 250 },
];

const rows = [
  { id: 1, email: 'xyz@hotmail.com', user: 'Kessie', category: 'Product', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours', type: 'Complain'  },
  { id: 2, email: 'xyz@hotmail.com', user: 'Cersei', category: 'Service', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours', type: 'Feedback' },
  { id: 3, email: 'xyz@hotmail.com', user: 'Jaime', category: 'Contract', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours', type: 'Complain' },
  { id: 4, email: 'xyz@hotmail.com', user: 'Arya', category: 'Quality of service', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours', type: 'Feedback' },
  { id: 5, email: 'xyz@hotmail.com', user: 'Daenerys', category: 'Payment', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours', type: 'Feedback' },
  { id: 6, email: 'xyz@hotmail.com', user: 'John', category: 'Product', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours', type: 'Complain' },
  { id: 7, email: 'xyz@hotmail.com', user: 'Ferrara', category: 'Contract', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours', type: 'Feedback' },
  { id: 8, email: 'xyz@hotmail.com', user: 'Rossini', category: 'Equipment', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours', type: 'Complain' },
];

const MDTableDataGrid = (props) => {
    return (
          <DataGrid
            sx={{
              maxHeight: 500,
              boxShadow: 2,
              // border: 2,
              // borderColor: 'primary.light',
              // '& .MuiDataGrid-cell:hover': {
              //   color: 'primary.main',
              // },
            }}
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10, 15, 20]}
            // checkboxSelection
            minwidth={columns.minwidth}
          />
    );
}

export default MDTableDataGrid