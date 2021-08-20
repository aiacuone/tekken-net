import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ButtonsSmallCP2 from './ButtonsSmallCP2'
import styles from '../styles/ControlPanel.module.css'
import InputSmallCP from './InputSmallCP'
import Grid from '@material-ui/core/Grid'

export default function FramesSpecificInput() {
	function handleClick(e) {
		return
	}

	return (
		<>
			<ButtonGroup
				orientation="vertical"
				color="primary"
				aria-label="outlined secondary button group"
				// variant="contained"
			>
				<Button value={'0-13'} onClick={handleClick}>
					0-13
				</Button>
				<Button value={'13-17'} onClick={handleClick}>
					13-17
				</Button>
				<Button value={'17-20'} onClick={handleClick}>
					17-20
				</Button>
				<Button value={'20-'} onClick={handleClick}>
					20-
				</Button>
			</ButtonGroup>
		</>
	)
}
