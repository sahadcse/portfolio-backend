import { Outlet, Navigate } from "react-router-dom";
import NavDashboard from "../../components/admin/NavDashboard";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  return (
    <div>
      {token ? (
        <div className=" lg:w-full grid justify-items-center lg:order-first">
          <NavDashboard />
          <Outlet />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default PrivateRoute;
