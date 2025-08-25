import React, { useContext } from 'react';
import { GroupsContext } from '../contexts/GroupsContext';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Expenses = () => {
  const { groups, expenses, setExpenses } = useContext(GroupsContext);

  let whoPaid = '';
  let whatWasBought = '';
  let amountPaid = 0;

  const handleAddExpense = (e) => {
    e.preventDefault();

    // Validation for whoPaid input
    if (whoPaid === '') {
      alert('Please, select a group.');
      document.getElementById('whoPaid').value = 'Select one group';
      return;
    }

    // Validation for whatWasBought input
    whatWasBought = whatWasBought.trim();
    if (whatWasBought === '') {
      alert('Please, inform the item that was bought.');
      document.getElementById('whatWasBought').value = '';
      return;
    }
    const existingBoughtItem = expenses.find(
      (item) => item.what === whatWasBought
    );
    if (existingBoughtItem) {
      alert(
        `${whatWasBought} already exists. Please, inform another item name.`
      );
      document.getElementById('whatWasBought').value = '';
      return;
    }

    // Validation for amountPaid input
    amountPaid = parseFloat(document.getElementById('amountPaid').value);
    if (isNaN(amountPaid)) {
      alert('Please, inform a valid amount.');
      document.getElementById('amountPaid').value = '';
      return;
    }

    // Store expenses info
    const expense = {
      who: whoPaid,
      what: whatWasBought,
      amount: amountPaid,
    };
    setExpenses([...expenses, expense]);

    // Clean the form
    whoPaid = '';
    whatWasBought = '';
    amountPaid = 0;
    document.getElementById('whoPaid').value = 'Select one group';
    document.getElementById('whatWasBought').value = '';
    document.getElementById('amountPaid').value = '';
  };

  const handleDeleteExpense = (what) => {
    setExpenses(expenses.filter((e) => e.what !== what));
    document.getElementById('whoPaid').value = 'Select one group';
    document.getElementById('whatWasBought').value = '';
  };

  return (
    <>
      <div className='min-vh-50 py-4'>
        <div className='container'>
          <h2 className='fs-5 text-primary mb-2'>Step 2: Add the expenses</h2>

          <form>
            <div className='container'>
              <div className='row align-items-center border border-primary rounded-3 mb-2 py-2'>
                <div className='col-12 mb-2'>
                  <label className='fs-6'>Who</label>
                  <select
                    className='form-select'
                    aria-label='groups names options'
                    id='whoPaid'
                    onChange={(e) => (whoPaid = e.target.value)}>
                    <option>Select one group</option>
                    {groups.map((g) => (
                      <option key={g.name} value={g.name}>
                        {g.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='col-12 mb-2'>
                  <label>What</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Description'
                    aria-label='item description'
                    id='whatWasBought'
                    onChange={(e) => (whatWasBought = e.target.value)}
                  />
                </div>

                <div className='col-12 mb-2'>
                  <label>How much</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='CA$'
                    aria-label='amount'
                    id='amountPaid'
                    onChange={(e) => (amountPaid = +e.target.value)}
                  />
                </div>

                <div className='col-12 addBtn text-center mt-2'>
                  <button
                    className='btn btn-primary link-light'
                    onClick={handleAddExpense}>
                    Add expense
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className='container'>
            <div className='row align-items-center border border-primary rounded-3 mb-2 py-2'>
              <h2 className='fs-5 text-primary mb-2'>Expenses</h2>

              {expenses.map((exp) => (
                <div
                  key={exp.what}
                  className='d-flex justify-content-between align-items-center my-2'>
                  <div>
                    {exp.who}: {exp.what} (CA$
                    {exp.amount.toFixed(2)})
                  </div>

                  <RiDeleteBin6Line
                    className='d-flex fs-5 text-secondary'
                    role='button'
                    aria-label='Delete Expense'
                    title='Delete Expense'
                    onClick={() => handleDeleteExpense(exp.what)}
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

export default Expenses;
