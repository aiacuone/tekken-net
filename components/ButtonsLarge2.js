import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import styles from '../styles/ControlPanel.module.css'

export default function ButtonsLarge2({ state, setState }) {
	const { buttons } = state
	const { setButtons, setExpanded } = setState

	useEffect(() => {
		setButtons([])
		setExpanded(false)
	}, [])

	function handleClick(value) {
		const newButtons = [...buttons]
		newButtons[1] = value
		setButtons(newButtons)
	}

	return (
		<Grid container justifyContent="center">
			{buttons[0] === 'FRAMES' && (
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button onClick={() => handleClick('RANGE')}>RANGE</Button>
					<Button onClick={() => handleClick('SPECIFIC')}>SPECIFIC</Button>
				</ButtonGroup>
			)}

			{buttons[0] === 'HEIGHT' && (
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button onClick={() => handleClick('SPECIFIC')}>SPECIFIC</Button>
					<Button onClick={() => handleClick('START & FINISH')}>
						START & FINISH
					</Button>
				</ButtonGroup>
			)}

			{buttons[0] === 'KNOCKDOWN' && (
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button onClick={() => handleClick('NORMAL')}>NORMAL</Button>
					<Button onClick={() => handleClick('COUNTER')}>COUNTER</Button>
				</ButtonGroup>
			)}

			{buttons[0] === 'LAUNCH' && (
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button onClick={() => handleClick('NORMAL')}>NORMAL</Button>
					<Button onClick={() => handleClick('LAUNCH')}>LAUNCH</Button>
				</ButtonGroup>
			)}

			{buttons[0] === 'RAGE' && (
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button onClick={() => handleClick('RAGE ART')}>RAGE ART</Button>
					<Button onClick={() => handleClick('RAGE DRIVE')}>RAGE DRIVE</Button>
				</ButtonGroup>
			)}

			{buttons[0] === 'SAFETY' && (
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button onClick={() => handleClick('SAFE')}>SAFE</Button>
					<Button onClick={() => handleClick('UNSAFE')}>UNSAFE</Button>
				</ButtonGroup>
			)}

			{buttons[0] === 'SITUATIONAL' && (
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button onClick={() => handleClick('+ON BLOCK')}>+ON BLOCK</Button>
					<Button onClick={() => handleClick('POWER CRUSH')}>
						POWER CRUSH
					</Button>
					<Button onClick={() => handleClick('WALL BOUNCE')}>
						WALL BOUNCE
					</Button>
					<Button onClick={() => handleClick('HOMING')}>HOMING</Button>
				</ButtonGroup>
			)}

			{buttons[0] === 'STRINGS' && (
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button onClick={() => handleClick('SINGLE')}>SINGLE</Button>
					<Button onClick={() => handleClick('DOUBLE')}>DOUBLE</Button>
					<Button onClick={() => handleClick('TRIPPLE')}>TRIPPLE</Button>
				</ButtonGroup>
			)}
		</Grid>
	)
}
