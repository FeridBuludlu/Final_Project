import MainContext from "./context/context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import ROUTES from "./Routes/routes";
import "./App.css"

function App() {
  const [data, setData] = useState([]);
  const router = createBrowserRouter(ROUTES);
  const contextData = {
    data,
    setData,
  };
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;