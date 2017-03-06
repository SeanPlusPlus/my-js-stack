import Hello from './hello'

test('Hello.display', () => {
  const testHello = new Hello('Test')
  expect(testHello.display()).toBe('Hello Test')
})
