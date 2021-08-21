import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Typography from '@material-ui/core/Typography'
import styles from '../styles/ControlPanel.module.css'

export default function Buttons({ state, setState, vars }) {
	const {
		isSmallScreen,
		smCPButtHeadSpacing,
		lgCPButtHeadSpacing,
		wording,
		CPSpacing,
	} = vars
	const { buttons } = state
	const { setButtons } = setState

	const showButtons1 =
		!isSmallScreen || (isSmallScreen && buttons.length === 0) ? true : false

	const showButtons2 =
		!isSmallScreen || (isSmallScreen && buttons.length === 1) ? true : false

	const buttonOrientation = isSmallScreen ? 'vertical' : 'horizontal'

	const buttonSpacing = isSmallScreen
		? smCPButtHeadSpacing
		: lgCPButtHeadSpacing

	function handleClick(value, index) {
		const newButtons = [...buttons]
		index === 0 && newButtons.pop()
		newButtons[index] = value
		setButtons(newButtons)
	}

	return (
		<Grid container direction="column" alignItems="center" spacing={CPSpacing}>
			{showButtons1 && (
				<Grid item>
					<ButtonGroup
						orientation={isSmallScreen ? 'vertical' : 'horizontal'}
						color="primary"
						aria-label="outlined secondary button group">
						<Button onClick={() => handleClick('FRAMES', 0)}>FRAMES</Button>
						<Button onClick={() => handleClick('HEIGHT', 0)}>HEIGHT</Button>
						<Button onClick={() => handleClick('KNOCKDOWN', 0)}>
							KNOCKDOWN
						</Button>
						<Button onClick={() => handleClick('LAUNCH', 0)}>LAUNCH</Button>
						<Button onClick={() => handleClick('RAGE', 0)}>RAGE</Button>
						<Button onClick={() => handleClick('SAFETY', 0)}>SAFETY</Button>
						<Button onClick={() => handleClick('SITUATIONAL', 0)}>
							SITUATIONAL
						</Button>
						<Button onClick={() => handleClick('STRINGS', 0)}>STRINGS</Button>
					</ButtonGroup>
				</Grid>
			)}
			<Grid item>
				<Grid
					container
					direction="column"
					alignItems="center"
					spacing={buttonSpacing}>
					{showButtons2 && buttons[0] === 'FRAMES' && (
						<Grid item>
							<ButtonGroup
								orientation={buttonOrientation}
								color="primary"
								aria-label="vertical outlined primary button group">
								<Button onClick={() => handleClick('RANGE', 1)}>
									{wording['RANGE']}
								</Button>
								<Button onClick={() => handleClick('SPECIFIC', 1)}>
									{wording['SPECIFIC']}
								</Button>
							</ButtonGroup>
						</Grid>
					)}
					{showButtons2 && buttons[0] === 'HEIGHT' && (
						<Grid item>
							<ButtonGroup
								orientation={buttonOrientation}
								color="primary"
								aria-label="vertical outlined primary button group">
								<Button onClick={() => handleClick('SPECIFIC', 1)}>
									{wording['SPECIFIC']}
								</Button>
								<Button onClick={() => handleClick('START & FINISH', 1)}>
									{wording['START & FINISH']}
								</Button>
							</ButtonGroup>
						</Grid>
					)}
					{showButtons2 && buttons[0] === 'KNOCKDOWN' && (
						<Grid item>
							<ButtonGroup
								orientation={buttonOrientation}
								color="primary"
								aria-label="vertical outlined primary button group">
								<Button onClick={() => handleClick('NORMAL', 1)}>
									{wording['NORMAL']}
								</Button>
								<Button onClick={() => handleClick('COUNTER', 1)}>
									{wording['COUNTER']}
								</Button>
							</ButtonGroup>
						</Grid>
					)}
					{showButtons2 && buttons[0] === 'LAUNCH' && (
						<Grid item>
							<ButtonGroup
								orientation={buttonOrientation}
								color="primary"
								aria-label="vertical outlined primary button group">
								<Button onClick={() => handleClick('NORMAL', 1)}>
									{wording['NORMAL']}
								</Button>
								<Button onClick={() => handleClick('LAUNCH', 1)}>
									{wording['LAUNCH']}
								</Button>
							</ButtonGroup>
						</Grid>
					)}
					{showButtons2 && buttons[0] === 'RAGE' && (
						<Grid item>
							<ButtonGroup
								orientation={buttonOrientation}
								color="primary"
								aria-label="vertical outlined primary button group">
								<Button onClick={() => handleClick('RAGE ART', 1)}>
									{wording['RAGE ART']}
								</Button>
								<Button onClick={() => handleClick('RAGE DRIVE', 1)}>
									{wording['RAGE DRIVE']}
								</Button>
							</ButtonGroup>
						</Grid>
					)}
					{showButtons2 && buttons[0] === 'SAFETY' && (
						<Grid item>
							<ButtonGroup
								orientation={buttonOrientation}
								color="primary"
								aria-label="vertical outlined primary button group">
								<Button onClick={() => handleClick('SAFE', 1)}>
									{wording['SAFE']}
								</Button>
								<Button onClick={() => handleClick('UNSAFE', 1)}>
									{wording['UNSAFE']}
								</Button>
							</ButtonGroup>
						</Grid>
					)}
					{showButtons2 && buttons[0] === 'SITUATIONAL' && (
						<Grid item>
							<ButtonGroup
								orientation={buttonOrientation}
								color="primary"
								aria-label="vertical outlined primary button group">
								<Button onClick={() => handleClick('+ON BLOCK', 1)}>
									{wording['+ON BLOCK']}
								</Button>
								<Button onClick={() => handleClick('POWER CRUSH', 1)}>
									{wording['POWER CRUSH']}
								</Button>
								<Button onClick={() => handleClick('WALL BOUNCE', 1)}>
									{wording['WALL BOUNCE']}
								</Button>
								<Button onClick={() => handleClick('HOMING', 1)}>
									{wording['HOMING']}
								</Button>
							</ButtonGroup>
						</Grid>
					)}
					{showButtons2 && buttons[0] === 'STRINGS' && (
						<Grid item>
							<ButtonGroup
								orientation={buttonOrientation}
								color="primary"
								aria-label="vertical outlined primary button group">
								<Button onClick={() => handleClick('SINGLE', 1)}>
									{wording['SINGLE']}
								</Button>
								<Button onClick={() => handleClick('DOUBLE', 1)}>
									{wording['DOUBLE']}
								</Button>
								<Button onClick={() => handleClick('TRIPPLE', 1)}>
									{wording['TRIPPLE']}
								</Button>
							</ButtonGroup>
						</Grid>
					)}
				</Grid>
			</Grid>
		</Grid>
	)
}
