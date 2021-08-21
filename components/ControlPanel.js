import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import MenuIcon from '@material-ui/icons/Menu'
import styles from '../styles/ControlPanel.module.css'
import Buttons from './Buttons'
import Inputs from './Inputs'
import Button from '@material-ui/core/Button'

export default function ControlPanel({ state, setState, vars }) {
	const { buttons, expanded } = state
	const { setExpanded, setButtons } = setState
	const { isSmallScreen, CPSpacing } = vars
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}
	useEffect(() => {
		setExpanded(false)
	}, [])

	function handleBack() {
		const newButtons = [...buttons]
		newButtons.pop()
		setButtons(newButtons)
	}
	return (
		<Grid container>
			{isSmallScreen ? (
				<Grid container direction="column" alignItems="center">
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
								{buttons.length > 0 && (
									<Grid item className={styles.back_small_CP}>
										<Button
											variant="outlined"
											size="small"
											color="primary"
											onClick={handleBack}>
											Back
										</Button>
									</Grid>
								)}
								{expanded && (
									<Buttons state={state} setState={setState} vars={vars} />
								)}
								{buttons.length === 2 && (
									<Inputs state={state} setState={setState} vars={vars} />
								)}
							</AccordionDetails>
						</Accordion>
					</Grid>
				</Grid>
			) : (
				<Grid
					container
					direction="column"
					alignItems="center"
					spacing={CPSpacing}>
					<Grid item>
						<Buttons state={state} setState={setState} vars={vars} />
					</Grid>
					{buttons.length === 2 && (
						<Inputs state={state} setState={setState} vars={vars} />
					)}
				</Grid>
			)}
		</Grid>
	)
}
