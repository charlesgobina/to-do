import deleteSingleItem from './delSingleItem.js';

test('Properly adding a new item', () => {
  expect(deleteSingleItem(1)).toBe(1);
  expect(deleteSingleItem(3)).toBe(2);
});