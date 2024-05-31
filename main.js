const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(param) {
  const uniqueElements = new Set(param)

  return Array.from(uniqueElements)
}

console.log(removeDuplicates(duplicates))
