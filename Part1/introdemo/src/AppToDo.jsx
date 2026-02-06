// AppToDo.jsx
import { useState } from 'react';

// TaskItem.jsx
const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="task-item">
      <span>{task.text}</span>
      <button onClick={onDelete}>Удалить</button>
    </div>
  );
};


const AppToDo = () => {
  // 1. Состояние для списка задач
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Изучить React' },
    { id: 2, text: 'Написать ToDo приложение' },
    { id: 3, text: 'Разобраться с замыканиями' }
  ]);

  // 2. Функция удаления задачи (пока оставим пустой)
  const deleteTask = (id) => {
    console.log('Нужно удалить задачу с id:', id);
   setTasks(tasks.filter(i=>i.id!==id));
  };

  return (
    <div className="todo-app">
      <h2>Мой список задач (ToDo)</h2>
      <p>Тема: Передача обработчиков через фабрику функций</p>
      
      {/* 3. Список задач будет здесь */}
      <div className="task-list">
        {tasks.map(
 
task=> <TaskItem key={task.id}  task={task} onDelete={()=>deleteTask(task.id)}/>

        )
        }
      </div>
    </div>
  );
};

export default AppToDo;