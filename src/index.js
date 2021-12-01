import './style.css';
import 'boxicons';

const Tasks = [
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

const tasks = document.querySelector('.tasks');

const displayTasks = () => {
  Tasks.sort((a, b) => a.index - b.index);
  let taskHolder = '';
  for (let i = 0; i < Tasks.length; i += 1) {
    taskHolder += `
    <li class="i-task">
      <span class="check">
        <input type="checkbox">
        <label>${Tasks[i].description}</label>
      </span>
      <i class='bx bx-dots-vertical-rounded bx-sm'></i>
    </li>
    `;
  }
  tasks.innerHTML = taskHolder;
};

window.onload = () => {
  displayTasks();
};