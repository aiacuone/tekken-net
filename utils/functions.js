import getCharacterMoves from '../utils/getCharacterMoves'

export function createTable({ button1, button2, attr1, attr2 }) {
	return getCharacterMoves[button1][button2]({ character, attr1, attr2 })
}
