import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function Buttons({ state, setState, vars }) {
  const {
    isSmallScreen,
    smCPButtHeadSpacing,
    lgCPButtHeadSpacing,
    CPSpacing,
    CPButtons,
    buttonColors,
  } = vars;
  const { buttons } = state;
  const { setButtons, setExpanded } = setState;
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

  return (
    <Grid container direction="column" alignItems="center" spacing={CPSpacing}>
      {showButtons1 && (
        <Grid item>
          <ButtonGroup
            orientation={isSmallScreen ? "vertical" : "horizontal"}
            color="primary"
            aria-label="outlined secondary button group"
          >
            {Object.keys(CPButtons).map((item) => {
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
                {CPButtons[buttons[0]].map((item) => {
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
