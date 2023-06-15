import React from 'react'


// Material Icon
import {
  PublishedWithChangesOutlined,
  InfoOutlined,
  CloseOutlined,
  DoneOutlined,
  RunningWithErrorsOutlined,
} from '@mui/icons-material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DatasetLinkedIcon from '@mui/icons-material/DatasetLinked';

// Material UI components
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Tooltip, Typography } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import Stack from '@mui/material/Stack';
import ButtonCustom from '../miscellaneous/ButtonCustom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const columns = [
  { field: 'id', headerName: 'Customer ID', width: 100, align: 'center' },
  { field: 'name', headerName: 'Name', width: 400 },
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

const formList = [
  'New Survey Form - A',
  'New Survey Form - B',
  'New Survey Form - C',
  'New Survey Form - D',
  'New Survey Form - E',
  'New Survey Form - F',
  'New Survey Form - G',
];

const MDTableDataGrid = (props) => {
    const [selection, setSelection] = React.useState(false);
    const [selectedIds, setSelectedIds] = React.useState([]);

    const handleRowClicks = (params, events, details) => {
      setSelection(true)
      console.log(params.row);
    };

    return (
        <Stack direction="column" spacing={2}>
          <DataGrid
            sx={{
              maxHeight: 500,
            }}
            onRowClick={handleRowClicks}
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10, 15, 20]}
            checkboxSelection={selection}
            minwidth={columns.minwidth}
          />

          <Autocomplete
            fullWidth
            disablePortal
            id="combo-box-demo"
            options={formList}
            renderInput={(params) => <TextField {...params} label="Select Survey Form" />}
          />

          <ButtonCustom title="SEND LINK" iconEnd={<DatasetLinkedIcon />} size="large" fullWidth={true} color="#F39223" hoverColor="#ff8905"/>
        </Stack>
    );
}

export default MDTableDataGrid