import { addDelete } from './addDeleteItem.js';

describe('Add and Delete Tests', () => {
  test('Properly adding a new item', () => {
    expect(addDelete.addItem()).toBe(1);
  });
  test('Properly deleting a single item', () => {
    expect(addDelete.deleteSingleItem(1)).toBe(1);
    expect(addDelete.deleteSingleItem(3)).toBe(2);
  });
  test('Properly deleting checked items', () => {
    expect(addDelete.deleteAllCheckedItems()).toBe(1);
  });
});