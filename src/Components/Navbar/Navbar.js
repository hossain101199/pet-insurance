import React from "react";
import logo from "../../IMG/Pet-Insurance.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const menuItems = (
    <>
      <li className="rounded-lg hover:bg-warning p-2 px-4  ">
        <HashLink smooth to="/#HowitWorks">
          How it works
        </HashLink>
      </li>
      <li className="rounded-lg hover:bg-warning p-2 px-4">
        <HashLink smooth to="/#WhoWeAre">
          Who we are
        </HashLink>
      </li>
      <li className="rounded-lg hover:bg-warning p-2 px-4">
        <HashLink smooth to="/#FAQ">
          FAQ
        </HashLink>
      </li>
    </>
  );
  return (
    <div className="mx-auto container navbar ">
      <div className=" navbar-start text-black">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact bg-white dropdown-content mt-3 p-2 shadow text-primary rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <img style={{ width: "70px" }} className="mr-2" src={logo} alt="" />
        <Link to="/" className="text-primary text-4xl md:text-5xl font-bold">
          Pet Insurance
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="gap-2 text-2xl menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
