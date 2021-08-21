import { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import ControlPanel from '../components/ControlPanel'

export default function main({ state, setState, vars }) {
	const { buttons, expanded } = state
	const { setExpanded, setButtons } = setState

	return (
		<Grid container justifyContent="center">
			<ControlPanel state={state} setState={setState} vars={vars} />
		</Grid>
	)
}
