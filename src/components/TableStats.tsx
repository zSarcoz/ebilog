import {
  Box,
  FormControl,
  IconButton,
  FilledInput,
  InputAdornment,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Checkbox,
  Tooltip,
  // Paper,
  // Select,
  // MenuItem,
  styled,
  TablePagination
} from "@mui/material"

// import { DataGrid, GridColDef } from "@mui/x-data-grid"

import { icons } from "../constants"

import CustomSelect from "./CustomSelect" // Ajusta la ruta según tu estructura de archivos
import { SelectChangeEvent } from "@mui/material"
import { useEffect, useState } from "react"
import SearchIcon from "@mui/icons-material/Search"

// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo"

// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import BlockIcon from "@mui/icons-material/Block"
import PostAddIcon from "@mui/icons-material/PostAdd"
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox"
import SyncIcon from "@mui/icons-material/Sync"
import VisibilityIcon from "@mui/icons-material/Visibility"

import {
  FirstPage as FirstPageIcon,
  LastPage as LastPageIcon,
  KeyboardArrowLeft,
  KeyboardArrowRight
} from "@mui/icons-material"

import { MouseEvent as ReactMouseEvent } from "react"

import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

interface Data {
  id: number
  azienda: string
  partitaIVA: string
  dataIscrizione: string
  provincia: string
  registrazione: string
  rapporti: number
  debito: number
  credito: number
  saldo: number
  status?: string
  associazione: string
  dataInvioPEC: string
}

const rows: Data[] = [
  {
    id: 1,
    azienda: "Azienda Italian SRL",
    partitaIVA: "12345678912",
    dataIscrizione: "01/07/2023",
    provincia: "MI",
    registrazione: "21/08/2023",
    rapporti: 23,
    debito: 0.0,
    credito: 0.0,
    saldo: 0.0,
    status: "Pending",
    associazione: "Associazione (€)",
    dataInvioPEC: "00/00/2023"
  },
  {
    id: 2,
    azienda: "Azienda Italian SRL",
    partitaIVA: "12345678912",
    dataIscrizione: "01/07/2023",
    provincia: "MO",
    registrazione: "21/08/2023",
    rapporti: 24,
    debito: 0.0,
    credito: 10.0,
    saldo: 0.0,
    associazione: "Associazione (€)",
    dataInvioPEC: "00/00/2023"
  },
  {
    id: 3,

    azienda: "Tomate",
    partitaIVA: "12345678912",
    dataIscrizione: "01/07/2023",
    provincia: "MI",
    registrazione: "21/08/2023",
    rapporti: 20,
    debito: 100.0,
    credito: 1000.0,
    saldo: 0.0,
    status: "Completed",

    associazione: "Associazione (€)",
    dataInvioPEC: "00/00/2023"
  },
  {
    id: 4,

    azienda: "Tomate",
    partitaIVA: "12345678912",
    dataIscrizione: "01/07/2023",
    provincia: "MI",
    registrazione: "21/08/2023",
    rapporti: 21,
    debito: 20.0,
    credito: 1000.0,
    saldo: 0.0,
    associazione: "Associazione (€)",
    dataInvioPEC: "00/00/2023"
  },
  {
    id: 5,

    azienda: "Tomate",
    partitaIVA: "12345678912",
    dataIscrizione: "01/07/2023",
    provincia: "MI",
    registrazione: "21/08/2023",
    rapporti: 23,
    debito: 0.0,
    credito: 1000.0,
    saldo: 0.0,
    status: "Denied",

    associazione: "Associazione (€)",
    dataInvioPEC: "00/00/2023"
  },
  {
    id: 6,
    azienda: "Tomate",
    partitaIVA: "12345678912",
    dataIscrizione: "01/07/2023",
    provincia: "MI",
    registrazione: "21/08/2023",
    rapporti: 23,
    debito: 0.0,
    credito: 1000.0,
    saldo: 0.0,
    associazione: "Associazione (€)",
    dataInvioPEC: "00/00/2023"
  },
  {
    id: 7,
    azienda: "Tomate",
    partitaIVA: "12345678912",
    dataIscrizione: "01/07/2023",
    provincia: "MI",
    registrazione: "21/08/2023",
    rapporti: 23,
    debito: 0.0,
    credito: 1000.0,
    saldo: 0.0,
    status: "Queue",
    associazione: "Associazione (€)",
    dataInvioPEC: "00/00/2023"
  },
  {
    id: 8,
    azienda: "Tomate",
    partitaIVA: "12345678912",
    dataIscrizione: "01/07/2023",
    provincia: "MI",
    registrazione: "21/08/2023",
    rapporti: 23,
    debito: 0.0,
    credito: 1000.0,
    saldo: 0.0,
    associazione: "Associazione (€)",
    dataInvioPEC: "00/00/2023"
  },
  {
    id: 9,
    azienda: "Tomate",
    partitaIVA: "12345678912",
    dataIscrizione: "01/07/2023",
    provincia: "MI",
    registrazione: "21/08/2023",
    rapporti: 23,
    debito: 0.0,
    credito: 1000.0,
    saldo: 0.0,
    associazione: "Associazione (€)",
    dataInvioPEC: "00/00/2023"
  },
  {
    id: 10,
    azienda: "Ala",
    partitaIVA: "12345678912",
    dataIscrizione: "01/07/2023",
    provincia: "MI",
    registrazione: "21/08/2023",
    rapporti: 23,
    debito: 0.0,
    credito: 1000.0,
    saldo: 0.0,
    associazione: "Associazione (€)",
    dataInvioPEC: "00/00/2023"
  },
  {
    id: 11,
    azienda: "Cambur",
    partitaIVA: "12345678912",
    dataIscrizione: "01/07/2023",
    provincia: "MI",
    registrazione: "21/08/2023",
    rapporti: 23,
    debito: 0.0,
    credito: 1000.0,
    saldo: 0.0,
    associazione: "Associazione (€)",
    dataInvioPEC: "00/00/2023"
  },
  {
    id: 12,
    azienda: "Batman",
    partitaIVA: "12345678912",
    dataIscrizione: "01/07/2023",
    provincia: "MI",
    registrazione: "21/08/2023",
    rapporti: 23,
    debito: 0.0,
    credito: 1000.0,
    saldo: 0.0,
    associazione: "Associazione (€)",
    dataInvioPEC: "00/00/2023"
  },
  {
    id: 13,
    azienda: "Tomate",
    partitaIVA: "12345678912",
    dataIscrizione: "01/07/2023",
    provincia: "MI",
    registrazione: "21/08/2023",
    rapporti: 23,
    debito: 0.0,
    credito: 1000.0,
    saldo: 0.0,
    associazione: "Associazione (€)",
    dataInvioPEC: "00/00/2023"
  },
  {
    id: 14,
    azienda: "Cebola",
    partitaIVA: "12345678912",
    dataIscrizione: "01/07/2023",
    provincia: "MO",
    registrazione: "21/08/2023",
    rapporti: 23,
    debito: 0.0,
    credito: 10.0,
    saldo: 0.0,
    associazione: "Associazione (€)",
    dataInvioPEC: "00/00/2023"
  }
]

interface Column {
  id: keyof Data
  label: string
  status?: string
}

const columns: Column[] = [
  { id: "azienda", label: "Azienda", status: "Pending" },
  { id: "partitaIVA", label: "Partita IVA" },
  { id: "dataIscrizione", label: "Data Iscrizione" },
  { id: "provincia", label: "Provincia" },
  { id: "registrazione", label: "Registrazione" },
  { id: "rapporti", label: "Rapporti lavorativi" },
  { id: "debito", label: "Debito (€)" },
  { id: "credito", label: "Credito (€)" },
  { id: "saldo", label: "Saldo (€)" },
  { id: "associazione", label: "Associazione" },
  { id: "dataInvioPEC", label: "Data Invio PEC" }
]

type Order = "asc" | "desc"

const getComparator = (order: Order, orderBy: keyof Data) => {
  return order === "desc"
    ? (a: Data, b: Data) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a: Data, b: Data) => (a[orderBy] < b[orderBy] ? -1 : 1)
}

const stableSort = (
  array: Data[],
  comparator: (a: Data, b: Data) => number
) => {
  const stabilizedThis = array.map((el, index) => [el, index] as [Data, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

const StyledTableCell = styled(TableCell)({
  backgroundColor: "#f4f4ee",
  position: "sticky",
  top: 0,
  border: 1
})

const StyledTableHeaderCell = styled(TableCell)({
  backgroundColor: "#f4f4ee",
  position: "sticky",
  padding: 0,
  top: 0,
  border: 1,
  width: "120px",
  fontFamily: "Poppins, sans-serif"
})

interface TablePaginationActionsProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (
    event: ReactMouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void
}

const TablePaginationActions: React.FC<TablePaginationActionsProps> = (
  props
) => {
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (
    event: ReactMouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (
    event: ReactMouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  )
}

const CustomTableCell = styled(TableCell)(({ theme }) => ({
  border: "1px solid #dddddd"
  // display:"flex",
  // flexDirection:"row",
  // alignItems:'center'
}))

const CustomTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": { border: "1px solid #dddddd" }
}))

export default function TableStats() {
  const [selectedProvincia, setSelectedProvincia] = useState<string>("")
  const provincias = ["MO", "MI"]
  const [selectedYear, setSelectedYear] = useState<string>("")
  const years = ["2022", "2023", "2024"]

  const [searchValue, setSearchValue] = useState("")
  const [filteredRows, setFilteredRows] = useState(rows)

  useEffect(() => {
    setFilteredRows(
      rows.filter((row) =>
        row.azienda.toLowerCase().includes(searchValue.toLowerCase()) &&
        (selectedProvincia ? row.provincia === selectedProvincia : true)
      )
    );
  }, [searchValue, selectedProvincia]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleYearChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedYear(event.target.value as string)
  }
  const handleProvinciaChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedProvincia(event.target.value as string)
  }

  const [order, setOrder] = useState<Order>("asc")
  const [orderBy, setOrderBy] = useState<keyof Data>("azienda")

  const handleRequestSort = (property: keyof Data) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
  }

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const [checked, setChecked] = useState(false)
  const [allChecked, setAllChecked] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  const handleChangeAllCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
    setAllChecked(event.target.checked)
  }

  return (
    <>
      <Box className="w-full h-full px-8">
        <Box className="w-full h-fit bg-white shadow-[0_3px_15px_0px_rgba(0,0,0,0.2)] rounded-2xl mt-6 flex flex-col">
          <Box className="w-full flex flex-row p-5 items-center justify-between">
            <Box className="w-1/3 flex flex-row items-center gap-5">
              <img
                src={icons.dataTable}
                alt="widgetIcon1"
                className="w-14 h-14"
              />
              <h1
                className={`text-[#6abe61] font-psemibold text-center text-2xl`}
              >
                Riepilogo Saldo azienda
              </h1>
            </Box>
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
          <Box className="w-full flex flex-row items-center px-5 gap-5">
            <FormControl
              className="flex items-center justify-center w-80"
              sx={{
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
                backgroundColor: "#f4f4ee",
                "& .MuiFilledInput-underline:before": {
                  borderBottomColor: "#aaaca6"
                },
                "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#aaaca6"
                },
                "& .MuiFilledInput-underline:after": {
                  borderBottomColor: "#4fa249"
                },
                "& .Mui-focused": {
                  backgroundColor: "#f4f4ee",
                  color: "#4fa249"
                },
                "&:hover": {
                  backgroundColor: "#f4f4ee"
                }
              }}
              variant="filled"
            >
              <InputLabel
                htmlFor="input-with-icon-adornment"
                className="text-base font-robotom text-lightGray w-full"
                sx={{
                  color: "#aaaca6",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                  "&.Mui-focused": {
                    backgroundColor: "#f4f4ee",
                    color: "#4fa249"
                  },
                  "&:hover": {
                    backgroundColor: "#f4f4ee",
                    color: "#4fa249"
                  }
                }}
              >
                Ricerca azienda, partita IVA, note
              </InputLabel>
              <FilledInput
                value={searchValue}
                onChange={handleSearchChange}
                id="input-with-icon-adornment"
                className="w-full"
                sx={{
                  backgroundColor: "#f4f4ee",
                  color: "gray",
                  "& input": {
                    color: "gray"
                  },
                  "&:hover": {
                    backgroundColor: "#f4f4ee"
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#f4f4ee"
                  }
                }}
                endAdornment={
                  <InputAdornment
                    position="start"
                    className="flex items-center justify-center pb-4"
                  >
                    <SearchIcon sx={{ color: "#aaaca6" }} />
                  </InputAdornment>
                }
              />
            </FormControl>
            <IconButton
              sx={{
                width: "48px",
                height: "48px",
                backgroundColor: "#4fa249",
                color: "white",
                borderRadius: "15px",
                marginRight: "5px",
                "&:hover": { backgroundColor: "#4fa249" }
              }}
            >
              <SearchIcon />
            </IconButton>

            <CustomSelect
              data={years}
              value={selectedYear}
              onChange={handleYearChange}
              date
            />

            <CustomSelect
              data={years}
              value={selectedYear}
              onChange={handleYearChange}
              date={undefined}
              placeholder="Trimestre"
            />
            <CustomSelect
              data={provincias}
              value={selectedProvincia}
              onChange={handleProvinciaChange}
              placeholder="Provincia"
            />
            <Tooltip title="Delete">
              <IconButton
                sx={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#de3730",
                  color: "white",
                  borderRadius: "15px",
                  marginRight: "5px",
                  "&:hover": { backgroundColor: "#de3730" }
                }}
              >
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Filter">
              <IconButton
                sx={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#4fa249",
                  color: "white",
                  borderRadius: "15px",
                  marginRight: "5px",
                  "&:hover": { backgroundColor: "#4fa249" }
                }}
              >
                <FilterAltIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Block">
              <IconButton
                sx={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#4fa249",
                  color: "white",
                  borderRadius: "15px",
                  marginRight: "5px",
                  "&:hover": { backgroundColor: "#4fa249" }
                }}
              >
                <BlockIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Create">
              <IconButton
                sx={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#4fa249",
                  color: "white",
                  borderRadius: "15px",
                  marginRight: "5px",
                  "&:hover": { backgroundColor: "#4fa249" }
                }}
              >
                <PostAddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Forward">
              <IconButton
                sx={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#4fa249",
                  color: "white",
                  borderRadius: "15px",
                  marginRight: "5px",
                  "&:hover": { backgroundColor: "#4fa249" }
                }}
              >
                <ForwardToInboxIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Sync">
              <IconButton
                sx={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#4fa249",
                  color: "white",
                  borderRadius: "15px",
                  marginRight: "5px",
                  "&:hover": { backgroundColor: "#4fa249" }
                }}
              >
                <SyncIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box className="w-full p-5">
            <TableContainer
              component="div"
              sx={{
                maxHeight: 1000,
                border: "1px solid #dddddd",
                borderRadius: "20px",
                "&::-webkit-scrollbar": { display: "none" }
              }}
            >
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <StyledTableHeaderCell
                        align="center"
                        key={column.id}
                        className="font-pmedium"
                        sx={{
                          borderRight: "1px solid rgba(224, 224, 224, 1)",
                          borderBottom: "1px solid rgba(224, 224, 224, 1)",
                          fontWeight: "500",
                          fontFamily: "Poppins, sans-serif",
                          px: "7px",
                          display: "swap"
                        }}
                      >
                        <TableSortLabel
                          sx={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            fontFamily: "Poppins, sans-serif"
                          }}
                          active={orderBy === column.id}
                          direction={orderBy === column.id ? order : "asc"}
                          onClick={() => handleRequestSort(column.id)}
                        >
                          <span className="font-medium">{column.label}</span>
                          {/* {column.label} */}
                        </TableSortLabel>
                      </StyledTableHeaderCell>
                    ))}
                    <StyledTableCell
                      align="center"
                      sx={{
                        borderRight: 0,
                        borderTopRightRadius: "20px",
                        width: "110px",
                        alignItems: "center",
                        position: "sticky"
                      }}
                    >
                      <span className="flex items-center w-full font-pmedium">
                        Azioni
                        <Checkbox
                          checked={allChecked}
                          onChange={handleChangeAllCheck}
                          inputProps={{ "aria-label": "controlled" }}
                          sx={{
                            color: "#4fa249",
                            "&.Mui-checked": {
                              color: "#4fa249"
                            },
                            "&:hover": {
                              backgroundColor: "transparent"
                            }
                          }}
                        />
                      </span>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stableSort(filteredRows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <CustomTableRow
                        key={index}
                        sx={{
                          backgroundColor:
                            row.status === "Pending"
                              ? "#fff9e8"
                              : row.status === "Denied"
                              ? "#ffedea"
                              : row.status === "Completed"
                              ? "#dcedd3"
                              : row.status === "Queue"
                              ? "#fbf8ff"
                              : "white"
                        }}
                      >
                        {columns.map((column) => (
                          <CustomTableCell key={column.id} align="center">
                            {row[column.id]}
                          </CustomTableCell>
                        ))}
                        <CustomTableCell
                          sx={{ display: "flex", flexDirection: "column" }}
                        >
                          <Box className="w-full flex gap-4 mb-3">
                            <Checkbox
                              key={row.id}
                              checked={checked}
                              onChange={handleChange}
                              sx={{
                                color: "#4fa249",
                                width: "32px",
                                height: "32px",
                                "&.Mui-checked": {
                                  color: "#4fa249"
                                },
                                "&:hover": {
                                  backgroundColor: "transparent"
                                }
                              }}
                            />
                            <IconButton
                              sx={{
                                width: "32px",
                                height: "32px",
                                backgroundColor: "#f2f2f1",
                                color: "#767873",
                                "&:hover": { backgroundColor: "#f2f2f1" }
                              }}
                            >
                              <VisibilityIcon />
                            </IconButton>
                          </Box>
                          <Box className="w-full flex gap-4">
                            <IconButton
                              sx={{
                                width: "32px",
                                height: "32px",
                                backgroundColor: "#f2f2f1",
                                color: "#767873",
                                "&:hover": { backgroundColor: "#f2f2f1" }
                              }}
                            >
                              <PostAddIcon />
                            </IconButton>
                            <IconButton
                              sx={{
                                width: "32px",
                                height: "32px",
                                backgroundColor: "#f2f2f1",
                                color: "#767873",
                                "&:hover": { backgroundColor: "#f2f2f1" }
                              }}
                            >
                              <ForwardToInboxIcon />
                            </IconButton>
                          </Box>
                        </CustomTableCell>
                      </CustomTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              sx={{ display: "flex", color: "#aaaca9", marginTop: "20px" }}
              rowsPerPageOptions={[5, 10, 20, 50]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
              labelRowsPerPage="Oggetti per pagina:"
              labelDisplayedRows={({ from, to, count }) =>
                `${from} - ${to} di ${count}`
              }
              slotProps={{
                select: {
                  IconComponent: ExpandMoreIcon,
                  sx: {
                    backgroundColor: "#f4f4ee",
                    color: "#aaaca6",
                    width: "100px !important",
                    height: "48px",
                    borderBottom: "1px solid #969790",
                    marginRight: "20px",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,

                    "& .MuiInputBase-input": {
                      paddingRight: "4rem !important"
                    },
                    "&.Mui-focused .MuiInputBase-input ": {
                      paddingRight: "4rem !important",
                      backgroundColor: "#f4f4ee"
                    },
                    "& .MuiSelect-icon": {
                      color: "#bfc3b5"
                    }
                  }
                }
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}
