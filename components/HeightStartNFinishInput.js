import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default function HeightStartNFinishInput({ state, setState, vars }) {
	const { buttons } = state
	const { setButtons } = setState
	const { isSmallScreen, CPInputs, buttonColors } = vars
	const { buttonFocusBackground, buttonBlurBackground } =
		buttonColors['buttonBackground']

	function handleClick(value, index) {
		const newButtons = [...buttons]
		let arr = ['', '']
		if (!newButtons[2]) {
			arr[index] = value
			newButtons[2] = arr
		} else {
			arr = [...newButtons[2]]
			arr[index] = value
			newButtons[2] = arr
		}
		newButtons[2] = arr
		setButtons(newButtons)
	}

	return (
		<Grid container direction="column" alignItems="center">
			<Grid item>
				<Grid container spacing={3}>
					<Grid item>
						<Grid container direction="column" alignItems="center" spacing={1}>
							<Grid item>
								<Typography>Start</Typography>
							</Grid>
							<Grid item>
								<ButtonGroup
									orientation={isSmallScreen ? 'vertical' : 'horizontal'}
									color="primary"
									aria-label="outlined secondary button group">
									{CPInputs.height.map((item) => {
										return (
											<Button
												style={{
													background:
														buttons[2]?.[0] === item
															? buttonFocusBackground
															: buttonBlurBackground,
												}}
												value={item}
												onClick={() => handleClick(item, 0)}>
												{item}
											</Button>
										)
									})}
								</ButtonGroup>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Grid container direction="column" alignItems="center" spacing={1}>
							<Grid item>
								<Typography>Finish</Typography>
							</Grid>
							<Grid item>
								<ButtonGroup
									orientation={isSmallScreen ? 'vertical' : 'horizontal'}
									color="primary"
									aria-label="outlined secondary button group">
									{CPInputs.height.map((item) => {
										return (
											<Button
												style={{
													background:
														buttons[2]?.[1] === item
															? buttonFocusBackground
															: buttonBlurBackground,
												}}
												value={item}
												onClick={() => handleClick(item, 1)}>
												{item}
											</Button>
										)
									})}
								</ButtonGroup>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}
