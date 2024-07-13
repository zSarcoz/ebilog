import LinearProgress from "@mui/material/LinearProgress"

import { Box, IconButton } from "@mui/material"

// import { SelectChangeEvent } from "@mui/material/Select"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { dataset, datasetBar, datasetBar2, icons } from "../constants"

import CustomSelect from "./CustomSelect"

import {
  BarChart,
  AreaChart,
  Area,
  Bar,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"
import { useState } from "react"

const CustomTick = (props: any) => {
  const { x, y, payload } = props
  const [firstLine, secondLine] = payload.value.split(" ")

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x="0"
        y="5"
        dy="1em"
        textAnchor="middle"
        fill="#aaaca6"
        style={{ fontSize: 12, fontWeight: 500 }}
      >
        <tspan x="0" dy="0em">
          {firstLine}
        </tspan>
        <tspan x="0" dy="1.5em">
          {secondLine}
        </tspan>
      </text>
    </g>
  )
}

export default function ChartsWidgetCard() {
  const [selectedYear, setSelectedYear] = useState<string>("")
  const years = ["2022", "2023", "2024"]

  const handleYearChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedYear(event.target.value as string)
  }
  return (
    <>
      {/* WIDGET 1*/}

      <Box className="w-80 h-72 bg-white shadow-[0_3px_15px_0px_rgba(0,0,0,0.2)] rounded-2xl mt-6 flex flex-col justify-between">
        <Box className="w-full h-1/3 flex items-center justify-between">
          <Box className="w-1/2 flex flex-col pl-5">
            <h1 className="font-robotom text-[#1e95f2] text-base">
              Variazione
            </h1>
            <h3 className="font-robotom text-lightGray text-sm">Mensile</h3>
          </Box>
          <Box className="w-1/2 flex items-center justify-end pr-5">
            <Box className=" h-9 flex flex-row items-center justify-between rounded-xl px-2 bg-[#d1e4ff]">
              <img src={icons.arrowDownB} alt="" />
              <h3 className="font-robotobold text-[#1e95f2]">29,63%</h3>
            </Box>
          </Box>
        </Box>
        <Box className="w-full h-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={dataset}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barCategoryGap="32%"
            >
              <CartesianGrid strokeDasharray="3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: "#aaaca6" }}
                tickLine={{ stroke: "transparent" }}
                axisLine={{ stroke: "#aaaca6" }}
              />
              <Tooltip />
              <Bar dataKey="uv" fill="#1e95f2" radius={[30, 30, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      {/* WIDGET 2 */}

      <Box className="w-80 h-72 bg-white shadow-[0_3px_15px_0px_rgba(0,0,0,0.2)] rounded-2xl mt-6 flex flex-col justify-between">
        <Box className="w-full h-1/3 flex items-center justify-between">
          <Box className="w-1/2 flex flex-col pl-5">
            <h1 className="font-robotom text-[#6ABE61] text-base">
              Variazione
            </h1>
            <h3 className="font-robotom text-lightGray text-sm">Mensile</h3>
          </Box>
          <Box className="w-1/2 flex items-center justify-end pr-5">
            <Box className=" h-9 flex flex-row items-center justify-between rounded-xl px-2 bg-[#d6e8ce]">
              <img src={icons.arrowDownG} alt="" />
              <h3 className="font-robotobold text-[#6ABE61]">29,63%</h3>
            </Box>
          </Box>
        </Box>
        <Box className="w-full h-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              data={dataset}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: "#aaaca6" }}
                tickLine={{ stroke: "transparent" }}
                axisLine={{ stroke: "#aaaca6" }}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#4CAF50"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      {/* WIDGET 3  */}

      <Box className="w-80 h-72 bg-white shadow-[0_3px_15px_0px_rgba(0,0,0,0.2)] rounded-2xl mt-6 flex flex-col justify-between">
        <Box className="w-full h-1/4 flex items-center pl-5">
          <h1 className="font-robotom text-[#7789f0] text-base">CCNL</h1>
        </Box>
        <Box className="w-full h-full flex flex-col items-center gap-5 px-5">
          <Box className="w-full h-fit flex flex-col">
            <Box className="w-full flex flex-row items-center justify-between my-1">
              <h2 className="text-lightGray text-sm font-robotom">Logistica</h2>
              <p className="text-[#7789f0] text-base font-semibold">1.141</p>
            </Box>
            <LinearProgress
              variant="determinate"
              value={35}
              sx={{
                backgroundColor: "#eaedff",
                "& .MuiLinearProgress-bar1Determinate": {
                  backgroundColor: "#7789f0"
                },
                "& .MuiLinearProgress-bar2Determinate": {
                  backgroundColor: "#eaedff"
                }
              }}
            />
          </Box>
          <Box className="w-full h-fit flex flex-col">
            <Box className="w-full flex flex-row items-center justify-between my-1">
              <h2 className="text-lightGray text-sm font-robotom">
                Trasporto Merci
              </h2>
              <p className="text-[#7789f0] text-base font-semibold">2.736</p>
            </Box>
            <LinearProgress
              variant="determinate"
              value={60}
              sx={{
                backgroundColor: "#eaedff",
                "& .MuiLinearProgress-bar1Determinate": {
                  backgroundColor: "#7789f0"
                },
                "& .MuiLinearProgress-bar2Determinate": {
                  backgroundColor: "#eaedff"
                }
              }}
            />
          </Box>
          <Box className="w-full h-fit flex flex-col">
            <Box className="w-full flex flex-row items-center justify-between my-1">
              <h2 className="text-lightGray text-sm font-robotom">
                Spedizione
              </h2>
              <p className="text-[#7789f0] text-base font-semibold">386</p>
            </Box>
            <LinearProgress
              variant="determinate"
              value={30}
              sx={{
                backgroundColor: "#eaedff",
                "& .MuiLinearProgress-bar1Determinate": {
                  backgroundColor: "#7789f0"
                },
                "& .MuiLinearProgress-bar2Determinate": {
                  backgroundColor: "#eaedff"
                }
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* WIDGET 4 */}

      <Box className="w-80 h-72 bg-white shadow-[0_3px_15px_0px_rgba(0,0,0,0.2)] rounded-2xl mt-6 flex flex-col justify-between">
        <Box className="w-full h-1/4 flex items-center pl-5">
          <h1 className="font-robotom text-[#1e95f2] text-base">Ruolo</h1>
        </Box>
        <Box className="w-full h-full flex flex-col items-center gap-5 px-5 ml-[-10px]">
          <ResponsiveContainer width="130%" height={230}>
            <BarChart
              data={datasetBar}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barCategoryGap="15%"
            >
              <defs>
                <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#63b0ff" stopOpacity={1} />
                  <stop offset="95%" stopColor="#0161a4" stopOpacity={1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: "#aaaca6", fontSize: 12 }}
                tickLine={{ stroke: "transparent" }}
                axisLine={{ stroke: "#aaaca6" }}
              />
              <YAxis
                tick={{ fill: "#aaaca6", fontSize: 10 }}
                tickLine={{ stroke: "transparent" }}
                axisLine={{ stroke: "transparent" }}
              />
              <Tooltip
                cursor={{ fill: "#aaaca9" }}
                content={({ payload, label, active }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div
                        style={{
                          backgroundColor: "#fff",
                          padding: "5px",
                          border: "1px solid #ccc"
                        }}
                      >
                        <p className="text-black">{`${label} : ${payload[0].value}`}</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar
                dataKey="type"
                fill="url(#colorUv2)"
                color="#000"
                radius={[30, 30, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      {/*  WIDGET 5 */}

      <Box className="w-[48%] h-96 bg-white shadow-[0_3px_15px_0px_rgba(0,0,0,0.2)] rounded-2xl mt-12 flex flex-col justify-between">
        <Box className="w-full h-1/4 flex items-center justify-between px-5 pt-2">
          <h1 className=" text-[#6abe61] text-xl font-psemibold tracking-wide">
            Andamento Contribuzioni Versate
          </h1>
          <Box className="w-1/3 flex justify-end gap-4 items-center pl-3">
            <CustomSelect
              data={years}
              value={selectedYear}
              onChange={handleYearChange} date={undefined} placeholder={""}            />
            <IconButton
              sx={{
                backgroundColor: "#4fa249",
                borderRadius: 4,
                padding: 1.5,
                "&:hover": { backgroundColor: "#4fa249" }
              }}
            >
              <img src={icons.download} alt="" />
            </IconButton>
          </Box>
        </Box>
        <Box className="w-full h-full flex flex-col items-center gap-5 px-5 pt-4">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={datasetBar2}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barCategoryGap="15%"
            >
              <defs>
                <linearGradient id="colorUv3" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9ff793" stopOpacity={1} />
                  <stop offset="95%" stopColor="#40973f" stopOpacity={1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={<CustomTick />}
                tickLine={{ stroke: "transparent" }}
                axisLine={{ stroke: "#aaaca6" }}
              />
              <YAxis
                tick={{ fill: "#aaaca6", fontSize: 14 }}
                tickLine={{ stroke: "transparent" }}
                axisLine={{ stroke: "transparent" }}
              />
              <Tooltip
                cursor={{ fill: "#aaaca9" }}
                content={({ payload, label, active }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div
                        style={{
                          backgroundColor: "#fff",
                          padding: "5px",
                          border: "1px solid #ccc"
                        }}
                      >
                        <p className="text-black">{`${label} : ${payload[0].value}`}</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar
                dataKey="type"
                fill="url(#colorUv3)"
                color="#000"
                radius={[50, 50, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      {/*  WIDGET 6 */}

      <Box className="w-[48%] h-96 bg-white shadow-[0_3px_15px_0px_rgba(0,0,0,0.2)] rounded-2xl mt-12 flex flex-col justify-between">
        <Box className="w-full h-1/4 flex items-center justify-between px-5 pt-2">
          <h1 className=" text-[#6abe61] text-xl font-psemibold tracking-wide">
            Andamento Contribuzioni Dovute
          </h1>
          <Box className="w-2/5 flex justify-end gap-4 items-center ">
            <CustomSelect
              data={years}
              value={selectedYear}
              onChange={handleYearChange} date={undefined} placeholder={""}            />
            <IconButton
              sx={{
                backgroundColor: "#4fa249",
                borderRadius: 4,
                padding: 1.5,
                "&:hover": { backgroundColor: "#4fa249" }
              }}
            >
              <img src={icons.download} alt="" />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#4fa249",
                borderRadius: 4,
                padding: 1.5,
                "&:hover": { backgroundColor: "#4fa249" }
              }}
            >
              <img src={icons.calendar} alt="" />
            </IconButton>
          </Box>
        </Box>
        <Box className="w-full h-full flex flex-col items-center gap-5 px-5 pt-4">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={datasetBar2}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barCategoryGap="15%"
            >
              <defs>
                <linearGradient id="colorUv4" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffb39e" stopOpacity={1} />
                  <stop offset="95%" stopColor="#ff5722" stopOpacity={1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={<CustomTick />}
                tickLine={{ stroke: "transparent" }}
                axisLine={{ stroke: "#aaaca6" }}
              />
              <YAxis
                tick={{ fill: "#aaaca6", fontSize: 14 }}
                tickLine={{ stroke: "transparent" }}
                axisLine={{ stroke: "transparent" }}
              />
              <Tooltip
                cursor={{ fill: "#aaaca9" }}
                content={({ payload, label, active }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div
                        style={{
                          backgroundColor: "#fff",
                          padding: "5px",
                          border: "1px solid #ccc"
                        }}
                      >
                        <p className="text-black">{`${label} : ${payload[0].value}`}</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar
                dataKey="type"
                fill="url(#colorUv4)"
                color="#000"
                radius={[50, 50, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </>
  )
}
