import React from "react";
import { characters } from "../characters/index";
import { getCharacterMoves } from "../utils/getCharacterMoves";

let filteredMoveList = [];

export function getFilteredMoveList({
  button1,
  button2,
  character,
  attr1,
  attr2,
}) {
  const moveList = getCharacterMoves[button1][button2]({
    character: characters[character],
    attr1,
    attr2,
  });
  filteredMoveList = moveList;
}

export function Table({ state, setState }) {
  console.log(filteredMoveList, "filteredMoveList in Table");
  return <div></div>;
}
