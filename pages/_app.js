import '../styles/globals.css'
import { useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

function MyApp({ Component, pageProps }) {
	const [buttons, setButtons] = useState([])
	const [expanded, setExpanded] = useState(false)
	const [framesRange, setFramesRange] = useState({ min: 10, max: 25 })
	const [characterDropdownValue, setCharacterDropdownValue] = useState('Akuma')
	const state = {
		buttons,
		expanded,
		characterDropdownValue,
		isSmallScreen: useMediaQuery('(max-width:600px'),
		framesRange,
	}
	const setState = {
		setButtons,
		setExpanded,
		setCharacterDropdownValue,
		setFramesRange,
	}

	return <Component {...pageProps} state={state} setState={setState} />
}

export default MyApp
