import React from 'react';

const Footer = () => {
  const currentYear = new Date();
  const yyyy = {
    year: 'numeric',
  };

  return (
    <>
      <div className='bg-primary'>
        <div className='container py-4 text-light text-center'>
          <h6 className='fw-light fs-6 pb-2'>
            Developed by <br /> Vanessa and Marcelo Barsotti
          </h6>
          <h6 className='fw-light fs-6'>
            {currentYear.toLocaleDateString('en-US', yyyy)} &copy; All rights
            reserved
          </h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
