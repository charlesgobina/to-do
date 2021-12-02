import './style.css';
import 'boxicons';
import Tasks from './fucntions.js';

const task = new Tasks();

function displayTasks() {
  const tasks = document.querySelector('.tasks');
  task.taskList = JSON.parse(localStorage.getItem('Tasks'));
  task.taskList.sort((a, b) => a.index - b.index);
  let taskHolder = '';
  for (let i = 0; i < task.taskList.length; i += 1) {
    taskHolder += `
    <li class="i-task">
      <span class="check">
        <input data-id="${task.taskList[i].index}" id="choke" type="checkbox">
        <label data-id="${task.taskList[i].index}" class="mylo">${task.taskList[i].description}</label>
      </span>
      <i class='bx bx-dots-vertical-rounded bx-sm'></i>
    </li>
    `;
  }
  tasks.innerHTML = taskHolder;
}

function loadUncheckedData() {
  task.taskList = JSON.parse(localStorage.getItem('Tasks'));
  let item = document.querySelectorAll('#choke');
  item = Array.from(item);
  item.forEach((check) => {
    let checkId = check.dataset.id;
    checkId = Number(checkId);
    for (let i = 0; i < task.taskList.length; i += 1) {
      if (checkId === task.taskList[i].index) {
        if (task.taskList[i].completed === true) {
          check.checked = true;
        }
      }
    }
  });
}

function loadCrossed() {
  task.taskList = JSON.parse(localStorage.getItem('Tasks'));
  let mylo = document.querySelectorAll('.mylo');
  mylo = Array.from(mylo);
  mylo.forEach((mile) => {
    let mileId = mile.dataset.id;
    mileId = Number(mileId);
    for (let i = 0; i < task.taskList.length; i += 1) {
      if (mileId === task.taskList[i].index) {
        if (task.taskList[i].completed === true) {
          mile.classList.add('crossed');
        } else {
          mile.classList.remove('crossed');
        }
      }
    }
  });
}

function change() {
  task.taskList = JSON.parse(localStorage.getItem('Tasks'));
  const checky = document.querySelectorAll('#choke');
  checky.forEach((check) => {
    let checkId = check.dataset.id;
    checkId = Number(checkId);
    const mylo = document.querySelectorAll('.mylo');
    check.addEventListener('change', () => {
      if (check.checked) {
        for (let i = 0; i < task.taskList.length; i += 1) {
          if (task.taskList[i].index === checkId) {
            if (task.taskList[i].completed === false) {
              task.taskList[i].completed = true;
              mylo.forEach((mile) => {
                if (mile.innerText === task.taskList[i].description) {
                  mile.classList.add('crossed');
                }
              });
              localStorage.setItem('Tasks', JSON.stringify(task.taskList));
            }
          }
        }
      } else {
        for (let i = 0; i < task.taskList.length; i += 1) {
          if (task.taskList[i].index === checkId) {
            task.taskList[i].completed = false;
            mylo.forEach((mile) => {
              if (mile.innerText === task.taskList[i].description) {
                if (mile.classList.contains('crossed')) {
                  mile.classList.remove('crossed');
                }
              }
            });
            localStorage.setItem('Tasks', JSON.stringify(task.taskList));
          }
        }
      }
    });
  });
}

window.onload = () => {
  task.setStorage();
  displayTasks();
  change();
  loadUncheckedData();
  loadCrossed();
};