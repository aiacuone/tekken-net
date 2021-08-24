import "../styles/globals.css";
import { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  const [buttons, setButtons] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [characterDropdownValue, setCharacterDropdownValue] = useState("");
  const state = { buttons, expanded, characterDropdownValue };
  const setState = { setButtons, setExpanded, setCharacterDropdownValue };
  const vars = {
    smCPSpacing: 3,
    lgCPButtHeadSpacing: 1,
    smCPButtHeadSpacing: 3,
    CPSpacing: 1,
    wording: {
      FRAMES: "Frames",
      HEIGHT: "Height",
      KNOCKDOWN: "Knockdown",
      LAUNCH: "Launch",
      RAGE: "Rage",
      SAFETY: "Safety",
      SITUATIONAL: "Situational",
      STRINGS: "Strings",
      RANGE: "Range",
      SPECIFIC: "Specific",
      "START & FINISH": "Start & Finish",
      NORMAL: "Normal",
      COUNTER: "Counter",
      "RAGE ART": "Rage Art",
      "RAGE DRIVE": "Rage Drive",
      SAFE: "Safe",
      UNSAFE: "Unsafe",
      "+ON BLOCK": "+ On Block",
      "POWER CRUSH": "Power Crush",
      "WALL BOUNCE": "Wall Bounce",
      HOMING: "Homing",
      SINGLE: "Single",
      DOUBLE: "Double",
      TRIPPLE: "Tripple",
    },
    isSmallScreen: useMediaQuery("(max-width:600px"),
    CPButtons: {
      FRAMES: ["RANGE", "SPECIFIC"],
      HEIGHT: ["SPECIFIC", "START & FINISH"],
      KNOCKDOWN: ["NORMAL", "COUNTER"],
      LAUNCH: ["NORMAL", "COUNTER"],
      RAGE: ["RAGE ART", "RAGE DRIVE"],
      SAFETY: ["SAFE", "UNSAFE"],
      SITUATIONAL: ["+ON BLOCK", "POWER CRUSH", "WALL BOUNCE", "HOMING"],
      STRINGS: ["SINGLE", "DOUBLE", "TRIPPLE"],
    },
    CPInputs: {
      framesSpecific: ["0-13", "13-17", "17-20", "20-"],
      height: ["H", "M", "L"],
    },
    buttonColors: {
      buttonBackground: {
        buttonFocusBackground: "orange",
        buttonBlurBackground: "white",
      },
    },
    charactersArr: [
      "Akuma",
      "Alisa",
      "Anna",
      "Armor King",
      "Asuka",
      "Bob",
      "Bryan",
      "Claudio",
      "Devil Jin",
      "Dragunov",
      "Eddy",
      "Eliza",
      "Fahkumram",
      "Feng",
      "Ganryu",
      "Geese",
      "Gigas",
      "Heihachi",
      "Hwoarang",
      "Jack",
      "Jin",
      "Josie",
      "Julia",
      "Katarina",
      "Kazumi",
      "Kazuya",
      "King",
      "Kuma",
      "Lars",
      "Law",
      "Lee",
      "Lei",
      "Leo",
      "Leroy",
      "Lili",
      "LuckyChoe",
      "Marduk",
      "MasterRaven",
      "Miguel",
      "Negan",
      "Nina",
      "Noctis",
      "Paul",
      "Shaheen",
      "Steve",
      "Xiaoyu",
      "Yoshimitsu",
      "Zafina",
    ],
  };
  console.log(expanded);
  return (
    <Component {...pageProps} state={state} setState={setState} vars={vars} />
  );
}

export default MyApp;
