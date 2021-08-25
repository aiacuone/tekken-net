import { characters } from "../characters/index";
import { getCharacterMoves } from "../utils/getCharacterMoves";

export function createTable({ button1, button2, character, attr1, attr2 }) {
  if (button1 && button2) {
    return getCharacterMoves[button1][button2]({
      character: characters[character],
      attr1,
      attr2,
    });
  }
}
