import React from "react"
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
  TextField,
  InputAdornment
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { styled } from "@mui/system"

import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"

interface CustomSelectProps {
  data?: string[]
  value: string | number
  onChange: (event: SelectChangeEvent<unknown>) => void
  date?: boolean | undefined
  placeholder?: string
}

const CustomCalendarIcon = styled(CalendarMonthIcon)(({ theme }) => ({
  color: "#aaaca6" // Cambia este color al que desees
}))

const CustomSelect: React.FC<CustomSelectProps> = ({
  data,
  value,
  onChange,
  date,
  placeholder
}) => {
  return (
    <>
      {date === true ? (
        <>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Anno"
                slots={{
                  openPickerIcon: CustomCalendarIcon // Aquí especificas tu nuevo icono
                }}
                sx={{
                  backgroundColor: "#f4f4ee",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  border: 0,
                  minWidth: "170px !important",
                  width: "170px !important",
                  borderColor: "white",
                  marginBottom: "8px !important",
                  "& .MuiStack-root": {
                    paddingTop: "0px !important",
                    marginBottom: "8px !important"
                  },
                  "& .MuiInputBase-input": {
                    color: "gray"
                  },
                  "&.Mui-focused .MuiInputLabel-root": {
                    color: "gray"
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray"
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                      color: "#aaaca6",
                      borderBottom: 1,
                      borderBottomColor: "#aaaca6",
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0
                    },
                    "&:hover fieldset": {
                      borderBottomColor: "#aaaca6",
                      color: "#aaaca6"
                    },
                    "&.Mui-focused fieldset": {
                      color: "#aaaca6",
                      border: "none",
                      borderBottom: 1,
                      borderBottomColor: "#4fa249",
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0
                    }
                  }
                }}
                // renderInput={(params:string) => (
                //   <TextField {...params} placeholder="Select a date" />
                // )}
                
              />
            </DemoContainer>
          </LocalizationProvider>
        </>
      ) : (
        <FormControl variant="outlined" sx={{ minWidth: 100 }}>
          <StyledSelect
            placeholder="provincia"
            labelId="custom-select-label"
            value={value}
            onChange={onChange}
            IconComponent={ExpandMoreIcon}
            displayEmpty
            

          >
            <MenuItem value="" disabled>
              {placeholder}
            </MenuItem>
            {data?.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
      )}
    </>
  )
}

const StyledSelect = styled(Select)({
  backgroundColor: "#f4f4ee",
  color: "#aaaca6",
  width: "170px !important",

  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  "& .MuiSelect-icon": {
    color: "#bfc3b5"
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent"
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent"
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent"
  },
  "& .MuiSelect-select:empty": {
    color: "#bfbfbf" // Estilo del placeholder
  },
  "&.MuiOutlinedInput-root": {
    borderBottom: "1px solid #969790",
    width: "95px",
    paddingLeft: "5px",
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "2px solid #969790"
    },
    "&:after": {
      borderBottom: "2px solid #969790"
    }
  }
})

export default CustomSelect
