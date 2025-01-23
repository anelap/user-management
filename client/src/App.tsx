import "./App.css";

import { AppRouter } from "./AppRouter";
import { RouterProvider } from "react-router-dom";
import { SearchContextProvider } from "./context/SearchContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <SearchContextProvider>
        <RouterProvider router={AppRouter} />
        <ToastContainer />
      </SearchContextProvider>
    </>
  );
}

export default App;
