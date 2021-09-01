import React, { useState } from 'react'
import { characters } from '../characters/index'
import { getCharacterMoves } from '../utils/getCharacterMoves'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

let filteredMoveList = []

export function getFilteredMoveList({
  button1,
  button2,
  character,
  attr1,
  attr2,
}) {
  const moveList = getCharacterMoves[button1][button2]({
    character: characters[character],
    attr1,
    attr2,
  })
  filteredMoveList = moveList
}

export function MovesTable({ state }) {
  const { isSmallScreen, notify, isPhone } = state

  const columns = [
    { id: 'Command', label: 'Command', minWidth: 170, align: 'center' },
    { id: 'Hit level', label: 'Hit level', minWidth: 100, align: 'center' },
    {
      id: 'Damage',
      label: 'Damage',
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'Start up frame',
      label: 'Start up frame',
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'Block frame',
      label: 'Block frame',
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'Hit frame',
      label: 'Hit frame',
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'Counter hit frame',
      label: 'Counter hit frame',
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'Notes',
      label: 'Notes',
      minWidth: 170,
      align: 'center',
    },
  ]

  const useStyles = makeStyles({
    root: {
      width: isSmallScreen ? '300px' : '100%',
    },
    container: {
      maxHeight: isPhone ? 450 : 800, // HEIGHT OF THE TABLE
    },
  })

  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Grid container>
      {filteredMoveList.length > 0 && (
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredMoveList &&
                  filteredMoveList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id]
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {value}
                              </TableCell>
                            )
                          })}
                        </TableRow>
                      )
                    })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            className={classes.pagination}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={filteredMoveList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
      {filteredMoveList.length === 0 && notify ? (
        <Typography variant="h6">No Moves Available</Typography>
      ) : filteredMoveList.length === 0 ? (
        <Typography variant="h6">Please Make a Selection</Typography>
      ) : null}
    </Grid>
  )
}
