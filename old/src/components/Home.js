import React from 'react';

const Home = () => {
  return (
    <>
      <div className='min-vh-50 py-4'>
        <div className='container'>
          <div className='row flex-column align-items-center justify-content-center gap-2 text-secondary'>
            <h1 className='fs-4 text-center'>Welcome!</h1>
            <h1 className='d-none'>SplitEZ</h1>
            <h2 className='fs-5 text-center'>
              Let's split the expenses <br /> EZly
            </h2>

            <div className='d-flex flex-column align-items-start justify-content-start py-4'>
              <p className='text-secondary'>Step 1: Create a group</p>
              <p className='text-dark pb-2'>
                Select the button group, create a group, and inform the
                participant's names
              </p>

              <p className='text-secondary'>Step 2: Add the expenses</p>
              <p className='text-dark pb-2'>
                Select the button expenses and include the expenses according to
                the participant's names
              </p>

              <p className='text-secondary'>Step 3: Check the result</p>
              <p className='text-dark pb-2'>
                Select the button result and check how much each participant
                should pay to whom
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
