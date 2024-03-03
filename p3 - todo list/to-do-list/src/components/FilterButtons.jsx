import React from 'react';

function FilterButtons({ filteredStatus, changeStatus }) {
  return (
    <div className='filters'>
      <button
        className={`btn btn-sm ${filteredStatus === 'to-do' ? 'btn-sm-active' : ''}`}
        onClick={() => changeStatus('to-do')}
      >
        To Do
      </button>
      <button
        className={`btn btn-sm ${filteredStatus === 'done' ? 'btn-sm-active' : ''}`}
        onClick={() => changeStatus('done')}
      >
        Done
      </button>
      <button
        className={`btn btn-sm ${filteredStatus === 'trash' ? 'btn-sm-active' : ''}`}
        onClick={() => changeStatus('trash')}
      >
        Trash
      </button>
    </div>
  );
}

export default FilterButtons;
