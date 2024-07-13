import * as React from 'react';
import { styled } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import IconButton from '@mui/material/IconButton';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const CustomDateRangeField = styled(SingleInputDateRangeField)({
  backgroundColor: '#f0f0f0', // Cambia el color de fondo
  borderRadius: '4px',        // Opcional: redondea las esquinas
  '& .MuiOutlinedInput-root': {
    paddingRight: '48px',      // Añadir espacio para el icono
    '& fieldset': {
      border: 'none',         // Quita los bordes
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputAdornment-root': {
    marginRight: '8px',
  },
});

const CustomDateRangePicker = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['SingleInputDateRangeField']}>
        <DateRangePicker
          slots={{ field: CustomDateRangeField }}
          name="allowedRange"


        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default CustomDateRangePicker;
