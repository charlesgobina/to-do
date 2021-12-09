import deleteAllCheckedItems from './deleteItem.js';

test('Properly adding a new item', () => {
  expect(deleteAllCheckedItems()).toBe(1);
});