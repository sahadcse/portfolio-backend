import { useState, useEffect } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { FaAlignRight, FaX } from "react-icons/fa6";
import axiosInstance from "../../pages/admin/axiosInstances";

const NavDashboard = () => {
  const [navBtn, setNavBtn] = useState(false);
  const [admin, setAdmin] = useState({});
  const [error, setError] = useState(false);

  const getAdmin = async () => {
    try {
      const response = await axiosInstance.get("/all-admin");
      // console.log("DashBoard Admin: ", response.data.admin);
      setAdmin(response.data.admin);
    } catch (error) {
      setError(true);
      if (error.response && error.response.status == 401) {
        alert("Unauthorized");
      }
    }
  };

  const handleLOgout = () => {
    localStorage.clear();
    Navigate("/login");
  };

  useEffect(() => {
    getAdmin();
  }, []);

  const handleClickNav = () => {
    setNavBtn(!navBtn);
  };
  const handleNavLink = () => {
    setNavBtn(false);
  };
  return (
    <>
      <header className="bg-gray-500 w-[80%] flex mt-7 py-2 mb-5  m-auto items-center rounded-md xs:justify-center shadow-lg shadow-orange-200 z-50">
        {/* ADMIN NAME / LOGOUT */}
        <div className="w-[25%] xs:flex xs:justify-between xs:w-full">
          <div className="flex items-center gap-3">
            <div className="text-2xl text-white font-bold ml-4 xs:ml-0">
              <Link to="/dashboard" className="text-white md:ml-2">
                {admin?.AdminName || "Admin"}
              </Link>
            </div>
            <Link
              to="/login"
              className="text-tertiary mr-4 xs:mr-0 underline "
              onClick={handleLOgout}
            >
              Logout
            </Link>
          </div>

          <button
            className="hidden xs:inline-block nav-button text-3xl mr-4"
            onClick={handleClickNav}
          >
            {navBtn ? <FaX className="text-red-700" /> : <FaAlignRight />}
          </button>
        </div>

        {/* Navigation Start */}
        <nav
          className={`w-[73%] lg:w-full xs:absolute xs:mt-40 xs:bg-gray-500 xs:w-[90%] xs:rounded-md ${
            navBtn ? "xs:block" : "xs:hidden"
          }`}
        >
          <ul className="flex justify-around  xs:py-[0.45rem]  xs:grid xs:grid-cols-3 xs:gap-3 xs:mx-2 xs:text-center">
            {/* Home */}
            <li className="">
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `nav-button ${isActive && "active-link-admin"} xs:nav-btn`
                }
                onClick={handleNavLink}
              >
                Home
              </NavLink>
            </li>
            {/* About */}
            <li className="">
              <NavLink
                to="/dashboard/about"
                className={({ isActive }) =>
                  `nav-button ${isActive && "active-link-admin"} xs:nav-btn`
                }
                onClick={handleNavLink}
              >
                <span className="">About</span>
              </NavLink>
            </li>
            {/* Resume */}
            <li className="">
              <NavLink
                to="/dashboard/resume"
                className={({ isActive }) =>
                  `nav-button ${isActive && "active-link-admin"} xs:nav-btn`
                }
                onClick={handleNavLink}
              >
                <span className="">Resume</span>
              </NavLink>
            </li>
            {/* Works */}
            <li className="">
              <NavLink
                to="/dashboard/works"
                className={({ isActive }) =>
                  `nav-button ${isActive && "active-link-admin"} xs:nav-btn`
                }
                onClick={handleNavLink}
              >
                <span className="">Works</span>
              </NavLink>
            </li>
            {/* Contact */}
            <li className="">
              <NavLink
                to="/dashboard/contact"
                className={({ isActive }) =>
                  `nav-button ${isActive && "active-link-admin"} xs:nav-btn`
                }
                onClick={handleNavLink}
              >
                <span className="">Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};

export default NavDashboard;
