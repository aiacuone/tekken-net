import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function ButtonsVertical({ state, useState }) {
  const buttons = state.buttons[0];
  return (
    <Grid item>
      {buttons === "FRAMES" && (
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button>RANGE</Button>
          <Button>SPECIFIC</Button>
        </ButtonGroup>
      )}

      {buttons === "HEIGHT" && (
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button>SPECIFIC</Button>
          <Button>START & FINISH</Button>
        </ButtonGroup>
      )}

      {buttons === "KNOCKDOWN" && (
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button>NORMAL</Button>
          <Button>COUNTER</Button>
        </ButtonGroup>
      )}

      {buttons === "LAUNCH" && (
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button>NORMAL</Button>
          <Button>LAUNCH</Button>
        </ButtonGroup>
      )}

      {buttons === "RAGE" && (
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button>RAGE ART</Button>
          <Button>RAGE DRIVE</Button>
        </ButtonGroup>
      )}

      {buttons === "SAFETY" && (
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button>SAFE</Button>
          <Button>UNSAFE</Button>
        </ButtonGroup>
      )}

      {buttons === "SITUATIONAL" && (
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button>+ON BLOCK</Button>
          <Button>POWER CRUSH</Button>
          <Button>WALL BOUNCE</Button>
          <Button>HOMING</Button>
        </ButtonGroup>
      )}

      {buttons === "STRINGS" && (
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button>SINGLE</Button>
          <Button>DOUBLE</Button>
          <Button>TRIPPLE</Button>
        </ButtonGroup>
      )}
    </Grid>
  );
}
