import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../assets/images/avatar.jpg';
import { UserDetail } from '../../pages/main/user';

export const LeftMenu = () => {
  const [user, setUser] = useState(false);
  return (
    <div>
      <div className='px-9 py-4 md:grid lg:grid-cols-4 lg:px-3'>
        <div className='col-span-1'>
          <img
            src={Avatar}
            alt='Miracle'
            className='imageLeftMenu'
            onClick={() => setUser(!user)}
          />
        </div>
        <div className='col-span-3 grid grid-rows-2 py-1 lg:block'>
          <p className='row-span-1 px-2'>Amer Al-Barkawi</p>
          <div className='row-span-1'>
            <i className='fas fa-circle statusLeftMenu'></i>Online
          </div>
        </div>
      </div>
      {user ? <UserDetail /> : null}
      <div className='headerLeftMenu invisible md:visible'>CATEGORY</div>
      <div>
        <button className='btnLeftMenu'>
          <NavLink to='/type-project/page/1'>
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
          <NavLink to='/status-project/page/1'>
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
          <NavLink to='/tech-stack/page/1'>
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
          <NavLink to='/customer/page/1'>
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
          <NavLink to='/department/page/1'>
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
          <NavLink to='/staff/page/1'>
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
          <NavLink to='/project/page/1'>
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
