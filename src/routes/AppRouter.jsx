import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { mainSectionRoutes } from "../routes/routesConfig.jsx";
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
          {mainSectionRoutes.map(({ path }) => (
            <Route key={path} path={path} element={lazyLoadPage(path)} />
          ))}
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

// Helper to map path to component
const lazyLoadPage = (path) => {
  switch (path) {
    case "/groups":
      return <GroupsPage />;
    case "/expenses":
      return <ExpensesPage />;
    case "/result":
      return <ResultPage />;
    default:
      return <NotFoundPage />;
  }
};

export default AppRouter;
