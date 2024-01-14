import "../App.css";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import SignUp from "./SignUp";
import Browser from "./Browser";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);
  return (
    <div>
    <RouterProvider router={appRouter}>
      </RouterProvider>
      </div>
  );
};
export default Body;
