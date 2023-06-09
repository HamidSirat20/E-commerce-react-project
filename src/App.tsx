import React from "react";
import { RouterProvider} from "react-router-dom";
import route from './routes/Routes'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <RouterProvider router={route} />
      <ToastContainer />
    </>
  );
};

export default App;
