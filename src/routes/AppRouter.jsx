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
import SettingsPage from "../pages/SettingsPage";

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route element={<MainSectionLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
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
