import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import styles from '../styles/ControlPanel.module.css'

export default function ButtonsHorizontal2({ state, setState }) {
	const { buttons } = state
	const { setButtons, setExpanded } = setState

	useEffect(() => {
		setButtons([])
		setExpanded(false)
	}, [])

	return (
		<Grid container justifyContent="center">
			{buttons[0] === 'FRAMES' && (
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button>RANGE</Button>
					<Button>SPECIFIC</Button>
				</ButtonGroup>
			)}

			{buttons[0] === 'HEIGHT' && (
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button>SPECIFIC</Button>
					<Button>START & FINISH</Button>
				</ButtonGroup>
			)}

			{buttons[0] === 'KNOCKDOWN' && (
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button>NORMAL</Button>
					<Button>COUNTER</Button>
				</ButtonGroup>
			)}

			{buttons[0] === 'LAUNCH' && (
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button>NORMAL</Button>
					<Button>LAUNCH</Button>
				</ButtonGroup>
			)}

			{buttons[0] === 'RAGE' && (
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button>RAGE ART</Button>
					<Button>RAGE DRIVE</Button>
				</ButtonGroup>
			)}

			{buttons[0] === 'SAFETY' && (
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button>SAFE</Button>
					<Button>UNSAFE</Button>
				</ButtonGroup>
			)}

			{buttons[0] === 'SITUATIONAL' && (
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button>+ON BLOCK</Button>
					<Button>POWER CRUSH</Button>
					<Button>WALL BOUNCE</Button>
					<Button>HOMING</Button>
				</ButtonGroup>
			)}

			{buttons[0] === 'STRINGS' && (
				<ButtonGroup
					color="primary"
					aria-label="outlined secondary button group">
					<Button>SINGLE</Button>
					<Button>DOUBLE</Button>
					<Button>TRIPPLE</Button>
				</ButtonGroup>
			)}
		</Grid>
	)
}
