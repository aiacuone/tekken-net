import "../styles/globals.css";
import { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { inputValues } from "../utils/vars";

function MyApp({ Component, pageProps }) {
  const [buttons, setButtons] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [framesRange, setFramesRange] = useState({ min: 10, max: 25 });
  const [characterDropdownValue, setCharacterDropdownValue] = useState("akuma");

  const isSmallScreen = useMediaQuery("(max-width:600px");
  const isInputValue = inputValues.indexOf(buttons[1]) > -1 ? true : false;
  const isButtonValue = inputValues.indexOf(buttons[1]) === -1 ? true : false;

  const showTable =
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

  const enableSubmitButton =
    (isInputValue &&
      buttons.length === 3 &&
      buttons[1] === "START & FINISH" &&
      buttons[2][0] &&
      buttons[2][1]) ||
    (isInputValue && buttons[1] === "RANGE") ||
    (isInputValue && buttons.length === 3 && buttons[1] !== "START & FINISH") ||
    (isButtonValue && buttons.length > 1)
      ? true
      : false;

  const showSubmitButton =
    (buttons[0] && inputValues.indexOf(buttons[0]) === -1) ||
    inputValues.indexOf(buttons[1]) > -1
      ? true
      : false;

  const state = {
    buttons,
    expanded,
    characterDropdownValue,
    isSmallScreen,
    framesRange,
    showTable,
    isButtonValue,
    isInputValue,
    enableSubmitButton,
    showSubmitButton,
  };
  const setState = {
    setButtons,
    setExpanded,
    setCharacterDropdownValue,
    setFramesRange,
  };

  return <Component {...pageProps} state={state} setState={setState} />;
}

export default MyApp;
