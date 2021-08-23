import { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import ControlPanel from '../components/ControlPanel'
import CharacterDropdown from '../components/CharacterDropdown'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

export default function main({ state, setState, vars }) {
	const { characterDropdownValue } = state
	const { setCharacterDropdownValue } = setState
	const { isSmallScreen, charactersArr, CPSpacing } = vars

	return (
		<Grid
			spacing={CPSpacing}
			container
			alignItems="center"
			direction="column"
			// style={{ padding: isSmallScreen ? 0 : '10px' }}
		>
			{!isSmallScreen && (
				<Grid item>
					<Grid container justifyContent="center" alignItems="center">
						<CharacterDropdown state={state} vars={vars} setState={setState} />
					</Grid>
				</Grid>
			)}
			<Grid item>
				<ControlPanel state={state} setState={setState} vars={vars} />
			</Grid>
		</Grid>
	)
}
