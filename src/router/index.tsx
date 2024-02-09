import { createBrowserRouter } from "react-router-dom";

import Root from "@layouts/Root.tsx";
import Error from "@pages/Error";

import Home from "@pages/Home";
import TransactionIndex from "@pages/Transaction";
import TransactionNew from "@pages/TransactionCreate";
import TransactionDetail from "@pages/TransactionDetail";

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
        path: "transactions",
        children: [
          {
            index: true,
            element: <TransactionIndex />,
          },
          {
            path: "new",
            element: <TransactionNew />,
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
        path: ":transactionId",
        element: <TransactionDetail />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
