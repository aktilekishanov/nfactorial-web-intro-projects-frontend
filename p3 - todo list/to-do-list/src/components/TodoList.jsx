import React from 'react';
import trashBinIcon from '../assets/trash-bin.png';
import doneIcon from '../assets/tick.png';
import restoreIcon from '../assets/restore.png';

function TodoList({ filteredTodos, makeTodoDone, makeTodoTrash, makeTodoTodo, removeTodo }) {
  return (
    <div className='todo_container'>
      {filteredTodos.map((todo_item, idx) => (
        <div key={todo_item.id} className='todo_item_container'>
          {todo_item.status === "to-do" && (
            <img
              src={doneIcon}
              alt="Done"
              onClick={() => makeTodoDone(todo_item.id)}
              style={{ cursor: 'pointer', width: '15px', height: '15px' }}
            />
          )}
          {(todo_item.status === "to-do" || todo_item.status === "done") && (
            <img
              src={trashBinIcon}
              alt="Delete"
              onClick={() => makeTodoTrash(todo_item.id)}
              style={{ cursor: 'pointer', width: '15px', height: '15px' }}
            />
          )}
          {(todo_item.status === "done" || todo_item.status === "trash") && (
            <img
              src={restoreIcon}
              alt="Restore"
              onClick={() => makeTodoTodo(todo_item.id)}
              style={{ cursor: "pointer", width: "15px", height: "15px" }}
            />
          )}
          {todo_item.status === "trash" && (
            <img
              src={trashBinIcon}
              alt="Delete"
              onClick={() => removeTodo(todo_item.id)}
              style={{ cursor: 'pointer', width: '15px', height: '15px' }}
            />
          )}
          <label className={`todo_item ${todo_item.status === "done" || todo_item.status === "trash" ? 'todo-item-done' : 'todo-item'}`}>
            {todo_item.title}
          </label>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
