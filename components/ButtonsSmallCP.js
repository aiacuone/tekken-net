import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ButtonsSmallCP2 from './ButtonsSmallCP2'
import styles from '../styles/ControlPanel.module.css'
import InputSmallCP from './InputSmallCP'
import Grid from '@material-ui/core/Grid'

export default function ButtonsSmallCP({ state, setState }) {
	const { buttons } = state
	const { setButtons, setExpanded } = setState

	function handleClick(value) {
		setButtons([value])
	}

	useEffect(() => {
		setButtons([])
	}, [])

	function handleBack() {
		const newButtons = [...buttons]
		newButtons.pop()
		setButtons(newButtons)
	}

	return (
		<>
			{buttons.length > 0 && (
				<Grid item className={styles.back_small_CP}>
					<Button
						variant="outlined"
						size="small"
						color="primary"
						onClick={handleBack}>
						Back
					</Button>
				</Grid>
			)}
			{buttons.length === 0 ? (
				<ButtonGroup
					orientation="vertical"
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
			) : buttons.length === 1 ? (
				<ButtonsSmallCP2 state={state} setState={setState} />
			) : (
				<InputSmallCP state={state} setState={setState} />
			)}
		</>
	)
}
