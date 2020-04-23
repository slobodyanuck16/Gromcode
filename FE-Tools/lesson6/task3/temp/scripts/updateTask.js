import "core-js/modules/es.array.find";
import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';
export var onListClick = function onListClick(e) {
  var check = e.target.classList.contains('list-item__checkbox');
  var del = e.target.classList.contains('list-item__delete-btn');

  if (del) {
    onDeleteTask(e);
  }

  if (check) {
    onToggleTask(e);
  }
};
export var onToggleTask = function onToggleTask(e) {
  var isCheckbox = e.target.classList.contains('list-item__checkbox');

  if (!isCheckbox) {
    return;
  }

  var taskId = e.target.dataset.id;
  var tasksList = getItem('tasksList');

  var _tasksList$find = tasksList.find(function (task) {
    return task.id === taskId;
  }),
      text = _tasksList$find.text,
      createDate = _tasksList$find.createDate;

  var done = e.target.checked;
  var updatedTask = {
    text: text,
    createDate: createDate,
    done: done,
    finishDate: done ? new Date().toISOString() : null
  };
  updateTask(taskId, updatedTask).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem('tasksList', newTasksList);
    renderTasks();
  });
};
export var onDeleteTask = function onDeleteTask(e) {
  var del = e.target.classList.contains('list-item__delete-btn');

  if (!del) {
    return;
  }

  var taskId = e.target.dataset.id;
  var tasksList = getItem('tasksList');

  var _tasksList$find2 = tasksList.find(function (task) {
    return task.id === taskId;
  }),
      text = _tasksList$find2.text,
      createDate = _tasksList$find2.createDate;

  var done = e.target.checked;
  var updatedTask = {
    text: text,
    createDate: createDate,
    done: done,
    finishDate: done ? new Date().toISOString() : null
  };
  deleteTask(taskId, updatedTask).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem('tasksList', newTasksList);
    renderTasks();
  }); // 1 - Find button on list item element
  // 1.5 - Find this e.target list item element in api storage by (id???)
  // 2 - Delete this e.target list item
  // 3 - Then render tasks
};