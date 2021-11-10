const test_function = (input) => {
  if (Number.isNaN(Number(input))) {
    return undefined
  }

  if (input !== 0) {
    if (input % 2) {
      return 'odd'
    } else {
      return 'even'
    }
  } else {
    return 'zero'
  }
}

module.exports = test_function
