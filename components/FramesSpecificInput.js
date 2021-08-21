import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default function FramesSpecificInput({ vars }) {
	const { lgCPButtHeadSpacing, smCPButtHeadSpacing, isSmallScreen } = vars
	0
	function handleClick(e) {
		return
	}

	return (
		<Grid
			container
			alignItems="center"
			direction="column"
			spacing={isSmallScreen ? smCPButtHeadSpacing : lgCPButtHeadSpacing}>
			{isSmallScreen && (
				<Grid item>
					<Typography>Frames/Specific</Typography>
				</Grid>
			)}
			<Grid item>
				<ButtonGroup
					orientation={isSmallScreen ? 'vertical' : 'horizontal'}
					color="primary"
					aria-label="outlined secondary button group">
					<Button value={'0-13'} onClick={handleClick}>
						0-13
					</Button>
					<Button value={'13-17'} onClick={handleClick}>
						13-17
					</Button>
					<Button value={'17-20'} onClick={handleClick}>
						17-20
					</Button>
					<Button value={'20-'} onClick={handleClick}>
						20-
					</Button>
				</ButtonGroup>
			</Grid>
		</Grid>
	)
}
