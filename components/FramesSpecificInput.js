import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import {
  lgCPButtHeadSpacing,
  smCPButtHeadSpacing,
  cpInputs,
  buttonColors,
} from "../utils/vars";

export default function FramesSpecificInput({ state, setState }) {
  const { buttons, isSmallScreen } = state;
  const { setButtons } = setState;
  const { buttonFocusBackground, buttonBlurBackground } =
    buttonColors["buttonBackground"];

  function handleClick(value) {
    const newButtons = [...buttons];
    newButtons[2] = value;
    setButtons(newButtons);
  }

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      spacing={isSmallScreen ? smCPButtHeadSpacing : lgCPButtHeadSpacing}
    >
      <Grid item>
        <ButtonGroup
          orientation={isSmallScreen ? "vertical" : "horizontal"}
          color="primary"
          aria-label="outlined secondary button group"
        >
          {cpInputs["framesSpecific"].map((item) => {
            return (
              <Button
                key={item}
                style={{
                  background:
                    buttons[2] === item
                      ? buttonFocusBackground
                      : buttonBlurBackground,
                }}
                value={item}
                onClick={() => handleClick(item)}
              >
                {item}
              </Button>
            );
          })}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
