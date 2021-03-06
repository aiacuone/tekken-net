import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import homeStyles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import tekkennetLogo from '../public/images/tekkennetLogo.svg'
import screenshot from '../public/images/screenshot.png'

export default function Home({ state, setState }) {
  const [activeStep, setActiveStep] = useState(0)
  const { isSmallScreen } = state

  const steps = getSteps()

  const handleNext = () => {
    if (activeStep < 2) setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  function getSteps() {
    return ['Welcome', 'Purpose', 'Instructions']
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }))

  const classes = useStyles()

  const TekkenetLogo = () => {
    return <Image alt="" width="400" height="50" src={tekkennetLogo}></Image>
  }

  const MainContent = () => {
    const content =
      activeStep === 0 ? (
        <>
          <Grid item>
            <Typography variant={isSmallScreen ? 'h5' : 'h4'} align="center">
              Welcome
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center">
              Thank you for taking the time to visit my personal Tekken-Net
              project.
            </Typography>
          </Grid>
        </>
      ) : activeStep === 1 ? (
        <Grid
          container
          direction="column"
          spacing={3}
          style={{ padding: isSmallScreen ? '20px' : '70px' }}>
          <Grid item>
            <Typography variant={isSmallScreen ? 'h5' : 'h4'} align="center">
              Purpose
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center">
              Tekken-Net combines two passions, Tekken and Web Development, then
              looks to improve both areas, firstly by getting more experience
              and improving my skills with Web Development, but also better
              simplifies the game Tekken which is already a very difficult game.
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center">
              Tekken-Net gathers the information that can be found on&nbsp;
              <a href="https://rbnorway.org/t7-frame-data/">rbnorway</a>, and
              gives the user the opportunity to filter moves within seconds,
              rather than manually searching through excel spreadsheet.
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid item>
            <Typography variant={isSmallScreen ? 'h5' : 'h4'} align="center">
              Instructions
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center">
              Using the control panel located at the top of the screen, use the
              select dropdown menu to select a character, then use the
              categorised buttons to filter the moves you wish.
            </Typography>
          </Grid>
          <Grid item>
            <Image alt="" src={screenshot} />
          </Grid>
          <Grid item>
            <Typography align="center">
              Thank you for your time, please select the &#39;GO TO APP&#39;
              button below to continue.
            </Typography>
          </Grid>
        </>
      )
    return content
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={homeStyles.intro_container}>
      <Head>
        <title>Introduction</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/tekkenIcon.ico" />
      </Head>
      <Image
        alt=""
        className={homeStyles.background}
        src="/images/backgroundSVG.svg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid item>
          <Grid
            container
            direction="column"
            className={classes.root}
            spacing={2}
            alignItems="center">
            <Grid item>
              <Paper
                style={{
                  // width: isSmallScreen ? '300px' : '800px',
                  width: isSmallScreen ? '300px' : '80vw',
                  maxWidth: '800px',
                  height: '70vh',
                  minHeight: isSmallScreen ? '580px' : '700px',
                }}>
                <div className={homeStyles.intro_main_content}>
                  <Grid
                    style={{
                      padding: isSmallScreen ? '10px' : '70px',
                    }}
                    direction="column"
                    className={homeStyles.intro_content}
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}>
                    <Grid item style={{ position: 'absolute', top: -15 }}>
                      <TekkenetLogo />
                    </Grid>
                    <MainContent />
                  </Grid>
                  <div className={homeStyles.intro_stepper_container}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item>
              <Grid item>
                <Grid container>
                  <Grid item>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.backButton}>
                      Back
                    </Button>
                  </Grid>
                  <Grid item>
                    <Link href={activeStep === 2 ? '/main' : ''}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}>
                        {activeStep === 2 ? 'Go To App' : 'Next'}
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
