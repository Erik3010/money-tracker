import { createBrowserRouter } from "react-router-dom";

import Root from "../layouts/Root.tsx";
import Error from "../pages/Error.tsx";

import Home from "../pages/Home.tsx";
import TransactionIndex from "../pages/Transactions/Index.tsx";
import TransactionDetail from "../pages/Transactions/Detail.tsx";
import TransactionNew from "../pages/Transactions/New.tsx";

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
