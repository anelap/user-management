import { Outlet } from "react-router-dom";
import UsersToolbar from "./UsersToolbar";

function AppLayout() {
  return (
    <>
      <UsersToolbar />
      <Outlet />
    </>
  );
}

export default AppLayout;
