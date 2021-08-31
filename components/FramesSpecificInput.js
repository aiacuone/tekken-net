import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'
import {
  lgCPButtHeadSpacing,
  smCPButtHeadSpacing,
  cpInputs,
  buttonColors,
} from '../utils/vars'
import { buttonStyles } from '../components/Buttons'

export default function FramesSpecificInput({ state, setState }) {
  const { buttons, isSmallScreen } = state
  const { setButtons } = setState
  const { buttonFocusBackground, buttonBlurBackground } =
    buttonColors['buttonBackground']

  function handleClick(value) {
    const newButtons = [...buttons]
    newButtons[2] = value
    setButtons(newButtons)
  }

  const classes = buttonStyles()

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      spacing={isSmallScreen ? smCPButtHeadSpacing : lgCPButtHeadSpacing}>
      <Grid item>
        <ButtonGroup
          orientation={isSmallScreen ? 'vertical' : 'horizontal'}
          color="primary"
          aria-label="outlined secondary button group">
          {cpInputs['framesSpecific'].map((item) => {
            return (
              <Button
                className={classes.button}
                color="info"
                severity="info"
                key={item}
                style={{
                  background: buttons[2] === item && buttonFocusBackground,
                }}
                value={item}
                onClick={() => handleClick(item)}>
                {item[1] ? `${item[0]} - ${item[1]}` : `${item[0]} -`}
              </Button>
            )
          })}
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}
