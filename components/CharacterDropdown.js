import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

export default function CharacterDropdown({ vars, state, setState }) {
  const { setCharacterDropdownValue } = setState;
  const { characterDropdownValue } = state;
  const { charactersArr } = vars;

  function handleSelect(e) {
    setCharacterDropdownValue(e.target.value);
  }

  return (
    <FormControl style={{ minWidth: "120px" }}>
      <Select
        value={characterDropdownValue}
        onChange={handleSelect}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <Grid container justifyContent="center">
            <em>Character</em>
          </Grid>
        </MenuItem>
        {charactersArr.map((character) => {
          return (
            <MenuItem value={character} key={character}>
              <Grid container justifyContent="center">
                {character}
              </Grid>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
