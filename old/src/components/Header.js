import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='header-wrapper py-2'>
        <div className='fontStyled text-primary display-4 text-center'>
          <Link to={'/'} className='d-flex justify-content-center py-2'>
            <p className='rotateTextLeft'>Split</p>
            <p className='rotateTextRight'>EZ</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
