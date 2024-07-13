
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

import LinearProgress from "@mui/material/LinearProgress"

import CustomDateRangePicker from "./CustomDateRangePicker"

import { Box } from "@mui/material"

import { icons } from "../constants"

const widgets = [
  {
    icon: icons.widgetIcon1,
    price: "3.022.766,00",
    title: "Lista movimenti",
    color: "#6ABE61"
  },
  {
    icon: icons.widgetIcon2,
    price: "3.022.766,00",
    title: "Contribuzioni Dovute",
    // color: '#63b0ff'
    color: "#6350FF"
  },
  {
    icon: icons.widgetIcon3,
    price: "3.022.766,00",
    title: "Lista movimenti",
    color: "#6ABE61",
    progress: 90
  },
  {
    icon: icons.widgetIcon4,
    price: "3.022.766,00",
    title: "Lista movimenti",

    color: "rgba(0,0,0,0.2)",
    progress: 50
  }
]

console.log(widgets.map((color) => color))

export default function WidgetCard() {
  return (
    <>
      <Box className="w-80 h-96 bg-white shadow-[0_3px_15px_0px_rgba(0,0,0,0.2)] rounded-2xl mt-6 flex flex-col justify-between">
        <Box className="w-full flex flex-col p-5">
          <img
            src={icons.widgetIcon1}
            alt="widgetIcon1"
            className="w-20 h-20"
          />
          <h1 className={`text-[#6ABE61] font-pmedium text-xl mt-5`}>
            € 3.022.766,00
          </h1>
          <h1 className="font-robotom text-lightGray">Lista movimenti</h1>
        </Box>
        <Box className="w-full flex flex-col py-5 items-center">
          <CustomDateRangePicker />
        </Box>
      </Box>

      <Box className="w-80 h-96 bg-white shadow-[0_3px_15px_0px_rgba(0,0,0,0.2)] rounded-2xl mt-6 flex flex-col justify-between">
        <Box className="w-full flex flex-col p-5">
          <img
            src={icons.widgetIcon2}
            alt="widgetIcon1"
            className="w-20 h-20"
          />
          <h1 className={`text-[#63b0ff] font-pmedium text-xl mt-5`}>
            € 3.022.766,00
          </h1>
          <h1 className="font-robotom text-lightGray">Contribuzioni Dovute</h1>
        </Box>

        <Box className="w-full flex flex-col py-5 items-center">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Choose a date"
                sx={{
                  backgroundColor: "#f4f4ee",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  border: 0,
                  borderColor: "white",
                  "& .MuiInputBase-input": {
                    color: "gray"
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray"
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                      borderBottom: 1,
                      borderBottomColor: "black",
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0
                    },
                    "&:hover fieldset": {
                      border: "none",
                      borderBottom: 1,
                      borderBottomColor: "black",
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                      borderBottom: 1,
                      borderBottomColor: "black",
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0
                    }
                  }
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Box>
      <Box className="w-80 h-96 bg-white shadow-[0_3px_15px_0px_rgba(0,0,0,0.2)] rounded-2xl mt-6 flex flex-col justify-between">
        <Box className="w-full">
          <Box className="w-full flex flex-col p-5">
            <img
              src={icons.widgetIcon3}
              alt="widgetIcon1"
              className="w-20 h-20"
            />
            <h1 className={`text-[#ff897d] font-pmedium text-xl mt-5`}>
              6.708
            </h1>
            <h1 className="font-robotom text-lightGray">
              Totale Aziende Registrate
            </h1>
          </Box>
          <Box className="w-full px-5">
            <LinearProgress
              variant="determinate"
              value={98}
              sx={{
                backgroundColor: "#ffe7e5",
                "& .MuiLinearProgress-bar1Determinate": {
                  backgroundColor: "#ff897d" 
                },
                "& .MuiLinearProgress-bar2Determinate": {
                  backgroundColor: "#ffe7e5"
                }
              }}
            />
            <Box className="w-full flex flex-row justify-between mt-2">
              <h2 className="text-lightGray text-sm font-robotom">
                Di cui in attività
              </h2>
              <h2 className="text-[#ff897d] text-sm font-robotom">5.365</h2>
            </Box>
          </Box>
        </Box>

        <Box className="w-full flex flex-col pb-5 items-center">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Choose a date"
                sx={{
                  backgroundColor: "#f4f4ee",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  border: 0,
                  borderColor: "white",
                  "& .MuiInputBase-input": {
                    color: "gray"
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray" 
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                      borderBottom: 1,
                      borderBottomColor: "black",
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0
                    },
                    "&:hover fieldset": {
                      border: "none",
                      borderBottom: 1,
                      borderBottomColor: "black",
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                      borderBottom: 1,
                      borderBottomColor: "black",
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0
                    }
                  }
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Box>
      <Box className="w-80 h-96 bg-white shadow-[0_3px_15px_0px_rgba(0,0,0,0.2)] rounded-2xl mt-6 flex flex-col justify-between">
        <Box className="w-full">
          <Box className="w-full flex flex-col p-5">
            <img
              src={icons.widgetIcon4}
              alt="widgetIcon1"
              className="w-20 h-20"
            />
            <h1 className={`text-[#97a5ff] font-pmedium text-xl mt-5`}>
              224.639
            </h1>
            <h1 className="font-robotom text-lightGray">
              Totale lavoratori registrati
            </h1>
          </Box>
          <Box className="w-full px-5">
            <LinearProgress
              variant="determinate"
              value={5}
              sx={{
                backgroundColor: "#eaedff",
                "& .MuiLinearProgress-bar1Determinate": {
                  backgroundColor: "#97a5ff" 
                },
                "& .MuiLinearProgress-bar2Determinate": {
                  backgroundColor: "#eaedff" 
                }
              }}
            />
            <Box className="w-full flex flex-row justify-between mt-2">
              <h2 className="text-lightGray text-sm font-robotom">
                Di cui in attività
              </h2>
              <h2 className="text-[#97a5ff] text-sm font-robotom">147.235</h2>
            </Box>
            <Box className="w-full flex flex-row justify-between mt-2">
              <h2 className="text-lightGray text-sm font-robotom">
                Di cui in aspettativa
              </h2>
              <h2 className="text-[#97a5ff] text-sm font-robotom">0</h2>
            </Box>
            <Box className="w-full flex flex-row justify-between mt-2">
              <h2 className="text-lightGray text-sm font-robotom">
                Rapporti Lavorativi Attivi
              </h2>
              <h2 className="text-[#97a5ff] text-sm font-robotom">147.235</h2>
            </Box>
          </Box>
        </Box>

        <Box className="w-full flex flex-col pb-5 items-center">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Choose a date"
                sx={{
                  backgroundColor: "#f4f4ee",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  border: 0,
                  borderColor: "white",
                  "& .MuiInputBase-input": {
                    color: "gray" 
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray" 
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none", 
                      borderBottom: 1,
                      borderBottomColor: "black",
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0
                    },
                    "&:hover fieldset": {
                      border: "none",
                      borderBottom: 1,
                      borderBottomColor: "black",
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                      borderBottom: 1,
                      borderBottomColor: "black",
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0
                    }
                  }
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Box>
    </>
  )
}
