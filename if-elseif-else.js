const test_function = (input) => {
  if (Number.isNaN(Number(input))) {
    return undefined
  }

  if (input === 0) {
    return 'zero'
  } else if (input % 2) {
    return 'odd'
  } else {
    return 'even'
  }
}

module.exports = test_function
