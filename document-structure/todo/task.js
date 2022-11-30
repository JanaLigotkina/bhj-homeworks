const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const form = document.getElementById('tasks__form');
let textInput = '';

taskInput.addEventListener('keyup', (e) => {
  textInput = taskInput.value;
})

form.addEventListener('submit', e => {
  e.preventDefault();

  if (textInput != '') {
    let task = document.createElement('div');
    tasksList.appendChild(task);
    task.className = "task";

    let taskTitle = document.createElement('div');
    task.appendChild(taskTitle);
    taskTitle.className = "task__title";
    taskTitle.innerText = textInput;

    let taskRemove = document.createElement('a');
    task.appendChild(taskRemove);
    taskRemove.className = "task__remove";
    taskRemove.innerHTML = '&times;';
  } else {
    alert('Поле не должно быть пустым!');
  }

  taskInput.value = '';

  let taskAdd = Array.from(document.querySelectorAll('.task'));
  let taskDelete = Array.from(document.querySelectorAll('.task__remove'));
  console.log(taskAdd)

  taskDelete.forEach((item, i) => {
    item.addEventListener('click', () => { //как то странно перебирает и ловит не одно событие
      taskAdd[i].remove(); // удаляет из видимости таск, но в массиве он остается,
      //если удалим из массива - будет пустое место, если удалим так, чтобы не было пустого места,
      // то айдишники поменяются и нельзя будет удалить последний элемент
    })
  })
})
