const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

let menores = 'Usuarios menores de edad:\n'
let mayores = 'Usuarios mayores de edad:\n'

for (const user of users) {
  if (user.years < 18) {
    menores += `${user.name}\n`
  } else {
    mayores += `${user.name}\n`
  }
}
console.log(menores)
console.log(mayores)
