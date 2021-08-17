import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import styles from '../styles/ControlPanel.module.css'

export default function ButtonsVertical2({ state, setState }) {
	const { buttons } = state
	const { setButtons, setExpanded } = setState

	useEffect(() => {
		// setButtons([])
		// setExpanded(false)
	}, [])

	function handleClick() {
		const newButtons = [...buttons]
		newButtons.pop()
		setButtons(newButtons)
	}

	return (
		<Grid
			container
			direction="column"
			// justifyContent="center"
			alignItems="center">
			<Grid item className={styles.back_small_CP}>
				<Button
					variant="outlined"
					size="small"
					color="primary"
					onClick={handleClick}>
					Back
				</Button>
			</Grid>
			<Grid item>
				{buttons[0] === 'FRAMES' && (
					<ButtonGroup
						orientation="vertical"
						color="primary"
						aria-label="vertical outlined primary button group">
						<Button>RANGE</Button>
						<Button>SPECIFIC</Button>
					</ButtonGroup>
				)}

				{buttons[0] === 'HEIGHT' && (
					<ButtonGroup
						orientation="vertical"
						color="primary"
						aria-label="vertical outlined primary button group">
						<Button>SPECIFIC</Button>
						<Button>START & FINISH</Button>
					</ButtonGroup>
				)}

				{buttons[0] === 'KNOCKDOWN' && (
					<ButtonGroup
						orientation="vertical"
						color="primary"
						aria-label="vertical outlined primary button group">
						<Button>NORMAL</Button>
						<Button>COUNTER</Button>
					</ButtonGroup>
				)}

				{buttons[0] === 'LAUNCH' && (
					<ButtonGroup
						orientation="vertical"
						color="primary"
						aria-label="vertical outlined primary button group">
						<Button>NORMAL</Button>
						<Button>LAUNCH</Button>
					</ButtonGroup>
				)}

				{buttons[0] === 'RAGE' && (
					<ButtonGroup
						orientation="vertical"
						color="primary"
						aria-label="vertical outlined primary button group">
						<Button>RAGE ART</Button>
						<Button>RAGE DRIVE</Button>
					</ButtonGroup>
				)}

				{buttons[0] === 'SAFETY' && (
					<ButtonGroup
						orientation="vertical"
						color="primary"
						aria-label="vertical outlined primary button group">
						<Button>SAFE</Button>
						<Button>UNSAFE</Button>
					</ButtonGroup>
				)}

				{buttons[0] === 'SITUATIONAL' && (
					<ButtonGroup
						orientation="vertical"
						color="primary"
						aria-label="vertical outlined primary button group">
						<Button>+ON BLOCK</Button>
						<Button>POWER CRUSH</Button>
						<Button>WALL BOUNCE</Button>
						<Button>HOMING</Button>
					</ButtonGroup>
				)}

				{buttons[0] === 'STRINGS' && (
					<ButtonGroup
						orientation="vertical"
						color="primary"
						aria-label="vertical outlined primary button group">
						<Button>SINGLE</Button>
						<Button>DOUBLE</Button>
						<Button>TRIPPLE</Button>
					</ButtonGroup>
				)}
			</Grid>
		</Grid>
	)
}
