import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import MainLayout from "../layout/MainLayout";
import MainSectionLayout from "../layout/MainSectionLayout";
import AboutPage from "../pages/AboutPage";
import ExpensesPage from "../pages/ExpensesPage";
import GroupsPage from "../pages/GroupsPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import ResultPage from "../pages/ResultPage";
import AccountPage from "../pages/AccountPage";

const AppRouter = () => {
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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route element={<MainSectionLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/groups"
            element={
              <GroupsPage addGroupSubmit={addGroup} deleteGroup={deleteGroup} updateGroup={updateGroup} />
            }
          />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    ),
    {
      basename: "/splitEZ-Fledger",
    }
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
