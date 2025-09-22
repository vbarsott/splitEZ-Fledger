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

  // Add a new group
  const addGroup = async (groupData) => {
    const res = await fetch("/api/groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groupData),
    });
    const data = await res.json();
    return data;
  };

  // Delete group
  const deleteGroup = async (groupId) => {
    const res = await fetch(`/api/groups/${groupId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  };

  // Update group
  const updateGroup = async (groupId, updatedData) => {
    const res = await fetch(`/api/groups/${groupId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    const data = await res.json();
    return data;
  };

  // Add a new expense
  const addExpense = async (expenseData) => {
    const res = await fetch("/api/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expenseData),
    });
    const data = await res.json();
    return data;
  };

  // Delete expense
  const deleteExpense = async (expenseId) => {
    const res = await fetch(`/api/expenses/${expenseId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  };

  // Update expense
  const updateExpense = async (expenseId, updatedData) => {
    const res = await fetch(`/api/expenses/${expenseId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    const data = await res.json();
    return data;
  };

  return (
    <AppDataContext.Provider
      value={{
        groups,
        expenses,
        setGroups,
        setExpenses,
        addGroup,
        deleteGroup,
        updateGroup,
        addExpense,
        deleteExpense,
        updateExpense,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
