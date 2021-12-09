import addItem from './addItem.js';

test('Properly adding a new item', () => {
  expect(addItem()).toBe(1);
});