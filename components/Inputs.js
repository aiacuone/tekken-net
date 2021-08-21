import React from 'react'
import Grid from '@material-ui/core/Grid'
import FramesRangeInput from './FramesRangeInput'
import FramesSpecificInput from './FramesSpecificInput'
import HeightSpecificInput from './HeightSpecificInput'
import HeightStartNFinishInput from './HeightStartNFinishInput'

export default function Inputs({ state, setState, vars }) {
	const { buttons } = state
	const { setButtons } = setState
	const { inputSpacing } = vars
	const firstButton = buttons[0]
	const secondButton = buttons[1]
	return (
		<>
			{firstButton === 'FRAMES' && secondButton === 'RANGE' && (
				<FramesRangeInput state={state} setState={setState} vars={vars} />
			)}
			{firstButton === 'FRAMES' && secondButton === 'SPECIFIC' && (
				<FramesSpecificInput state={state} setState={setState} vars={vars} />
			)}
			{firstButton === 'HEIGHT' && secondButton === 'SPECIFIC' && (
				<HeightSpecificInput state={state} setState={setState} vars={vars} />
			)}
			{firstButton === 'HEIGHT' && secondButton === 'START & FINISH' && (
				<HeightStartNFinishInput
					state={state}
					setState={setState}
					vars={vars}
				/>
			)}
		</>
	)
}
