const commands = [
  // Expect the unexpected!
  { test: (x) => Number.isNaN(Number(x)), value: undefined },
  { test: (x) => x === 0, value: 'zero' },
  { test: (x) => x % 2, value: 'odd' },
  { test: (x) => !(x % 2), value: 'even' },
]

const test_function = (input) => commands.find((x) => x.test(input)).value

module.exports = test_function
