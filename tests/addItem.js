/**
 * @jest-environment jsdom
 */
import Tasks from '../src/fucntions.js';

export default function addItem() {
  const task = new Tasks(1, 'Hello', false);
  const tasky = {
    index: task.index,
    description: task.description,
    completed: task.completed,
  };
  task.taskList = task.getStorage();
  task.taskList.push(tasky);
  task.setStorage();
  return task.taskList.length;
}