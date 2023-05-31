import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const PageNumber = (props) => {
  return (
    <Stack spacing={2}>
        <Pagination 
          // count={props.totalPostCount}
          count={10}
          // variant="outlined"
          // color='primary'
          shape="rounded"
          size="large"
          // onChange={props.handleCurrentPage}
        />
    </Stack>
  )
}

export default PageNumber