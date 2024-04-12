import { createBrowserRouter } from "react-router-dom";

import Root from "@layouts/Root.tsx";
import Error from "@pages/Error";

import Home from "@pages/Home";
import TransactionIndex from "@pages/Transaction";
import TransactionNew from "@pages/TransactionCreate";
import Report from "@pages/Report";
import Setting from "@pages/Settings";
import Login from "@pages/Auth/Login";
import Register from "@pages/Auth/Register";

const routeItemProps = { errorElement: <Error /> };

const routes = [
  {
    ...routeItemProps,
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "report",
        element: <Report />,
      },
      {
        path: "settings",
        element: <Setting />,
      },
      {
        path: "transactions",
        children: [
          {
            index: true,
            element: <TransactionIndex />,
          },
        ],
      },
    ],
  },
  {
    ...routeItemProps,
    path: "transactions",
    element: <Root showNavbar={false} />,
    children: [
      {
        path: "new",
        element: <TransactionNew />,
      },
    ],
  },
  {
    ...routeItemProps,
    path: "/",
    element: <Root showNavbar={false} />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
