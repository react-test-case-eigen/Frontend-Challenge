import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Homepage from "../pages/App";
import GetLatest from "../pages/GetLatest";
import GetBusiness from "../pages/GetBusiness";
import GetEntertainmnet from "../pages/GetEntertainment";
import GetHealth from "../pages/GeatHealth";
import GetScience from "../pages/GetScience";
import GetSports from "../pages/GetSports";
import GetTechnology from "../pages/GetTechnology";

const index: FC = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Homepage /> },
    { path: "/latest", element: <GetLatest /> },
    { path: "/business", element: <GetBusiness /> },
    { path: "/entertainment", element: <GetEntertainmnet /> },
    { path: "/health", element: <GetHealth /> },
    { path: "/science", element: <GetScience /> },
    { path: "/sports", element: <GetSports /> },
    { path: "/technology", element: <GetTechnology /> },
  ]);
  return <RouterProvider router={router} />;
};

export default index;
