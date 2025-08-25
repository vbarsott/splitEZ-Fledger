import { createContext } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

export const GroupsContext = createContext();

const GroupsContextProvider = ({ children }) => {
  const [groups, setGroups] = useLocalStorage('groups', []);
  const [expenses, setExpenses] = useLocalStorage('expenses', []);

  return (
    <GroupsContext.Provider
      value={{ groups, setGroups, expenses, setExpenses }}>
      {children}
    </GroupsContext.Provider>
  );
};

export default GroupsContextProvider;
