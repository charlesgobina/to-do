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
    ];
  }

  setStorage() {
    if (localStorage.getItem('Tasks') == null) {
      localStorage.setItem('Tasks', JSON.stringify(this.taskList));
    }
  }
}
export default Tasks;