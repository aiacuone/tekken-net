import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Hidden from '@material-ui/core/Hidden'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import MenuIcon from '@material-ui/icons/Menu'
// import ButtonsVertical2 from './ButtonsVertical2'
import styles from '../styles/ControlPanel.module.css'
import ButtonsSmallCP from './ButtonsSmallCP'

export default function CPSmall({ state, setState }) {
	const { buttons, expanded } = state
	const { setExpanded, setButtons } = setState
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}
	useEffect(() => {
		setExpanded(false)
	}, [])

	return (
		<Grid item>
			<Accordion
				className={styles.accordion}
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<AccordionSummary
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
					expandIcon={<MenuIcon fontSize="medium" />}
					aria-controls="panel1a-content"
					id="panel1a-header"></AccordionSummary>
				<AccordionDetails className={styles.accordion_summary}>
					{expanded && <ButtonsSmallCP state={state} setState={setState} />}
				</AccordionDetails>
			</Accordion>
		</Grid>
	)
}
