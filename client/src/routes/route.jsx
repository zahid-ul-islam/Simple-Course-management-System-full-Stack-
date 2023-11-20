import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import { About } from "../pages/About";

const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "courses",
          element: <Courses />,
        },
        {
           index:true,
            element: <About />,
        }
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};
export default AppRoutes;
