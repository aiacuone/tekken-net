import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import MenuIcon from "@material-ui/icons/Menu";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ButtonsHorizontal from "../components/ButtonsHorizontal";
import ButtonsVertical from "../components/ButtonsVertical";

export default function controlPanel1({ state, setState }) {
  const { buttons, expanded } = state;
  const { setExpanded } = setState;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function handleClick(value) {
    setState.setButtons([value]);
  }

  console.log(state.buttons);

  function handleBlur() {
    // setExpanded(false);
  }

  return (
    <Grid container justifyContent="center">
      <Hidden smDown>
        <Grid item>
          {" "}
          <ButtonGroup
            color="primary"
            aria-label="outlined secondary button group"
          >
            <Button onClick={() => handleClick("FRAMES")}>FRAMES</Button>
            <Button onClick={() => handleClick("HEIGHT")}>HEIGHT</Button>
            <Button onClick={() => handleClick("KNOCKDOWN")}>KNOCKDOWN</Button>
            <Button onClick={() => handleClick("LAUNCH")}>LAUNCH</Button>
            <Button onClick={() => handleClick("RAGE")}>RAGE</Button>
            <Button onClick={() => handleClick("SAFETY")}>SAFETY</Button>
            <Button onClick={() => handleClick("SITUATIONAL")}>
              SITUATIONAL
            </Button>
            <Button onClick={() => handleClick("STRINGS")}>STRINGS</Button>
          </ButtonGroup>
        </Grid>
        <ButtonsHorizontal state={state} setState={setState} />
      </Hidden>
      <Hidden mdUp>
        <Grid item>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            onBlur={handleBlur}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AccordionSummary
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              expandIcon={<MenuIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            ></AccordionSummary>
            <AccordionDetails>
              {buttons.length === 0 && (
                <ButtonGroup
                  orientation="vertical"
                  color="primary"
                  aria-label="outlined secondary button group"
                  // variant="contained"
                >
                  <Button onClick={() => handleClick("FRAMES")}>FRAMES</Button>
                  <Button onClick={() => handleClick("HEIGHT")}>HEIGHT</Button>
                  <Button onClick={() => handleClick("KNOCKDOWN")}>
                    KNOCKDOWN
                  </Button>
                  <Button onClick={() => handleClick("LAUNCH")}>LAUNCH</Button>
                  <Button onClick={() => handleClick("RAGE")}>RAGE</Button>
                  <Button onClick={() => handleClick("SAFETY")}>SAFETY</Button>
                  <Button onClick={() => handleClick("SITUATIONAL")}>
                    SITUATIONAL
                  </Button>
                  <Button onClick={() => handleClick("STRINGS")}>
                    STRINGS
                  </Button>
                </ButtonGroup>
              )}
              <ButtonsVertical state={state} useState={useState} />
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Hidden>
    </Grid>
  );
}
