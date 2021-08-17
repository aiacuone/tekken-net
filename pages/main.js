import { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import CPLarge from '../components/CPLarge'
import CPSmall from '../components/CPSmall'
import Hidden from '@material-ui/core/Hidden'

export default function main({ state, setState }) {
	const { buttons, expanded } = state
	const { setExpanded, setButtons } = setState

	return (
		<Grid container justifyContent="center">
			<Hidden smDown>
				<CPLarge state={state} setState={setState} />
			</Hidden>
			<Hidden mdUp>
				<CPSmall state={state} setState={setState} />
			</Hidden>
		</Grid>
	)
}
