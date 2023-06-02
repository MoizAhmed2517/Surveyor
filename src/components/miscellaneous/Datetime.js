import React from 'react'
import dayjs from 'dayjs';

// Material UI components
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

const Datetime = (props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={[
              'MobileDateTimePicker',
            ]}
          >
            <DemoItem label={props.label}>
              <MobileDateTimePicker defaultValue={dayjs(props.defaultVal)} />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      );
}

export default Datetime