const boolToWord = require('./main.js')


test('converts true to yes', () => {
  expect(boolToWord(true)).toBe('Yes')
})

test('converts false to no', () => {
  expect(boolToWord(false)).toBe('No')
})