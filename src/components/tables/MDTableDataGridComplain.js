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
  { field: 'id', headerName: 'Ticket', width: 80 },
  { field: 'user', headerName: 'User', width: 150 },
  { field: 'email', headerName: 'Email', width: 150, type: 'email' },
  { field: 'category', headerName: 'Category', width: 135 },
  { field: 'datetime', headerName: 'Elapsed Time', width: 150, type: 'datetime' },
  {
    field: 'status',
    headerName: 'Status',
    width: 135,
    renderCell: (params) => {
      let toolttipText;
      let icon;
      switch (params.value) {
        case 'Process':
          icon = <PublishedWithChangesOutlined color="primary" sx={{ marginLeft: 1, marginTop: 1 }} />;
          toolttipText = "In process";
          break;
        case 'Close':
          icon = <DoneAllOutlinedIcon color="inherit" sx={{ marginLeft: 1, marginTop: 1 }} />;
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
  { field: 'problem', headerName: 'Problem Description', width: 250 },
];

const rows = [
  { id: 1, email: 'xyz@hotmail.com', user: 'Kessie', category: 'Product', status: 'Process', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours'  },
  { id: 2, email: 'xyz@hotmail.com', user: 'Cersei', category: 'Service', status: 'Close', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 3, email: 'xyz@hotmail.com', user: 'Jaime', category: 'Contract', status: 'Pending', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 4, email: 'xyz@hotmail.com', user: 'Arya', category: 'Quality of service', status: 'Pending', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 5, email: 'xyz@hotmail.com', user: 'Daenerys', category: 'Payment', status: 'Process', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 6, email: 'xyz@hotmail.com', user: 'John', category: 'Product', status: 'Done', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 7, email: 'xyz@hotmail.com', user: 'Ferrara', category: 'Contract', status: 'Done', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 8, email: 'xyz@hotmail.com', user: 'Rossini', category: 'Equipment', status: 'Process', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 9, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 10, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done' , problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours'},
  { id: 11, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 12, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 13, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 14, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 15, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 16, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 17, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 18, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 19, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
  { id: 20, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', problem: 'Loreum ipsum 123 testing description', datetime: '2 Days, 3 hours' },
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
            }}
            onRowClick={handleRowClicks}
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

          <ComplainModal openModal={open} handleClose={handleCloseModal} setOpenState={setOpen} data={selectedRow} />
        </>
    );
}

export default MDTableDataGrid