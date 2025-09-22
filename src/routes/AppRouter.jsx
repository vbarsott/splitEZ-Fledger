import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AppDataProvider } from "../context/AppDataProvider.jsx";
import MainLayout from "../layout/MainLayout";
import MainSectionLayout from "../layout/MainSectionLayout";

const AboutPage = lazy(() => import("../pages/AboutPage"));
const ExpensesPage = lazy(() => import("../pages/ExpensesPage"));
const GroupsPage = lazy(() => import("../pages/GroupsPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const ResultPage = lazy(() => import("../pages/ResultPage"));
const AccountPage = lazy(() => import("../pages/AccountPage"));

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
        <Route path="/account" element={<AccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    ),
    {
      basename: "/splitEZ-Fledger/",
    }
  );

  return (
    <AppDataProvider>
      <RouterProvider router={router} />
    </AppDataProvider>
  );
};

export default AppRouter;
