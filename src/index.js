import './style.css';
import 'boxicons';
import Tasks from './fucntions.js';

const task = new Tasks();
const addBtn = document.querySelector('#enter');
const text = document.querySelector('#add-task');

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
                if (mile.value === task.taskList[i].description) {
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
              if (mile.value === task.taskList[i].description) {
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

function loadcheckedData() {
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

function orderingTasks() {
  task.taskList = JSON.parse(localStorage.getItem('Tasks'));
  for (let i = 0; i < task.taskList.length; i += 1) {
    task.taskList[i].index = i + 1;
  }
  task.setStorage();
}

function changeToMove() {
  const teta = document.querySelectorAll('#move');
  const omega = document.querySelectorAll('.edy');
  omega.forEach((omi) => {
    let omiId = omi.dataset.id;
    omiId = Number(omiId);
    teta.forEach((tet) => {
      let tetID = tet.dataset.id;
      tetID = Number(tetID);
      omi.addEventListener('focusin', () => {
        if (omiId === tetID) {
          tet.style.display = 'none';
        }
      });
      omi.addEventListener('focusout', (e) => {
        if (omiId === tetID) {
          if (e.relatedTarget?.classList.contains('del')) {
            return;
          }
          tet.style.display = 'block';
        }
      });
    });
  });
}

function displayTasks() {
  const tasks = document.querySelector('.tasks');
  task.taskList = task.getStorage();
  task.taskList.sort((a, b) => a.index - b.index);
  let taskHolder = '';
  for (let i = 0; i < task.taskList.length; i += 1) {
    taskHolder += `
    <li class="i-task">
      <span class="check">
        <label hidden>Completed Status</label>
        <input data-id="${task.taskList[i].index}" id="choke" type="checkbox">
        <label hidden>Enter Task</label>
        <input id="for-update" class="edy mylo" data-id="${task.taskList[i].index}" type="text" value="${task.taskList[i].description}">
      </span>
      <form>
      </form>
      <i data-id="${task.taskList[i].index}" class='bx bx-dots-vertical-rounded bx-sm'id="move"></i>
      <button aria-label="Delete task" type="button" class="del" data-id="${task.taskList[i].index}" id="trash" ><i class='bx bx-trash bx-sm'></i></button>
    </li>
    `;
  }
  task.setStorage();
  change();
  loadcheckedData();
  loadCrossed();
  tasks.innerHTML = taskHolder;
}

function changeToTrash() {
  const delta = document.querySelectorAll('#trash');
  const omega = document.querySelectorAll('.edy');
  omega.forEach((omi) => {
    let omiId = omi.dataset.id;
    omiId = Number(omiId);
    delta.forEach((del) => {
      let delID = del.dataset.id;
      delID = Number(delID);
      omi.addEventListener('focusin', () => {
        if (omiId === delID) {
          del.style.display = 'block';
          del.style.backgroundColor = '#fff';
          del.childNodes[0].classList.add('del-color');
        }
      });
      omi.addEventListener('focusout', (e) => {
        if (e.relatedTarget?.classList.contains('del')) {
          // eslint-disable-next-line no-use-before-define
          deleteSingleTask();
          return;
        }
        if (omiId === delID) {
          del.style.display = 'none';
        }
      });
    });
  });
}

function deleteSingleTask() {
  let delta = document.querySelectorAll('#trash');
  delta = Array.from(delta);
  for (let i = 0; i < delta.length; i += 1) {
    let suprimeurId = delta[i].dataset.id;
    suprimeurId = Number(suprimeurId);
    delta[i].addEventListener('click', () => {
      task.deleteSingleItem(suprimeurId);
      displayTasks();
      changeToMove();
      change();
      changeToTrash();
    });
  }
}

function deleteEverything() {
  const deleteAll = document.querySelector('#clear-all');
  deleteAll.addEventListener('click', () => {
    task.deleteAllCheckedItems(task.taskList);
    displayTasks();
    change();
    loadcheckedData();
    loadCrossed();
    orderingTasks();
    changeToTrash();
    changeToMove();
  });
}

function updateValue() {
  const uText = document.querySelectorAll('.edy');
  uText.forEach((iUpdate) => {
    const updateId = iUpdate.dataset.id;
    task.updateItem(updateId, iUpdate);
    task.setStorage();
    change();
    loadcheckedData();
    loadCrossed();
  });
}

function addTask() {
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    task.index = task.taskList.length + 1;
    task.description = text.value;
    task.completed = false;
    task.addItem();
    text.value = '';
    orderingTasks();
    displayTasks();
    updateValue();
    change();
    loadcheckedData();
    loadCrossed();
    changeToTrash();
    changeToMove();
  });
}
addTask();

window.onload = () => {
  displayTasks();
  change();
  loadcheckedData();
  loadCrossed();
  updateValue();
  deleteEverything();
  deleteSingleTask();
  changeToMove();
  changeToTrash();
};