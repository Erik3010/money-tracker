import { createBrowserRouter } from "react-router-dom";

import Root from "@layouts/Root.tsx";
import Error from "@pages/Error";

import Home from "@pages/Home";
import TransactionIndex from "@pages/Transaction";
import TransactionNew from "@pages/TransactionCreate";
import Report from "@pages/Report";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
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
    path: "transactions",
    element: <Root showNavbar={false} />,
    errorElement: <Error />,
    children: [
      {
        path: "new",
        element: <TransactionNew />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
