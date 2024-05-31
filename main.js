const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function finderName(param, name) {
  for (let i = 0; i < param.length; i++) {
    if (param[i] === name) {
      return { found: true, index: i }
    }
  }
  return { found: false, index: -1 }
}

console.log(finderName(nameFinder, 'Tony'))
console.log(finderName(nameFinder, 'Bruce'))
console.log(finderName(nameFinder, 'Natasha'))
console.log(finderName(nameFinder, 'Michael'))
