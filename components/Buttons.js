import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  smCPButtHeadSpacing,
  lgCPButtHeadSpacing,
  cpSpacing,
  buttonColors,
  cpButtons,
  inputValues,
} from "../utils/vars";
import { createTable } from "../utils/functions";

export default function Buttons({ state, setState }) {
  const { buttons, isSmallScreen, characterDropdownValue, framesRange } = state;
  const { setButtons } = setState;
  const { buttonFocusBackground, buttonBlurBackground } =
    buttonColors["buttonBackground"];

  const showButtons1 =
    !isSmallScreen || (isSmallScreen && buttons.length === 0) ? true : false;

  const showButtons2 =
    !isSmallScreen || (isSmallScreen && buttons.length > 0) ? true : false;

  const buttonOrientation = isSmallScreen ? "vertical" : "horizontal";

  const buttonSpacing = isSmallScreen
    ? smCPButtHeadSpacing
    : lgCPButtHeadSpacing;

  function handleClick(value, index) {
    const newButtons = [...buttons];
    newButtons.length === 3 && newButtons.pop();
    index === 0 && newButtons.pop();
    newButtons[index] = value;
    setButtons(newButtons);
  }

  const isInputValue = inputValues.indexOf(buttons[1]) > -1 ? true : false;
  const isButtonValue = inputValues.indexOf(buttons[1]) === -1 ? true : false;

  const isReadyToCreateTable =
    (buttons[0] && buttons[1] && !isSmallScreen && isButtonValue) ||
    (buttons[0] && buttons[1] && !isSmallScreen && buttons[1] === "RANGE") ||
    (buttons[0] &&
      buttons[1] &&
      buttons[2] &&
      !isSmallScreen &&
      buttons[1] !== "START & FINISH") ||
    (buttons[0] &&
      buttons[1] &&
      buttons[2]?.[0] &&
      buttons[2]?.[1] &&
      !isSmallScreen)
      ? true
      : false;

  isReadyToCreateTable && handleCreateTable();

  function handleCreateTable() {
    const attr1 =
      buttons[1] === "RANGE"
        ? framesRange["min"]
        : buttons[1] === "SPECIFIC"
        ? buttons[2]
        : buttons[1] === "START & FINISH"
        ? buttons[2][0]
        : null;
    const attr2 =
      buttons[1] === "RANGE"
        ? framesRange["max"]
        : buttons[1] === "START & FINISH"
        ? buttons[2][1]
        : null;

    createTable({
      character: characterDropdownValue,
      attr1,
      attr2,
      button1: buttons[0],
      button2: buttons[1],
    });
  }

  return (
    <Grid container direction="column" alignItems="center" spacing={cpSpacing}>
      {showButtons1 && (
        <Grid item>
          <ButtonGroup
            orientation={isSmallScreen ? "vertical" : "horizontal"}
            color="primary"
            aria-label="outlined secondary button group"
          >
            {Object.keys(cpButtons).map((item) => {
              return (
                <Button
                  key={item}
                  style={{
                    background:
                      buttons[0] === item
                        ? buttonFocusBackground
                        : buttonBlurBackground,
                  }}
                  onClick={() => handleClick(item, 0)}
                >
                  {item}
                </Button>
              );
            })}
          </ButtonGroup>
        </Grid>
      )}
      {showButtons2 && buttons.length > 0 && (
        <Grid item>
          <Grid
            container
            direction="column"
            alignItems="center"
            spacing={buttonSpacing}
          >
            <Grid item>
              <ButtonGroup
                orientation={buttonOrientation}
                color="primary"
                aria-label="vertical outlined primary button group"
              >
                {cpButtons[buttons[0]].map((item) => {
                  return (
                    <Button
                      key={`${buttons[0]}/${item}`}
                      style={{
                        background:
                          buttons[1] === item
                            ? buttonFocusBackground
                            : buttonBlurBackground,
                      }}
                      onClick={() => handleClick(item, 1)}
                    >
                      {item}
                    </Button>
                  );
                })}
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
