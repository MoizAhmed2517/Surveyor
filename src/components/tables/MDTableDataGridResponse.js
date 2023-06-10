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
import ComplainModal from '../Modal/ComplainModal';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'user', headerName: 'User', width: 200 },
  { field: 'email', headerName: 'Email', width: 350, type: 'email' },
  { field: 'datetime', headerName: 'Elapsed Time', width: 250, type: 'datetime' },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderCell: (params) => {
      let toolttipText;
      let icon;
      switch (params.value) {
        case 'Filled':
          icon = <DoneOutlined color="success" sx={{ marginLeft: 1, marginTop: 1 }} />;
          toolttipText = "Filled";
          break;
        case 'NotFilled':
          icon = <CloseOutlined color="error" sx={{ marginLeft: 1, marginTop: 1 }} />;
          toolttipText = "Not Filled";
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
  { id: 1, email: 'kessie.smith@xyzcompany.com', user: 'Kessie',  status: 'NotFilled',  datetime: '2 Days, 3 hours'  },
  { id: 2, email: 'xyz@hotmail.com', user: 'Cersei',  status: 'Filled',  datetime: '2 Days, 3 hours' },
  { id: 3, email: 'xyz@hotmail.com', user: 'Jaime',  status: 'NotFilled',  datetime: '2 Days, 3 hours' },
  { id: 4, email: 'xyz@hotmail.com', user: 'Arya', status: 'NotFilled',  datetime: '2 Days, 3 hours' },
  { id: 5, email: 'xyz@hotmail.com', user: 'Daenerys',  status: 'NotFilled',  datetime: '2 Days, 3 hours' },
  { id: 6, email: 'xyz@hotmail.com', user: 'John',  status: 'Filled',  datetime: '2 Days, 3 hours' },
  { id: 7, email: 'xyz@hotmail.com', user: 'Ferrara',  status: 'Filled',  datetime: '2 Days, 3 hours' },
  { id: 8, email: 'xyz@hotmail.com', user: 'Rossini',  status: 'NotFilled',  datetime: '2 Days, 3 hours' },
  { id: 9, email: 'xyz@hotmail.com', user: 'Harvey', status: 'NotFilled',  datetime: '2 Days, 3 hours' },
  { id: 10, email: 'xyz@hotmail.com', user: 'Harvey', status: 'Filled' ,  datetime: '2 Days, 3 hours'},
  { id: 11, email: 'xyz@hotmail.com', user: 'Harvey', status: 'Filled',  datetime: '2 Days, 3 hours' },
  { id: 12, email: 'xyz@hotmail.com', user: 'Harvey', status: 'Filled',  datetime: '2 Days, 3 hours' },
  { id: 13, email: 'xyz@hotmail.com', user: 'Harvey', status: 'Filled',  datetime: '2 Days, 3 hours' },
  { id: 14, email: 'xyz@hotmail.com', user: 'Harvey', status: 'Filled',  datetime: '2 Days, 3 hours' },
  { id: 15, email: 'xyz@hotmail.com', user: 'Harvey', status: 'NotFilled',  datetime: '2 Days, 3 hours' },
  { id: 16, email: 'xyz@hotmail.com', user: 'Harvey', status: 'Filled',  datetime: '2 Days, 3 hours' },
  { id: 17, email: 'xyz@hotmail.com', user: 'Harvey', status: 'Filled',  datetime: '2 Days, 3 hours' },
  { id: 18, email: 'xyz@hotmail.com', user: 'Harvey', status: 'NotFilled',  datetime: '2 Days, 3 hours' },
  { id: 19, email: 'xyz@hotmail.com', user: 'Harvey', status: 'Filled',  datetime: '2 Days, 3 hours' },
  { id: 20, email: 'xyz@hotmail.com', user: 'Harvey', status: 'Filled',  datetime: '2 Days, 3 hours' },
];

const MDTableDataGrid = (props) => {

    const [selectedRow, setSelectedRow] = React.useState({});
    const [open, setOpen] = React.useState(false);

    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    const handleRowClicks = (params) => {
      handleOpenModal();
      setSelectedRow(params.row)
    }

    return (
        <>
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
            // onRowClick={handleRowClicks}
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 10 },
                },
            }}
            pageSizeOptions={[5, 10, 15, 20]}
            // checkboxSelection
            minwidth={columns.minwidth}
          />

          {/* <ComplainModal openModal={open} handleClose={handleCloseModal} setOpenState={setOpen} data={selectedRow} /> */}
        </>
    );
}

export default MDTableDataGrid