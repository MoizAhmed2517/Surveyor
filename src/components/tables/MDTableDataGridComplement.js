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
  { field: 'email', headerName: 'Email', width: 250, type: 'email' },
  { field: 'datetime', headerName: 'Date', width: 130, type: 'datetime' },
  { field: 'feedback', headerName: 'Feedback', width: 350 },
];

const rows = [
  { id: 1, email: 'xyz@hotmail.com', user: 'S. Kessie Smith', category: 'Product', status: 'Process', feedback: 'Loreum ipsum 123 testing description Loreum ipsum 123 testing description Loreum ipsum 123 testing description Loreum ipsum 123 testing description Loreum ipsum 123 testing description', datetime: '23/3/2023'  },
  { id: 2, email: 'xyz@hotmail.com', user: 'Cersei', category: 'Service', status: 'Close', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 3, email: 'xyz@hotmail.com', user: 'Jaime', category: 'Contract', status: 'Pending', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 4, email: 'xyz@hotmail.com', user: 'Arya', category: 'Quality of service', status: 'Pending', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 5, email: 'xyz@hotmail.com', user: 'Daenerys', category: 'Payment', status: 'Process', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 6, email: 'xyz@hotmail.com', user: 'John', category: 'Product', status: 'Done', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 7, email: 'xyz@hotmail.com', user: 'Ferrara', category: 'Contract', status: 'Done', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 8, email: 'xyz@hotmail.com', user: 'Rossini', category: 'Equipment', status: 'Process', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 9, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 10, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done' , feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023'},
  { id: 11, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 12, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 13, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 14, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 15, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 16, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 17, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 18, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 19, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
  { id: 20, email: 'xyz@hotmail.com', user: 'Harvey', category: 'Quality of service', status: 'Done', feedback: 'Loreum ipsum 123 testing description', datetime: '23/3/2023' },
];

const MDTableDataGrid = (props) => {

    // const [selectedRow, setSelectedRow] = React.useState({});
    // const [open, setOpen] = React.useState(false);

    // const handleOpenModal = () => setOpen(true);
    // const handleCloseModal = () => setOpen(false);

    // const handleRowClicks = (params) => {
    //   handleOpenModal();
    //   setSelectedRow(params.row)
    // }

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