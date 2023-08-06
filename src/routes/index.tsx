import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Homepage from "../pages/App";
import GetLatest from "../pages/GetLatest";

const index: FC = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Homepage /> },
    { path: "/latest", element: <GetLatest /> },
  ]);
  return <RouterProvider router={router} />;
};

export default index;
