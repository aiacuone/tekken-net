import '../styles/globals.css'
import { useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { inputValues } from '../utils/vars'

function MyApp({ Component, pageProps }) {
  const [buttons, setButtons] = useState([])
  const [expanded, setExpanded] = useState(false)
  const [framesRange, setFramesRange] = useState({ min: 10, max: 25 })
  const [characterDropdownValue, setCharacterDropdownValue] = useState('akuma')
  const [smallCPshowTable, setSmallCPshowTable] = useState(false)
  const isSmallScreen = useMediaQuery('(max-width:600px')
  const isMediumScreen = useMediaQuery('(max-width:1920')
  const isInputValue = inputValues.indexOf(buttons[1]) > -1 ? true : false
  const isButtonValue = inputValues.indexOf(buttons[1]) === -1 ? true : false
  const [notify, setNotify] = useState(false)

  const attr1 =
    buttons[1] === 'RANGE'
      ? framesRange['min']
      : buttons[0] === 'HEIGHT' && buttons[1] === 'SPECIFIC'
      ? buttons[2]
      : buttons[1] === 'START & FINISH'
      ? buttons[2]?.[0]
      : buttons[0] === 'FRAMES' && buttons[1] === 'GROUP'
      ? buttons[2]?.[0]
      : null

  const attr2 =
    buttons[1] === 'RANGE'
      ? framesRange['max']
      : buttons[1] === 'START & FINISH'
      ? buttons[2]?.[1]
      : buttons[0] === 'FRAMES' && buttons[1] === 'GROUP'
      ? buttons[2]?.[1]
      : null

  console.log(attr1, attr2)
  const enableSubmitButton =
    (isInputValue &&
      buttons.length === 3 &&
      buttons[1] === 'START & FINISH' &&
      buttons[2][0] &&
      buttons[2][1]) ||
    (isInputValue && buttons[1] === 'RANGE') ||
    (isInputValue && buttons.length === 3 && buttons[1] !== 'START & FINISH') ||
    (isButtonValue && buttons.length > 1)
      ? true
      : false

  const showSubmitButton =
    (buttons[0] && inputValues.indexOf(buttons[0]) === -1) ||
    inputValues.indexOf(buttons[1]) > -1
      ? true
      : false

  const state = {
    buttons,
    expanded,
    characterDropdownValue,
    isSmallScreen,
    framesRange,
    isButtonValue,
    isInputValue,
    enableSubmitButton,
    showSubmitButton,
    smallCPshowTable,
    attr1,
    attr2,
    isMediumScreen,
    notify,
  }
  const setState = {
    setButtons,
    setExpanded,
    setCharacterDropdownValue,
    setFramesRange,
    setSmallCPshowTable,
    setNotify,
  }

  return <Component {...pageProps} state={state} setState={setState} />
}

export default MyApp
