export const getCharacterMoves = {
  HEIGHT: {
    SPECIFIC: function ({ attr1: height, character }) {
      let arr = []
      for (let i = 0; i < character.length; i++) {
        let filteredMove = character[i]['Hit level'].replace(' ', '')
        if (filteredMove === height) {
          arr.push(character[i])
        }
      }
      return arr
    },

    'START & FINISH': function ({ attr1: a, attr2: b, character }) {
      let arr = [] // eslint-disable-next-line
      let regex = new RegExp('^\\' + a + '.+' + '\\' + b + '\\s*$')
      for (let i = 0; i < character.length; i++) {
        if (regex.test(character[i]['Hit level'])) {
          if (character[i]['Hit level'].length <= 8) {
            arr.push(character[i])
          }
        }
      }
      return arr
    },
  },

  LAUNCH: {
    NORMAL: function ({ character }) {
      let regex = /launch/i
      let arr = []
      for (let i = 0; i < character.length; i++) {
        if (regex.test(character[i]['Hit frame'])) {
          arr.push(character[i])
        }
      }
      return arr
    },

    COUNTER: function ({ character }) {
      let regex = /launch/i
      let arr = []
      for (let i = 0; i < character.length; i++) {
        if (regex.test(character[i]['Counter hit frame'])) {
          arr.push(character[i])
        }
      }
      return arr
    },
  },

  FRAMES: {
    SPECIFIC: function ({ attr1: frames, character }) {
      let arr = []
      for (let i = 0; i < character.length; i++) {
        let filteredMove = character[i]['Start up frame'].replace('~', ' ')
        if (filteredMove.substring(0, 2) === frames) {
          arr.push(character[i])
        }
      }

      return arr
    },

    RANGE: function ({ attr1: min, attr2: max, character }) {
      let arr = []
      for (let i = 0; i < character.length; i++) {
        let filteredMove = character[i]['Start up frame'].replace('~', ' ')
        if (
          filteredMove.substring(0, 3) >= min &&
          filteredMove.substring(0, 3) <= max
        ) {
          arr.push(character[i])
        }
      }
      return arr
    },
  },

  KNOCKDOWN: {
    NORMAL: function ({ character }) {
      let regex = /knd/i
      let arr = []
      for (let i = 0; i < character.length; i++) {
        if (regex.test(character[i]['Hit frame'])) {
          arr.push(character[i])
        }
      }

      return arr
    },

    COUNTER: function ({ character }) {
      let regex = /knd/i
      let arr = []
      for (let i = 0; i < character.length; i++) {
        if (regex.test(character[i]['Counter hit frame'])) {
          arr.push(character[i])
        }
      }
      return arr
    },
  },

  RAGE: {
    'RAGE ART': function ({ character }) {
      let arr = []
      for (let i = 0; i < character.length; i++) {
        if (character[i]['Notes'] === 'Rage art') {
          arr.push(character[i])
        }
      }
      return arr
    },

    'RAGE DRIVE': function ({ character }) {
      let arr = []
      for (let i = 0; i < character.length; i++) {
        if (character[i]['Notes'] === 'Rage drive') {
          arr.push(character[i])
        }
      }
      return arr
    },
  },

  SAFETY: {
    SAFE: function ({ character }) {
      let arr = []
      for (let i = 0; i < character.length; i++) {
        let filteredScript = character[i]['Block frame'].replace('~', ' ')
        if (filteredScript.substring(0, 3) > -10) {
          if (filteredScript !== '') {
            arr.push(character[i])
          }
        }
      }
      return arr
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
