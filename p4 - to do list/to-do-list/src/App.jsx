import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FilterButtons from './components/FilterButtons';
import AddTodoModal from './components/AddTodoModal';
import TodoList from './components/TodoList';
import filterItems from './utils/filterItems'; // Assuming you have moved filter logic to a utility file

function App() {
  const [filteredStatus, setFilteredStatus] = useState("to-do");
  const [todoNew, setTodoNew] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [todos, setTodos] = useState(() => {
    // Retrieve todos from localStorage on initial load
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const addTodo = () => {
    if (todoNew.trim().length < 1) return;
    const newTodo = {
      id: Date.now(),
      title: todoNew,
      status: 'to-do'
    };
    setTodos([...todos, newTodo]);
    setTodoNew("");
    toggleModal();
  };

  const removeTodo = (id) => {
    setTodos(filterItems(todos, id));
  };

  const makeTodoDone = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, status: 'done' } : todo
    );
    setTodos(updatedTodos);
  };

  const makeTodoTrash = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, status: 'trash' } : todo
    );
    setTodos(updatedTodos);
  };

  const makeTodoTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, status: 'to-do' } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const changeStatus = (status) => {
    setFilteredStatus(status);
  };

  const filteredTodos = todos.filter(todo => {
    if (filteredStatus === 'all') return true;
    return todo.status === filteredStatus;
  });

  useEffect(() => {
    // Save todos to localStorage whenever they change
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='container'>
      <Header />
      <main>
        <div className='pages'>
          <FilterButtons filteredStatus={filteredStatus} changeStatus={changeStatus} />
          <button className='btn btn-todo-add' onClick={toggleModal}>+</button>
        </div>
        
        <AddTodoModal
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          todoNew={todoNew}
          setTodoNew={setTodoNew}
          addTodo={addTodo}
        />
        <TodoList
          filteredTodos={filteredTodos}
          makeTodoDone={makeTodoDone}
          makeTodoTrash={makeTodoTrash}
          makeTodoTodo={makeTodoTodo}
          removeTodo={removeTodo}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;


// import { useState } from 'react'
// import './App.css'
// import trashBinIcon from './assets/trash-bin.png'; 
// import doneIcon from './assets/tick.png'; 
// import restoreIcon from './assets/restore.png';

// const filterItems = (arr, id) => {
//   if (!arr.some(item => item.id === id)) 
//     return arr;
//   return arr.filter((item) => item.id !== id);
// }

// function App() {
//   const [filteredStatus, setFilteredStatus] = useState("to-do");
//   const [todoNew, setTodoNew] = useState("");

//   const [todo, setTodo] = useState([{
//       id: Date.now(),
//       title: 'my first todo',
//       status: 'to-do'
//   }]);

//   const addTodo = () => {
//     if (todoNew.trim().length < 1) return;
//     const newTodoItem = {
//       id: Date.now(),
//       title: todoNew,
//       status: 'to-do'
//     }
//     setTodo([...todo, newTodoItem]);
//     setTodoNew("");
//   }

//   const removeTodo = (idx) => {
//     setTodo(filterItems(todo, idx));
//   }

//   const makeTodoDone = (idx) => {
//     const newTodos = todo.map((item) => item.id === idx ? {...item, status: 'done'} : item);
//     setTodo(newTodos);
//   }

//   const makeTodoTrash = (idx) => {
//     const newTodos = todo.map((item) => item.id === idx ? {...item, status: 'trash'} : item);
//     setTodo(newTodos);
//   }

//   const makeTodoTodo = (idx) => {
//     const newTodos = todo.map((item) => item.id === idx ? {...item, status: 'to-do'} : item);
//     setTodo(newTodos);
//   }

//   const filteredTodos = todo.filter((item) => {
//     if (filteredStatus === 'trash' && item.status === 'trash' ) return true;
//     if (filteredStatus === 'done' && item.status === 'done') return true;
//     if (filteredStatus === 'to-do' && item.status === 'to-do') return true;
//     return false;
//   })

//   const changeStatus = (newStatus) => {
//     if (newStatus === 'trash' || newStatus === 'done' || newStatus === 'to-do') {
//       setFilteredStatus(newStatus);
//     }
//   }

//   const [isModalOpen, setIsModalOpen] = useState(false); 

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   }

//   return (
//     <div className='container'>
//       <header>
//         <p className='todo_title'>Simple To Do List</p>
//         <p className='todo_description'>Today is awesome day. The weather is awesome, you are awesome too!</p>
//       </header>
//       <main>
//         <div className='pages'>
//         <div className='filters'>
//           <button
//             className={`btn btn-sm ${filteredStatus === 'to-do' ? 'btn-sm-active' : ''}`}
//             onClick={() => changeStatus('to-do')}
//           >
//             To Do
//           </button>
//           <button
//             className={`btn btn-sm ${filteredStatus === 'done' ? 'btn-sm-active' : ''}`}
//             onClick={() => changeStatus('done')}
//           >
//             Done
//           </button>
//           <button
//             className={`btn btn-sm ${filteredStatus === 'trash' ? 'btn-sm-active' : ''}`}
//             onClick={() => changeStatus('trash')}
//           >
//             Trash
//           </button>
//         </div>
//         <button className='btn btn-todo-add' onClick={toggleModal}>+</button>
      
//         {isModalOpen && (
//           <div className="modal">
//             <div className="modal-content">
//               <div className='modal-head'>
//                 <p>Add New To Do</p>
//                 <span className="close" onClick={toggleModal}>&times;</span>
//               </div>
//               <div className='modal-body'>
//                 <input
//                   value={todoNew}
//                   onChange={(event) => { setTodoNew(event.target.value) }}
//                   className='todo_input'
//                   placeholder='Your text'
//                 />
//                 <div>
//                   <button onClick={addTodo} className='btn btn-modal'>Add</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )} 
//         </div>
//         <div className='list_container'>
//           {filteredStatus === "to-do" ? (
//             <p className='list_title'>To Do</p>
//           ) : null}
//           {filteredStatus === "done" ? (
//             <p className='list_title'>Done</p>
//           ) : null}  
//           {filteredStatus === "trash" ? (
//             <p className='list_title'>Trash</p>
//           ) : null}  
//           <div class="line-breaker"></div>
//         </div>
//         <div className='todo_container'>
//           {filteredTodos.map((todo_item, idx) => (
//             <div className='todo_item_container'>              
//               {todo_item.status === "to-do" ? (
//                 <img
//                   src={doneIcon}
//                   alt="Done"
//                   onClick={ () => makeTodoDone(todo_item.id) }
//                   style={{ cursor: 'pointer', width: '15px', height: '15px' }}
//                   disabled={todo_item.status === 'done'}
//                 />
//               ) : null}    
//               {todo_item.status === "to-do" || todo_item.status === "done"  ? (
//                 <img
//                   src={trashBinIcon}
//                   alt="Delete"
//                   onClick={() => makeTodoTrash(todo_item.id)}
//                   style={{ cursor: 'pointer', width: '15px', height: '15px' }}
//                   disabled={todo.filter(t => t.id === todo_item.id).length === 0}
//                 />
//               ) : null}          
//               {todo_item.status === "done" || todo_item.status === "trash" ? (
//                 <img
//                   src={restoreIcon}
//                   alt="Restore"
//                   onClick={() => makeTodoTodo(todo_item.id)}
//                   style={{ cursor: "pointer", width: "15px", height: "15px" }}
//                   disabled={todo_item.status === "to-do"}
//                 />
//               ) : null}
//               {todo_item.status === "trash" ? (
//                 <img
//                   src={trashBinIcon}
//                   alt="Delete"
//                   onClick={() => removeTodo(todo_item.id)}
//                   style={{ cursor: 'pointer', width: '15px', height: '15px' }}
//                   disabled={todo.filter(t => t.id === todo_item.id).length === 0}
//                 />
//               ) : null}
//               <label className={`todo_item ${todo_item.status === "done" || todo_item.status === "trash" ? 'todo-item-done' : 'todo-item'}`}> {todo_item.title} </label>
//            </div>
//          ))}
//        </div>
//      </main>
//      <footer>
//        <p className='footer_title'>Made with love by Aktilek Ishanov in 2024</p>
//      </footer>
//    </div>
//  )
// }

// export default App















