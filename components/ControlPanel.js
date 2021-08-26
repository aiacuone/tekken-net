import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "../styles/ControlPanel.module.css";
import Buttons from "./Buttons";
import Inputs from "./Inputs";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CharacterDropdown from "../components/CharacterDropdown";
import tekkennetLogo from "../public/images/tekkennetLogo.svg";
import Image from "next/image";
import { cpSpacing, wording, smCPSpacing } from "../utils/vars";
import { getFilteredMoveList } from "../components/Table";

export default function ControlPanel({ state, setState }) {
  const {
    buttons,
    expanded,
    isSmallScreen,
    enableSubmitButton,
    showSubmitButton,
    isInputValue,
    attr1,
    attr2,
    characterDropdownValue,
    isButtonValue,
  } = state;
  const { setExpanded, setButtons } = setState;

  function handleAccordion() {
    setButtons([]);
    setExpanded(!expanded);
  }

  useEffect(() => {
    setExpanded(false);
  }, []);

  function handleBack() {
    const newButtons = [...buttons];
    newButtons.length > 2
      ? newButtons.splice(1, 2)
      : isButtonValue
      ? newButtons.splice(0, 2)
      : newButtons.pop();
    setButtons(newButtons);
  }

  function handleSubmit() {
    getFilteredMoveList({
      attr1,
      attr2,
      character: characterDropdownValue,
      button1: buttons[0],
      button2: buttons[1],
    });
  }

  const TekkennetLogo = () => {
    return <Image layout="fixed" height="50" width="350" src={tekkennetLogo} />;
  };

  return (
    <Grid container justifyContent="center">
      {isSmallScreen && (
        <Grid item style={{ position: "absolute", top: 3 }}>
          <TekkennetLogo />
        </Grid>
      )}
      {isSmallScreen ? (
        <Grid
          container
          direction="column"
          alignItems="center"
          style={{ position: "absolute", top: 40, zIndex: "-1" }}
        >
          <Grid item>
            <Accordion
              className={styles.accordion}
              expanded={expanded}
              onChange={handleAccordion}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <AccordionSummary
                expandIcon={<MenuIcon fontSize="medium" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails>
                <Grid
                  className={styles.small_cp_container}
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  spacing={smCPSpacing}
                >
                  <Grid item style={{ position: "absolute", top: -20 }}>
                    <CharacterDropdown state={state} setState={setState} />
                  </Grid>
                  {buttons.length > 0 && (
                    <Grid item>
                      <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        onClick={handleBack}
                      >
                        Back
                      </Button>
                    </Grid>
                  )}

                  {!isInputValue ? (
                    <Grid item>
                      <Grid
                        container
                        direction="column"
                        alignItems="center"
                        style={{ position: "relative" }}
                      >
                        {buttons.length < 3 && (
                          <Grid item className={styles.smallCPHeader}>
                            <Typography>{wording[buttons[0]]}</Typography>
                          </Grid>
                        )}

                        <Grid item>
                          <Buttons state={state} setState={setState} />
                        </Grid>
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid item style={{ position: "relative" }}>
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid item className={styles.input_header}>
                          <Typography noWrap>{`${wording[buttons[0]]} / ${
                            wording[buttons[1]]
                          }`}</Typography>
                        </Grid>
                        <Grid item>
                          <Inputs state={state} setState={setState} />
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                  {showSubmitButton && (
                    <Grid item className={styles.back_small_CP}>
                      <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        onClick={handleSubmit}
                        disabled={!enableSubmitButton}
                      >
                        Submit
                      </Button>
                    </Grid>
                  )}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={cpSpacing}
        >
          <Grid item>
            <Buttons state={state} setState={setState} />
          </Grid>
          {buttons.length > 1 && (
            <Grid item>
              <Inputs state={state} setState={setState} />
            </Grid>
          )}
        </Grid>
      )}
    </Grid>
  );
}
