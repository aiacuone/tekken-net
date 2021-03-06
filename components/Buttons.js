import React from 'react'
import Grid from '@material-ui/core/Grid'

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {
  smCPButtHeadSpacing,
  lgCPButtHeadSpacing,
  cpSpacing,
  buttonColors,
  cpButtons,
} from '../utils/vars'
import { getFilteredMoveList } from '../components/Table'
import { makeStyles } from '@material-ui/core/styles'

export default function Buttons({ state, setState }) {
  const {
    buttons,
    isSmallScreen,
    attr1,
    attr2,
    characterDropdownValue,
    isButtonValue,
  } = state
  const { setButtons, setNotify, setFramesRange } = setState
  const { buttonFocusBackground } = buttonColors['buttonBackground']

  const showButtons1 =
    !isSmallScreen || (isSmallScreen && buttons.length === 0) ? true : false

  const showButtons2 =
    !isSmallScreen || (isSmallScreen && buttons.length > 0) ? true : false

  const buttonOrientation = isSmallScreen ? 'vertical' : 'horizontal'

  const buttonSpacing = isSmallScreen
    ? smCPButtHeadSpacing
    : lgCPButtHeadSpacing

  function handleClick(value, index) {
    // setFramesRange([10, 25]) // 50/50 about this
    index === 1 && setNotify(true)
    const newButtons = [...buttons]
    newButtons.length === 3 && newButtons.pop()
    index === 0 && newButtons.pop()
    newButtons[index] = value
    setButtons(newButtons)
  }

  const showTable =
    (buttons[0] && buttons[1] && !isSmallScreen && isButtonValue) ||
    (buttons[0] && buttons[1] && !isSmallScreen && buttons[1] === 'RANGE') ||
    (buttons[0] &&
      buttons[1] &&
      buttons[2] &&
      !isSmallScreen &&
      buttons[1] !== 'START & FINISH') ||
    (buttons[0] &&
      buttons[1] &&
      buttons[2]?.[0] &&
      buttons[2]?.[1] &&
      !isSmallScreen)
      ? true
      : false

  showTable &&
    getFilteredMoveList({
      attr1,
      attr2,
      button1: buttons[0],
      button2: buttons[1],
      character: characterDropdownValue,
    })

  const classes = buttonStyles()

  return (
    <Grid container direction="column" alignItems="center" spacing={cpSpacing}>
      {showButtons1 && (
        <Grid item>
          <ButtonGroup
            orientation={isSmallScreen ? 'vertical' : 'horizontal'}
            color="primary"
            aria-label="outlined secondary button group">
            {Object.keys(cpButtons).map((item) => {
              return (
                <Button
                  className={classes.button}
                  color="info"
                  severity="info"
                  key={item}
                  style={{
                    background: buttons[0] === item && buttonFocusBackground,
                  }}
                  onClick={() => handleClick(item, 0)}>
                  {item}
                </Button>
              )
            })}
          </ButtonGroup>
        </Grid>
      )}
      {showButtons2 && buttons.length > 0 && (
        <Grid item>
          <Grid
            container
            direction="column"
            alignItems="center"
            spacing={buttonSpacing}>
            <Grid item>
              <ButtonGroup
                orientation={buttonOrientation}
                color="primary"
                aria-label="vertical outlined primary button group">
                {cpButtons[buttons[0]].map((item) => {
                  return (
                    <Button
                      className={classes.button}
                      color="info"
                      severity="info"
                      key={`${buttons[0]}/${item}`}
                      style={{
                        background:
                          buttons[1] === item && buttonFocusBackground,
                      }}
                      onClick={() => handleClick(item, 1)}>
                      {item}
                    </Button>
                  )
                })}
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

export const buttonStyles = makeStyles((theme) => ({
  button: {
    '&:hover': {
      borderColor: 'grey',
    },
  },
}))
