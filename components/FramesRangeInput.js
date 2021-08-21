import React, { useState } from 'react'
import Slider from '@material-ui/core/Slider'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
	sliderSmall: {
		height: 150,
	},
	sliderLarge: {
		width: 200,
	},
})

export default function FramesRangeInput({ vars }) {
	const [value1, setValue1] = useState(10)
	const [value2, setValue2] = useState(25)
	const { lgCPButtHeadSpacing, smCPButtHeadSpacing, isSmallScreen } = vars

	function valuetext(value, index) {
		index === 0 ? setValue1(value) : setValue2(value)
		return `${value}`
	}

	const classes = useStyles()

	const marks = [
		{
			value: value1,
			label: value1,
		},
		{
			value: value2,
			label: value2,
		},
	]
	return (
		<Grid
			container
			direction="column"
			alignItems="center"
			spacing={isSmallScreen ? smCPButtHeadSpacing : lgCPButtHeadSpacing}>
			{isSmallScreen && (
				<Grid item>
					<Typography>Frames/Range</Typography>
				</Grid>
			)}
			<Grid item>
				<div
					className={isSmallScreen ? classes.sliderSmall : classes.sliderLarge}>
					<Slider
						max={30}
						orientation={isSmallScreen ? 'vertical' : 'horizontal'}
						defaultValue={[10, 25]}
						aria-labelledby="track-inverted-range-slider"
						getAriaValueText={valuetext}
						marks={marks}
					/>
				</div>
			</Grid>
		</Grid>
	)
}
