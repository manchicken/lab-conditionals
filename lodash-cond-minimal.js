const _ = require('lodash')

const test_function = _.cond([
  [(x) => _.isNaN(Number(x)), () => undefined],
  [(x) => x === 0, () => 'zero'],
  [(x) => x % 2, () => 'odd'],
  [_.stubTrue, () => 'even'],
])

module.exports = test_function
