import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

export default function HeightSpecificInput({ state, setState, vars }) {
	const { buttons } = state
	const { setButtons } = setState
	const { lgCPButtHeadSpacing, smCPButtHeadSpacing, isSmallScreen } = vars

	function handleClick(value) {
		const newButtons = [...buttons]
		newButtons[2] = value
		setButtons(newButtons)
	}

	return (
		<>
			<Grid
				container
				direction="column"
				alignItems="center"
				spacing={isSmallScreen ? smCPButtHeadSpacing : lgCPButtHeadSpacing}>
				{isSmallScreen && (
					<Grid item>
						<Typography>Height/Specific</Typography>
					</Grid>
				)}
				<Grid item>
					<ButtonGroup
						orientation={isSmallScreen ? 'vertical' : 'horizontal'}
						color="primary"
						aria-label="outlined secondary button group">
						<Button value="H" onClick={() => handleClick('H')}>
							H
						</Button>
						<Button value="M" onClick={() => handleClick('M')}>
							M
						</Button>
						<Button value="L" onClick={() => handleClick('L')}>
							L
						</Button>
					</ButtonGroup>
				</Grid>
			</Grid>
		</>
	)
}
