import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Image1 from "/siteLogos/editlogo2.png";
import FadeInWhenVisible from "../animation/PCfadeIN";
import { FaAlignRight, FaX } from "react-icons/fa6";

const NavMain = () => {
  const [navBtn, setNavBtn] = useState(false);

  const handleClickNav = () => {
    setNavBtn(!navBtn)
  };
  const handleNavLink = () => {
    setNavBtn(false)
  }

  return (
    <FadeInWhenVisible className="flex w-[72%] lg:w-[75%] h-fit  md:w-full xs:w-[95%] xs:fixed top-2  sticky z-50">
      <header className="bg-gray-500 w-[100%] flex  m-auto items-center rounded-md xs:justify-center shadow-lg shadow-orange-200">
        <div className="w-[25%] xs:flex xs:justify-between xs:w-full">
          <div className="logo-sec  bg-black rounded-md ">
            <Link to="/">
              <img src={Image1} alt="Logo" className="w-44" />
            </Link>
          </div>

          <button
            className="hidden xs:inline-block nav-button text-3xl mr-4"
            onClick={handleClickNav}
          >
            {navBtn ? <FaX className="text-red-700" /> : <FaAlignRight />}
          </button>
        </div>

        <nav
          className={`w-[73%] lg:w-full xs:absolute xs:mt-40 xs:bg-gray-500 xs:w-[90%] xs:rounded-md ${
            navBtn ? "xs:block" : "xs:hidden"
          }`}
        >
          <ul className="flex justify-around  xs:py-[0.45rem]  xs:grid xs:grid-cols-3 xs:gap-3 xs:mx-2 xs:text-center">
            <li className="">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-button ${isActive && "active-link"} xs:nav-btn`
                }
                onClick={handleNavLink}
              >
                <span className="">Home</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-button ${isActive && "active-link"} xs:nav-btn`
                }
                onClick={handleNavLink}
              >
                About
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `nav-button ${isActive && "active-link"} xs:nav-btn`
                }
                onClick={handleNavLink}
              >
                Resume
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/works"
                className={({ isActive }) =>
                  `nav-button ${isActive && "active-link"} xs:nav-btn`
                }
                onClick={handleNavLink}
              >
                Works
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-button ${isActive && "active-link"} xs:nav-btn`
                }
                onClick={handleNavLink}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </FadeInWhenVisible>
  );
};

export default NavMain;
