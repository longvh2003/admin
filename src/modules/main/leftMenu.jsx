import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Avatar from '../../assets/images/avatar.jpg';

export const LeftMenu = () => {
  const history = useHistory();
  return (
    <div>
      <div className='w-12 px-9 py-4 md:grid md:grid-cols-4 md:px-3 md:py-4'>
        <div className='col-span-1'>
          <img
            src={Avatar}
            alt='Miracle'
            className='imageLeftMenu'
            onClick={() => history.push('/login')}
          />
        </div>
        <div className='col-span-3 grid grid-rows-2 py-1 hidden md:block'>
          <p className='row-span-1 px-2'>Amer Al-Barkawi</p>
          <div className='row-span-1'>
            <i className='fas fa-circle statusLeftMenu'></i>Online
          </div>
        </div>
      </div>
      <div className='headerLeftMenu invisible md:visible'>CATEGORY</div>
      <div>
        <button className='btnLeftMenu'>
          <NavLink to='/type-project'>
            <div className='grid grid-cols-7'>
              <div className='col-span-1'>
                <i className='fas fa-stream pr-2'></i>
              </div>
              <div className='col-span-6 hidden md:block'>Project Type</div>
            </div>
          </NavLink>
        </button>
      </div>
      <div>
        <button className='btnLeftMenu'>
          <NavLink to='/status-project'>
            <div className='grid grid-cols-7'>
              <div className='col-span-1'>
                <i className='fas fa-file-alt pr-2'></i>
              </div>
              <div className='col-span-6 hidden md:block'>Project Status</div>
            </div>
          </NavLink>
        </button>
      </div>
      <div>
        <button className='btnLeftMenu'>
          <NavLink to='/tech-stack'>
            <div className='grid grid-cols-7'>
              <div className='col-span-1'>
                <i className='fas fa-atlas pr-2'></i>
              </div>
              <div className='col-span-6 hidden md:block'>Tech Stack</div>
            </div>
          </NavLink>
        </button>
      </div>
      <div>
        <button className='btnLeftMenu'>
          <NavLink to='/customer'>
            <div className='grid grid-cols-7'>
              <div className='col-span-1'>
                <i className='fas fa-male pr-2'></i>
              </div>
              <div className='col-span-6 hidden md:block'>Customer</div>
            </div>
          </NavLink>
        </button>
      </div>
      <div className='headerLeftMenu invisible md:visible'>MANAGER</div>
      <div>
        <button className='btnLeftMenu'>
          <NavLink to='/department'>
            <div className='grid grid-cols-7'>
              <div className='col-span-1'>
                <i className='fas fa-code-branch pr-2'></i>
              </div>
              <div className='col-span-6 hidden md:block'>Department</div>
            </div>
          </NavLink>
        </button>
      </div>
      <div>
        <button className='btnLeftMenu'>
          <NavLink to='/staff'>
            <div className='grid grid-cols-7'>
              <div className='col-span-1'>
                <i className='fas fa-user pr-2'></i>
              </div>
              <div className='col-span-6 hidden md:block'>Staff</div>
            </div>
          </NavLink>
        </button>
      </div>
      <div>
        <button className='btnLeftMenu'>
          <NavLink to='/project'>
            <div className='grid grid-cols-7'>
              <div className='col-span-1'>
                <i className='fas fa-tasks pr-2'></i>
              </div>
              <div className='col-span-6 hidden md:block'>Projects</div>
            </div>
          </NavLink>
        </button>
      </div>
    </div>
  );
};
