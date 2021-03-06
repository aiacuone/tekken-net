import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'
import { cpInputs, buttonColors } from '../utils/vars'
import { buttonStyles } from '../components/Buttons'

export default function HeightSpecificInput({ state, setState }) {
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
    <>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <ButtonGroup
            orientation={isSmallScreen ? 'vertical' : 'horizontal'}
            color="primary"
            aria-label="outlined secondary button group">
            {cpInputs.height.map((item) => {
              return (
                <Button
                  color="info"
                  severity="info"
                  className={classes.button}
                  key={item}
                  style={{
                    background: buttons[2] === item && buttonFocusBackground,
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
