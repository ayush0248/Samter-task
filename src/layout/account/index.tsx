import { Outlet } from "react-router-dom";
import Appbar from "./Appbar";

const Accountlayout = () => {
  return (
    <>
      <Appbar />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"></div>
        <Outlet />
      </main>
    </>
  );
};

export default Accountlayout
