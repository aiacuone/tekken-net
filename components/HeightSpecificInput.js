import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

export default function HeightSpecificInput({ state, setState, vars }) {
	const { buttons } = state
	const { setButtons } = setState
	const {
		lgCPButtHeadSpacing,
		smCPButtHeadSpacing,
		isSmallScreen,
		CPInputs,
		buttonColors,
	} = vars
	const { buttonFocusBackground, buttonBlurBackground } =
		buttonColors['buttonBackground']

	function handleClick(value) {
		const newButtons = [...buttons]
		newButtons[2] = value
		setButtons(newButtons)
	}

	return (
		<>
			<Grid container direction="column" alignItems="center">
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
											buttons[2] === item
												? buttonFocusBackground
												: buttonBlurBackground,
									}}
									value={item}
									onClick={() => handleClick(item)}>
									{item}
								</Button>
							)
						})}
					</ButtonGroup>
				</Grid>
			</Grid>
		</>
	)
}
