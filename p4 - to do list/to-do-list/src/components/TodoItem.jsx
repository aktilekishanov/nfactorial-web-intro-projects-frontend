import React from 'react';
import trashBinIcon from '../assets/trash-bin.png';
import doneIcon from '../assets/tick.png';
import restoreIcon from '../assets/restore.png';

function TodoItem({ todo, makeTodoDone, makeTodoTrash, makeTodoTodo, removeTodo }) {
  return (
    <div className='todo_item_container'>
      {todo.status === "to-do" && (
        <img
          src={doneIcon}
          alt="Done"
          onClick={() => makeTodoDone(todo.id)}
          style={{ cursor: 'pointer', width: '15px', height: '15px' }}
        />
      )}
      {(todo.status === "to-do" || todo.status === "done") && (
        <img
          src={trashBinIcon}
          alt="Delete"
          onClick={() => makeTodoTrash(todo.id)}
          style={{ cursor: 'pointer', width: '15px', height: '15px' }}
        />
      )}
      {(todo.status === "done" || todo.status === "trash") && (
        <img
          src={restoreIcon}
          alt="Restore"
          onClick={() => makeTodoTodo(todo.id)}
          style={{ cursor: "pointer", width: "15px", height: "15px" }}
        />
      )}
      {todo.status === "trash" && (
        <img
          src={trashBinIcon}
          alt="Delete permanently"
          onClick={() => removeTodo(todo.id)}
          style={{ cursor: 'pointer', width: '15px', height: '15px' }}
        />
      )}
      <label className={`todo_item ${todo.status === "done" || todo.status === "trash" ? 'todo-item-done' : ''}`}>
        {todo.title}
      </label>
    </div>
  );
}

export default TodoItem;
