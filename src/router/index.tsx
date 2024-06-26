import { createBrowserRouter } from "react-router-dom";

import PublicRoute from "@components/Auth/PublicRoute";
import ProtectedRoute from "@components/Auth/ProtectedRoute";

import Root from "@layouts/Root.tsx";

import Home from "@pages/Home";
import Login from "@pages/Auth/Login";
import Register from "@pages/Auth/Register";
import TransactionIndex from "@pages/Transaction";
import TransactionNew from "@pages/TransactionCreate";
import Report from "@pages/Report";
import Setting from "@pages/Settings";
import Error from "@pages/Error";

const routeItemProps = { errorElement: <Error /> };

const routes = [
  {
    ...routeItemProps,
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <Root />,
        children: [
          { index: true, element: <Home /> },
          { path: "report", element: <Report /> },
          { path: "settings", element: <Setting /> },
          {
            path: "transactions",
            children: [{ index: true, element: <TransactionIndex /> }],
          },
        ],
      },
    ],
  },
  {
    ...routeItemProps,
    path: "transactions",
    element: <ProtectedRoute />,
    children: [
      {
        path: "new",
        element: <Root showNavbar={false} />,
        children: [{ index: true, element: <TransactionNew /> }],
      },
    ],
  },
  {
    ...routeItemProps,
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        element: <Root showNavbar={false} />,
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
