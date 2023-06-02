import React from 'react';

// Material UI component
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
  
const DropDownMultipleField2 = (props) => {
  return (
    <Autocomplete
        multiple
        id="tags-outlined"
        options={props.data}
        getOptionLabel={option => option.question}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.label}
            placeholder={props.placeholder}
          />
        )}
      />
  )
}

export default DropDownMultipleField2