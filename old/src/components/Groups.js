import React, { useContext } from 'react';
import { GroupsContext } from '../contexts/GroupsContext';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Groups = () => {
  const { groups, setGroups } = useContext(GroupsContext);

  let groupName = '';
  let numberOfPeople = 0;

  const handleAddGroup = (e) => {
    e.preventDefault();

    // Validation for group name input
    groupName = groupName.trim();
    if (groupName === '') {
      alert('Please, inform the group name.');
      return;
    }
    const existingGroup = groups.find((g) => g.name === groupName);
    if (existingGroup) {
      alert(`${groupName} already exists. Please, choose another group name.`);
      document.getElementById('groupName').value = '';
      return;
    }

    // Validation for number of people input
    numberOfPeople = parseInt(
      document.getElementById('numberOfPeople').value,
      10
    );
    if (isNaN(numberOfPeople) || numberOfPeople < 1) {
      alert('Please, inform a valid number of people.');
      document.getElementById('numberOfPeople').value = '';
      return;
    }

    // Store the group
    const group = { name: groupName, qty: numberOfPeople };
    setGroups([...groups, group]);

    // Clean the form
    groupName = '';
    numberOfPeople = 0;
    document.getElementById('groupName').value = '';
    document.getElementById('numberOfPeople').value = '';
  };

  const handleDeleteGroup = (name) => {
    setGroups(groups.filter((group) => group.name !== name));
  };

  return (
    <>
      <div className='min-vh-50 py-4'>
        <div className='container'>
          <h2 className='fs-5 text-primary mb-2'>Step 1: Create a group</h2>

          <form>
            <div className='container'>
              <div className='row align-items-center border border-primary rounded-3 mb-2 py-2'>
                <div className='col-12 mb-2'>
                  <label className='fs-6'>Group name:</label>
                </div>
                <div className='col-12 mb-2'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Group name'
                    id='groupName'
                    onChange={(e) => (groupName = e.target.value)}
                    aria-label='group name'
                  />
                </div>

                <div className='col-8 mb-2'>
                  <label>Number of people:</label>
                </div>
                <div className='col-4 mb-2'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='#'
                    id='numberOfPeople'
                    onChange={(e) => (numberOfPeople = +e.target.value)}
                    aria-label='number of people'
                  />
                </div>

                <div className='col-12 addBtn text-center mt-2'>
                  <button
                    className='btn btn-primary link-light'
                    onClick={handleAddGroup}>
                    Add group
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className='container'>
            <div className='row align-items-center border border-primary rounded-3 mb-2 py-2'>
              <h2 className='fs-5 text-primary mb-2'>Groups</h2>

              {groups.map((g) => (
                <div
                  key={g.name}
                  className='d-flex justify-content-between align-items-center my-2'>
                  <div>
                    {g.name} ({g.qty} {g.qty === 1 ? 'Person' : 'People'})
                  </div>

                  <RiDeleteBin6Line
                    className='d-flex fs-5 text-secondary'
                    role='button'
                    aria-label='Delete Group'
                    title='Delete Group'
                    onClick={() => handleDeleteGroup(g.name)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
