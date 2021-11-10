const test_function = (input) =>
  Number.isNaN(Number(input))
    ? undefined
    : input === 0
    ? 'zero'
    : input % 2
    ? 'odd'
    : 'even'

module.exports = test_function
