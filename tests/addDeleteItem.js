/**
 * @jest-environment jsdom
 */
import Tasks from '../src/fucntions.js';

const addDelete = {
  addItem() {
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
  },

  deleteSingleItem(id) {
    const task = new Tasks();
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
  },

  deleteAllCheckedItems(tasks) {
    const task = new Tasks();
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
  },
};

export { addDelete };