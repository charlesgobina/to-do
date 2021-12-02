class Tasks {
    constructor(id, description, completed) {
      this.id = id;
      this.description = description;
      this.completed = completed;
      this.taskList = [
        {
          description: 'Do Hackerrank Challenge',
          completed: false,
          index: 3,
        },
        {
          description: 'Play Fortnite',
          completed: true,
          index: 2,
        },
        {
          description: 'Read my bible',
          completed: true,
          index: 1,
        },
      ]
    }
  
    setStorage() {
      if (localStorage.getItem('Tasks') == null) {
        localStorage.setItem('Tasks', JSON.stringify(this.taskList));
      }
    }

    addTask() {
      const tasks = {
        id: this.id,
        description: this.description,
        completed: this.completed
      }
      this.setStorage()
      this.taskList = JSON.parse(localStorage.getItem('Tasks'));
      this.taskList.push(tasks)
      localStorage.setItem('Tasks', JSON.stringify(this.taskList));
    }

    checkBox() {
        if (this.taskList.completed === false) {
          this.taskList.completed = true
        }
    }
  
    removeTask() {
      this.setStorage()
      this.taskList = this.taskList.filter(task => task.completed == false)
      this.setStorage()
    }

} 



export default Tasks
