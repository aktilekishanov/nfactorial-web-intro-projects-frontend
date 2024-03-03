import React from 'react';

function AddTodoModal({ isModalOpen, toggleModal, todoNew, setTodoNew, addTodo }) {
  if (!isModalOpen) return null;

  return (
    <div className="modal" onClick={toggleModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className='modal-head'>
          <p>Add New To Do</p>
          <span className="close" onClick={toggleModal}>&times;</span>
        </div>
        <div className='modal-body'>
          <input
            value={todoNew}
            onChange={(event) => setTodoNew(event.target.value)}
            className='todo_input'
            placeholder='Your text'
          />
          <button onClick={() => { addTodo(); toggleModal(); }} className='btn btn-modal'>Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodoModal;
