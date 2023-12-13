
import React from "react";
import Body from "./components/Body";
import "./App.css";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import SignUp from "./components/SignUp"

const App = () => {
  const appRouter =createBrowserRouter([
    {
      path:'/',
      element:<Body/>
    },
    {
      path:'/SignUp',
      element:<SignUp/>
    },
  ])

  return (
    <div className="App">
     <RouterProvider router={appRouter}/>
    </div>
  );
};

export default App;
                                                                                                                                                                                                            