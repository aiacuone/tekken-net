export const getCharacterMoves = {
  HEIGHT: {
    SPECIFIC: ({ attr1: height, character }) => {
      return character.filter((move) => {
        return move['Hit level'] === height
      })
    },

    'START & FINISH': function ({ attr1: start, attr2: finish, character }) {
      const regex = new RegExp('^\\' + start + '.+' + '\\' + finish + '\\s*$')
      return character.filter((move) => {
        return regex.test(move['Hit level'])
      })
    },
  },

  LAUNCH: {
    NORMAL: function ({ character }) {
      const regex = /launch/i
      return character.filter((move) => {
        return regex.test(move['Hit frame'])
      })
    },

    COUNTER: function ({ character }) {
      let regex = /launch/i
      // let arr = []
      // for (let i = 0; i < character.length; i++) {
      //   if (regex.test(character[i]['Counter hit frame'])) {
      //     arr.push(character[i])
      //   }
      // }
      // return arr
      return character.filter((move) => {
        return regex.test(move['Counter hit frame'])
      })
    },
  },

  FRAMES: {
    SPECIFIC: function ({ attr1: frames, character }) {
      // let arr = []
      // for (let i = 0; i < character.length; i++) {
      //   let filteredMove = character[i]['Start up frame'].replace('~', ' ')
      //   if (filteredMove.substring(0, 2) === frames) {
      //     arr.push(character[i])
      //   }
      // }

      // return arr

      return character.filter((move) => {
        return move['Start up frame'] === frames
      })
    },

    RANGE: function ({ attr1: min, attr2: max, character: moveList }) {
      // let arr = []
      // for (let i = 0; i < character.length; i++) {
      //   let filteredMove = character[i]['Start up frame'].replace('~', ' ')
      //   if (
      //     filteredMove.substring(0, 3) >= min &&
      //     filteredMove.substring(0, 3) <= max
      //   ) {
      //     arr.push(character[i])
      //   }
      // }
      // return arr
      return moveList.filter((move) => {
        const filteredMove = move['Start up frame']
          .replace('~', ' ')
          .substring(0, 3)
        return filteredMove >= min && filteredMove <= max
      })
    },
  },

  KNOCKDOWN: {
    NORMAL: function ({ character: moveList }) {
      const regex = /knd/i
      // let arr = []
      // for (let i = 0; i < character.length; i++) {
      //   if (regex.test(character[i]['Hit frame'])) {
      //     arr.push(character[i])
      //   }
      // }

      // return arr
      moveList.filter((move) => {
        return regex.test(move['Hit frame'])
      })
    },

    COUNTER: function ({ character: moveList }) {
      const regex = /knd/i
      // let arr = []
      // for (let i = 0; i < character.length; i++) {
      //   if (regex.test(character[i]['Counter hit frame'])) {
      //     arr.push(character[i])
      //   }
      // }
      // return arr
      moveList.filter((move) => {
        return regex.test(move['Counter hit frame'])
      })
    },
  },

  RAGE: {
    'RAGE ART': function ({ character: moveList }) {
      // let arr = []
      // for (let i = 0; i < character.length; i++) {
      //   if (character[i]['Notes'] === 'Rage art') {
      //     arr.push(character[i])
      //   }
      // }
      // return arr
      moveList.filter((move) => {
        return move['Notes'] === 'Rage art'
      })
    },

    'RAGE DRIVE': function ({ character }) {
      // let arr = []
      // for (let i = 0; i < character.length; i++) {
      //   if (character[i]['Notes'] === 'Rage drive') {
      //     arr.push(character[i])
      //   }
      // }
      // return arr
      moveList.filter((move) => {
        return move['Notes'] === 'Rage drive'
      })
    },
  },

  SAFETY: {
    SAFE: function ({ character: moveList }) {
      // let arr = []
      // for (let i = 0; i < character.length; i++) {
      //   let filteredScript = character[i]['Block frame'].replace('~', ' ')
      //   if (filteredScript.substring(0, 3) > -10) {
      //     if (filteredScript !== '') {
      //       arr.push(character[i])
      //     }
      //   }
      // }
      // return arr
      moveList.filter((move) => {
        const filteredMove = move['Block frame'].replace('~', ' ')
        return filteredMove > -10
      })
    },

    UNSAFE: function ({ character }) {
      let arr = []
      for (let i = 0; i < character.length; i++) {
        let filtered = character[i]['Block frame'].replace('~', ' ')
        if (filtered.substring(0, 3) < -9) {
          arr.push(character[i])
        }
      }
      return arr
    },
  },

  SITUATIONAL: {
    '+ON BLOCK': function ({ character }) {
      let arr = []
      for (let i = 0; i < character.length; i++) {
        let filteredMove = character[i]['Block frame'].replace('~', ' ')
        if (filteredMove.substring(0, 3) > 0) {
          arr.push(character[i])
        }
      }
      return arr
    },

    'POWER CRUSH': function ({ character }) {
      let regex = /power crush/i
      let arr = []
      for (let i = 0; i < character.length; i++) {
        if (regex.test(character[i]['Notes'])) {
          arr.push(character[i])
        }
      }
      return arr
    },

    'WALL BOUNCE': function ({ character }) {
      let regex = /wall bounce/i
      let arr = []
      for (let i = 0; i < character.length; i++) {
        if (regex.test(character[i]['Notes'])) {
          arr.push(character[i])
        }
      }
      return arr
    },

    HOMING: function ({ character }) {
      let regex = /homing/i
      let arr = []
      for (let i = 0; i < character.length; i++) {
        if (regex.test(character[i]['Notes'])) {
          arr.push(character[i])
        }
      }
      return arr
    },
  },

  STRINGS: {
    SINGLE: function ({ character }) {
      let regex = /,/i
      let arr = []
      for (let i = 0; i < character.length; i++) {
        if (regex.test(character[i]['Damage']) === false) {
          if (character[i]['Damage'] !== '') {
            arr.push(character[i])
          }
        }
      }
      return arr
    },

    DOUBLE: function ({ character }) {
      let regex = /,/gi
      let arr = []
      for (let i = 0; i < character.length; i++) {
        if ((character[i]['Damage'].match(regex) || []).length === 1) {
          if (character[i]['Damage'] !== '') {
            arr.push(character[i])
          }
        }
      }
      return arr
    },

    TRIPPLE: function ({ character }) {
      let regex = /,/gi
      let arr = []
      for (let i = 0; i < character.length; i++) {
        if ((character[i]['Damage'].match(regex) || []).length === 2) {
          if (character[i]['Damage'] !== '') {
            arr.push(character[i])
          }
        }
      }
      return arr
    },
  },
}

export default getCharacterMoves
