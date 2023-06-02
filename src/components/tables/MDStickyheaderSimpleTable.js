import * as React from 'react';
import { useConfirm } from "material-ui-confirm";

// Material UI Icons
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

// Material UI component
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';

const columns = [
  { id: 'id', label: "ID", minWidth: 20 },
  { id: 'question', label: 'Question', minWidth: 10 },
  { id: 'type', label: 'Type', minWidth: 10 },
  { id: 'category', label: 'Category', minWidth: 10, align: 'left' },
];

const del = {
    id: 'del',
    label: 'Delete',
    minWidth: 17,
    align: 'center',
}

const edit = {
    id: 'edit',
    label: 'Edit',
    minWidth: 17,
    align: 'center',
}


function createData(id, question, type, category, edit, ) {
  return { id, question, type, category, edit };
}

const rows = [
  createData( 'A-23', 'Loreum ipsum how etc loreum working no yes ...', 'Multiple Choice', 'Science' ),
  createData( 'A-24', 'China', 'Short answer', 'Philosophy' ),
  createData( 'A-25', 'Italy', 'Linear Scale', 'Humanity' ),
  createData( 'A-26', 'United States', 'Paragraph', 'Technology' ),
  createData( 'A-27', 'Canada', 'Checkboxes', 'Humanity' ),
  createData( 'A-28', 'Australia', 'Linear Scale', 'Philosophy' ),
  createData( 'A-29', 'Germany', 'Multiple Choice', 'Science' ),
  createData( 'A-30', 'Ireland', 'Linear Scale', 'Technology' ),
  createData( 'A-31', 'Mexico', 'Paragraph', 'Humanity' ),
  createData( 'A-32', 'Japan', 'Multiple Choice', 'Philosophy' ),
  createData( 'A-33', 'France', 'Paragraph', 'Technology' ),
  createData( 'A-34', 'United Kingdom', 'Paragraph', 'Science' ),
  createData( 'A-35', 'Russia', 'Checkboxes', 'Humanity' ),
  createData( 'A-36', 'Nigeria', 'Linear Scale', 'Technology' ),
  createData( 'A-37', 'Brazil', 'Multiple Choice', 'Technology' ),
];

const MDStickyheaderSimpleTable = () => {

    const confirm = useConfirm();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const handleDelete = () => {
      confirm({ description: `This will permanently delete.` })
        .then(() => console.log(`deleted`))
        .catch(() => console.log("Deletion cancelled."));
    };
  
    return (
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 360 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell key={edit.id} align={edit.align} style={{ minWidth: edit.minWidth }}>
                    {edit.label}
                </TableCell>
                <TableCell key={del.id} align={del.align} style={{ minWidth: del.minWidth }}>
                    {del.label}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      <TableCell key={edit.id} align={edit.align}>
                        <IconButton><EditOutlinedIcon /></IconButton>
                      </TableCell>
                      <TableCell key={del.id} align={del.align}>
                        <IconButton onClick={handleDelete}><DeleteOutlineOutlinedIcon /></IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );
}

export default MDStickyheaderSimpleTable