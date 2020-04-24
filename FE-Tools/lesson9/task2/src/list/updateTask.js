import { renderTasks } from './renderer';
import { getItem, setItem } from './storage';
import { updateTask, getTasksList, deleteTask } from './tasksGateway';

export const onListClick = (e) => {
  const check = e.target.classList.contains('list-item__checkbox');
  const del = e.target.classList.contains('list-item__delete-btn');

  if (del) {
    onDeleteTask(e);
  }
  if (check) {
    onToggleTask(e);
  }
};

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains('list-item__checkbox');

  if (!isCheckbox) {
    return;
  }
  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList
    .find((task) => task.id === taskId);
  const done = e.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done
      ? new Date().toISOString() : null,
  };
  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

export const onDeleteTask = (e) => {
  const del = e.target.classList.contains('list-item__delete-btn');

  if (!del) {
    return;
  }
  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList
    .find((task) => task.id === taskId);
  const done = e.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done
      ? new Date().toISOString() : null,
  };
  deleteTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });

// 1 - Find button on list item element
// 1.5 - Find this e.target list item element in api storage by (id???)
// 2 - Delete this e.target list item
// 3 - Then render tasks
};
