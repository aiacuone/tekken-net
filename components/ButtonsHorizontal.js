import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function ButtonsHorizontal({ state, setState }) {
  const buttons = state.buttons[0];

  return (
    <Grid container justifyContent="center">
      {buttons === "FRAMES" && (
        <ButtonGroup
          color="primary"
          aria-label="outlined secondary button group"
        >
          <Button>RANGE</Button>
          <Button>SPECIFIC</Button>
        </ButtonGroup>
      )}

      {buttons === "HEIGHT" && (
        <ButtonGroup
          color="primary"
          aria-label="outlined secondary button group"
        >
          <Button>SPECIFIC</Button>
          <Button>START & FINISH</Button>
        </ButtonGroup>
      )}

      {buttons === "KNOCKDOWN" && (
        <ButtonGroup
          color="primary"
          aria-label="outlined secondary button group"
        >
          <Button>NORMAL</Button>
          <Button>COUNTER</Button>
        </ButtonGroup>
      )}

      {buttons === "LAUNCH" && (
        <ButtonGroup
          color="primary"
          aria-label="outlined secondary button group"
        >
          <Button>NORMAL</Button>
          <Button>LAUNCH</Button>
        </ButtonGroup>
      )}

      {buttons === "RAGE" && (
        <ButtonGroup
          color="primary"
          aria-label="outlined secondary button group"
        >
          <Button>RAGE ART</Button>
          <Button>RAGE DRIVE</Button>
        </ButtonGroup>
      )}

      {buttons === "SAFETY" && (
        <ButtonGroup
          color="primary"
          aria-label="outlined secondary button group"
        >
          <Button>SAFE</Button>
          <Button>UNSAFE</Button>
        </ButtonGroup>
      )}

      {buttons === "SITUATIONAL" && (
        <ButtonGroup
          color="primary"
          aria-label="outlined secondary button group"
        >
          <Button>+ON BLOCK</Button>
          <Button>POWER CRUSH</Button>
          <Button>WALL BOUNCE</Button>
          <Button>HOMING</Button>
        </ButtonGroup>
      )}

      {buttons === "STRINGS" && (
        <ButtonGroup
          color="primary"
          aria-label="outlined secondary button group"
        >
          <Button>SINGLE</Button>
          <Button>DOUBLE</Button>
          <Button>TRIPPLE</Button>
        </ButtonGroup>
      )}
    </Grid>
  );
}
