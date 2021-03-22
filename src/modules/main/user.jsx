import React from 'react';
import { useHistory } from 'react-router';

export const User = () => {
  const history = useHistory();
  return (
    <ul className='-mt-2 mb-2 mx-2 bg-gray-700 text-gray-300  w-2/3 rounded-sm h-16'>
      <li className='px-3 py-2 hover:text-white'>
        <button onClick={() => history.push('/login')} className='focus:outline-none'>
          <i className='fas fa-sign-out-alt pl-2 pr-3'></i>Log out
        </button>
      </li>
      <li className='px-3 hover:text-white '>
        <button onClick={() => history.push('/staff/1')} className='focus:outline-none'>
          <i className='fas fa-users-cog px-2'></i>View profile
        </button>
      </li>
    </ul>
  );
};
