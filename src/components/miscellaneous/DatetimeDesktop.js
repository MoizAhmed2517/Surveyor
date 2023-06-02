import React from 'react'
import dayjs from 'dayjs';

// Material UI components
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const DatetimeDesktop = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
        components={[
            'DateTimePicker',
            ]}
        >
            <DemoItem label={props.label}>
                <DateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
            </DemoItem>
        </DemoContainer>
    </LocalizationProvider>
  );
}

export default DatetimeDesktop