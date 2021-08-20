import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Slider from '@material-ui/core/Slider'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles({
	sliderSmall: {
		height: 200,
	},
	sliderLarge: {
		width: 200,
	},
})

export default function FramesRangeInput() {
	const [value1, setValue1] = useState(10)
	const [value2, setValue2] = useState(25)

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
		<>
			<Hidden mdUp>
				<div className={classes.sliderSmall}>
					<Slider
						max={30}
						orientation="vertical"
						defaultValue={[10, 25]}
						aria-labelledby="vertical-slider"
						getAriaValueText={valuetext}
						marks={marks}
					/>
				</div>
			</Hidden>
			<Hidden smDown>
				<div className={classes.sliderLarge}>
					<Slider
						max={30}
						aria-labelledby="track-inverted-range-slider"
						getAriaValueText={valuetext}
						defaultValue={[10, 25]}
						marks={marks}
					/>
				</div>
			</Hidden>
		</>
	)
}
