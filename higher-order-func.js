const arr = [
  {
    a: 1,
    b: 1,
  },
  {
    a: 2,
    b: 2,
  },
  {
    a: 3,
    b: 4,
  },
]

// forEach
arr.forEach(el => {
  console.log(el.a, el.b)
})

// filter
const filtered = arr.filter(el => el.b % 2 === 0)
console.log(filtered)

// map
const mapped = arr.map(el => el.a * 10)
console.log(mapped)

// reduce
const reduced = mapped.reduce((sum, el) => sum + el)
console.log(reduced)
