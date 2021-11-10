const sample_data = [
  [0, 'zero'],
  [8675309, 'odd'],
  [42, 'even'],
  ['horse', undefined], // Exception!
]

describe.each([
  // Label, File
  ['if; else if; else', require('../if-elseif-else')],
  ['nested-if-else', require('../nested-if-else')],
  ['if; else if; leftovers', require('../if-elseif-leftovers')],
  ['command dispatch', require('../command-dispatch')],
  ['ternaries-only', require('../ternaries-only')],
  ['lodash cond', require('../lodash-cond')],
  ['lodash cond minimal', require('../lodash-cond-minimal')],
])('%s', (label, test_function) => {
  test.each(sample_data)(`${label} (%s === %s)`, (input, output) =>
    expect(test_function(input)).toBe(output)
  )
})
