import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import { charactersArr } from '../utils/vars'
import styles from '../styles/Global.module.css'

export default function CharacterDropdown({ state, setState }) {
  const { setCharacterDropdownValue } = setState
  const { characterDropdownValue } = state

  function handleSelect(e) {
    setCharacterDropdownValue(e.target.value)
  }

  return (
    <FormControl>
      <Select
        value={characterDropdownValue}
        onChange={handleSelect}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}>
        {charactersArr.map((character) => {
          return (
            <MenuItem value={character} key={character}>
              <Grid container justifyContent="center">
                {character.toUpperCase()}
              </Grid>
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}
