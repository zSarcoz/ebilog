import { Box } from "@mui/material"
import React from "react"
import WidgetCard from "./WidgetCard"
import ChartsWidgetCard from "./ChartsWidgetCard"

export default function Widgets() {
  return (
    <Box className="w-full h-1/2">
      <Box className="w-full h-full flex flex-wrap items-center justify-between px-8">
        <Box className='w-full flex flex-wrap justify-between mt-4 mb-5'>
          <WidgetCard />
        </Box>
        <Box className='w-full flex flex-wrap justify-between mb-5'>
          <ChartsWidgetCard />
        </Box>
      </Box>
    </Box>
  )
}
