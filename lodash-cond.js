const _ = require('lodash')

const test_function = _.cond([
  [(x) => _.isNaN(Number(x)), _.constant(undefined)],
  [(x) => _.isEqual(x, 0), _.constant('zero')],
  [(x) => x % 2, _.constant('odd')],
  [_.stubTrue, _.constant('even')],
])

module.exports = test_function
