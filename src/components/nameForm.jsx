import React from 'react';

 const NameForm = ({search}) => {
  return (
    <div className="form-container">
      <form class='form-inline active-pink-3 active-pink-4'>
        <i class='fas fa-search' aria-hidden='true'></i>
        <input
          class='form-control form-control-sm ml-3 w-75'
          type='text'
          placeholder='Search'
          aria-label='Search'
          onChange={(e)=>search(e.target.value)}
        />
      </form>
    </div>
  );
};
export default NameForm