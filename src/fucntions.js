/**
 * @jest-environment jsdom
 */
class Tasks {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
    this.taskList = [];
  }

  getStorage() {
    this.taskList = JSON.parse(localStorage.getItem('Tasks')) || [];
    return this.taskList;
  }

  setStorage() {
    localStorage.setItem('Tasks', JSON.stringify(this.taskList));
  }

  addItem() {
    const task = {
      index: this.index,
      description: this.description,
      completed: this.completed,
    };

    this.taskList = this.getStorage();
    this.taskList.push(task);
    this.setStorage();
  }

  updateItem(id, text) {
    id = Number(id);
    this.taskList = this.getStorage();
    for (let i = 0; i < this.taskList.length; i += 1) {
      if (this.taskList[i].index === id) {
        text.addEventListener('change', (e) => {
          this.taskList[i].description = e.target.value;
          this.setStorage();
        });
      }
    }
  }

  deleteAllCheckedItems(tasks) {
    this.taskList = tasks;
    this.taskList = this.getStorage();
    this.taskList = this.taskList.filter((task) => task.completed === false);
    this.setStorage();
  }

  deleteSingleItem(id) {
    this.taskList = this.getStorage();
    this.taskList = this.taskList.filter((task) => task.index !== id);
    this.setStorage();
  }
}
export default Tasks;