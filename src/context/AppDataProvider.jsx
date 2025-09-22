import { useState, useEffect } from "react";
import { AppDataContext } from "./AppDataContext.jsx";

export const AppDataProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [groupsRes, expensesRes] = await Promise.all([
        fetch("/api/groups"),
        fetch("/api/expenses"),
      ]);
      setGroups(await groupsRes.json());
      setExpenses(await expensesRes.json());
    };
    fetchData();
  }, []);

  return (
    <AppDataContext.Provider
      value={{ groups, expenses, setGroups, setExpenses }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
