import "./index.css"
import Header from "./components/Header.tsx"
import Widgets from "./components/Widgets.tsx"
import MapWidget from "./components/MapWidget.tsx"
import { Box } from "@mui/material"
import TableStats from "./components/TableStats.tsx"

function App() {
  return (
    <>
      <Box className="bg-[#fcfdf6] w-full h-fit">
        <Header />
        <Widgets />
        <MapWidget />
        <TableStats />
      </Box>
    </>
  )
}

export default App
