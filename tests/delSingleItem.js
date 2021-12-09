/**
 * @jest-environment jsdom
 */
import Tasks from '../src/fucntions.js';

const task = new Tasks();

export default function deleteSingleItem(id) {
  task.taskList = [
    {
      index: 1,
      description: 'Hello',
      completed: true,
    },
    {
      index: 2,
      description: 'Good',
      completed: false,
    },
  ];
  task.taskList = task.taskList.filter((task) => task.index !== id);
  task.setStorage();
  return task.taskList.length;
}
