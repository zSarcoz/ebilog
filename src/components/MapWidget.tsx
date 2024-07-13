import { Box } from "@mui/material"

import { icons } from "../constants"
// import { useState } from "react"

export default function MapWidget() {
  return (
    <>
      <Box className="w-full h-full px-8">
        <Box className="w-full h-[750px] bg-white shadow-[0_3px_15px_0px_rgba(0,0,0,0.2)] rounded-2xl mt-6 flex flex-col justify-between">
          <Box className="w-full flex flex-row p-5 items-center justify-between">
            <Box className='w-1/3 flex flex-row items-center gap-5'>
              <img
                src={icons.ubication}
                alt="widgetIcon1"
                className="w-14 h-14"
              />
              <h1 className={`text-[#6abe61] font-psemibold text-center text-2xl`}>
                Distribuzione territoriale Aziende
              </h1>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
