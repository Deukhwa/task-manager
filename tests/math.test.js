const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} = require('../src/math.js')

test('should calculate total with tip', () => {
  const total = calculateTip(10, 0.3)
  expect(total).toBe(13)
})

test('Should calculate total with default tip', () => {
  const total = calculateTip(10)
  expect(total).toBe(12.5)
})
test('Should create 32 F to 0 C', () => {
  const temp = fahrenheitToCelsius(32)
  expect(temp).toBe(0)
})

test('Should convert 0 to 32', () => {
  const temp = celsiusToFahrenheit(0)
  expect(temp).toBe(32)
})
