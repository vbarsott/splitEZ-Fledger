import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <>
      <div className='nav-wrapper py-4'>
        <ul className='nav d-flex justify-content-center gap-1'>
          <li className='nav-item bg-primary p-1 border border-primary rounded-3'>
            <NavLink to='/groups'>Groups</NavLink>
          </li>
          <li className='nav-item bg-primary p-1 border border-primary rounded-3'>
            <NavLink to='/expenses'>Expenses</NavLink>
          </li>
          <li className='nav-item bg-primary p-1 border border-primary rounded-3'>
            <NavLink to='/result'>Result</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainNav;
