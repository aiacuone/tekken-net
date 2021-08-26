import React from "react";
import { createTable } from "../utils/functions";

let filteredMoveList = [];

export function getFilteredMoveList({
  attr1,
  attr2,
  character,
  button1,
  button2,
}) {
  filteredMoveList = [];
  const moveList = createTable({
    character,
    attr1,
    attr2,
    button1,
    button2,
  });
  console.log(moveList);
  filteredMoveList = moveList;
}

export function Table({ state, setState }) {
  return <div></div>;
}
