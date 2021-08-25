import React, { useState } from "react";
import { createTable } from "../utils/functions";

export default function Table({ state }) {
  const { buttons, framesRange, characterDropdownValue, isReadyToCreateTable } =
    state;

  isReadyToCreateTable && getFilteredList();

  let filteredMoveList;

  function getFilteredList() {
    const attr1 =
      buttons[1] === "RANGE"
        ? framesRange["min"]
        : buttons[1] === "SPECIFIC"
        ? buttons[2]
        : buttons[1] === "START & FINISH"
        ? buttons[2]?.[0]
        : null;

    const attr2 =
      buttons[1] === "RANGE"
        ? framesRange["max"]
        : buttons[1] === "START & FINISH"
        ? buttons[2]?.[1]
        : null;

    filteredMoveList = createTable({
      character: characterDropdownValue,
      attr1,
      attr2,
      button1: buttons[0],
      button2: buttons[1],
    });
  }

  console.log(filteredMoveList);

  return <div></div>;
}
