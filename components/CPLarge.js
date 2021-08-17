import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Hidden from '@material-ui/core/Hidden'
import ButtonsHorizontal2 from './ButtonsHorizontal2'
import styles from '../styles/ControlPanel.module.css'

export default function CPLarge({ setState, state }) {
	const { buttons } = state
	const { setButtons } = setState
	function handleClick(value) {
		setButtons([value])
	}
	return (
		<Grid item>
			{/* <Hidden smDown> */}
			<Grid item>
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button onClick={() => handleClick('FRAMES')}>FRAMES</Button>
					<Button onClick={() => handleClick('HEIGHT')}>HEIGHT</Button>
					<Button onClick={() => handleClick('KNOCKDOWN')}>KNOCKDOWN</Button>
					<Button onClick={() => handleClick('LAUNCH')}>LAUNCH</Button>
					<Button onClick={() => handleClick('RAGE')}>RAGE</Button>
					<Button onClick={() => handleClick('SAFETY')}>SAFETY</Button>
					<Button onClick={() => handleClick('SITUATIONAL')}>
						SITUATIONAL
					</Button>
					<Button onClick={() => handleClick('STRINGS')}>STRINGS</Button>
				</ButtonGroup>
			</Grid>
			<ButtonsHorizontal2 state={state} setState={setState} />
			{/* </Hidden> */}
		</Grid>
	)
}
