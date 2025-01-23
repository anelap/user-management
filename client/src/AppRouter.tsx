import AppLayout from "./components/AppLayout";
import ManageUser from "./components/UserForm";
import UsersContainer from "./components/UsersContainer";
import { createBrowserRouter } from "react-router-dom";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <UsersContainer />,
      },
      {
        path: "/add",
        element: <ManageUser />,
      },
      {
        path: "/user/:id",
        element: <ManageUser />,
      },
    ],
  },
]);
