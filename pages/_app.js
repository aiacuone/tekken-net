import '../styles/globals.css'
import { useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

function MyApp({ Component, pageProps }) {
	const [buttons, setButtons] = useState([])
	const [expanded, setExpanded] = useState(false)
	const [characterDropdownValue, setCharacterDropdownValue] = useState('')
	const state = {
		buttons,
		expanded,
		characterDropdownValue,
		isSmallScreen: useMediaQuery('(max-width:600px'),
	}
	const setState = { setButtons, setExpanded, setCharacterDropdownValue }

	return <Component {...pageProps} state={state} setState={setState} />
}

export default MyApp
