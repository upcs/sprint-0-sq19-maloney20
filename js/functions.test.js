const functions = require('./functions');

test('adds 1 + 2 to equal 3', () => {
  expect(functions.add(1, 2)).toBe(3);
});

test('sum of 10 and 20 is defined', () => {
	expect(functions.add(10, 20)).toBeDefined();
});