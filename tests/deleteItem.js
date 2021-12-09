/**
 * @jest-environment jsdom
 */
import Tasks from '../src/fucntions.js';

const task = new Tasks();

export default function deleteAllCheckedItems(tasks) {
  task.taskList = task.getStorage();
  tasks = [
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
  task.taskList = tasks;
  task.taskList = task.taskList.filter((task) => task.completed === false);
  task.setStorage();
  return task.taskList.length;
}
