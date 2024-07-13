import React from "react"
import burguerMenuIcon from "../assets/burguer-menu.svg"
import accountUser from "../assets/user-account.svg"
import search from "../assets/search.svg"
import logoutIcon from "../assets/logout.svg"
import notificationIcon from "../assets/bell.svg"
import { Box, Tooltip } from "@mui/material"

export default function Header() {
  return (
    <>
        <Box component='section' className="w-full h-14 bg-[#479A42] flex items-center justify-between px-8">
          <Box className="flex gap-4 items-center">
            <img
              src={burguerMenuIcon}
              alt="burgueMenu"
              className="cursor-pointer"
            />
            <h1 className="poppins-medium text-xl">
              Pannello di Controllo del Supervisore
            </h1>
          </Box>
          <Box className="flex gap-5 items-center">
            <img src={accountUser} alt="userIcon" />
            <p className="poppins-medium text-xl">beta@user.com</p>
            <Tooltip title="Cercare">
              <img src={search} alt="searchIcon" />
            </Tooltip>
            <Tooltip title="notifica">
              <img src={notificationIcon} alt="notificationIcon" />
            </Tooltip>
            <Tooltip title="disconnettersi" className="cursor-pointer">
              <img src={logoutIcon} alt="logoutIcon" />
            </Tooltip>
          </Box>
        </Box>
    </>
  )
}
