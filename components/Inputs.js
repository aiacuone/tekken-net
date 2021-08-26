import React from 'react'
import FramesRangeInput from './FramesRangeInput'
import FramesSpecificInput from './FramesSpecificInput'
import HeightSpecificInput from './HeightSpecificInput'
import HeightStartNFinishInput from './HeightStartNFinishInput'

export default function Inputs({ state, setState }) {
  const { buttons } = state
  const firstButton = buttons[0]
  const secondButton = buttons[1]
  return (
    <>
      {firstButton === 'FRAMES' && secondButton === 'RANGE' && (
        <FramesRangeInput state={state} setState={setState} />
      )}
      {firstButton === 'FRAMES' && secondButton === 'SPECIFIC' && (
        <FramesSpecificInput state={state} setState={setState} />
      )}
      {firstButton === 'HEIGHT' && secondButton === 'SPECIFIC' && (
        <HeightSpecificInput state={state} setState={setState} />
      )}
      {firstButton === 'HEIGHT' && secondButton === 'START & FINISH' && (
        <HeightStartNFinishInput state={state} setState={setState} />
      )}
    </>
  )
}
