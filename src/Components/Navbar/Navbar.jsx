import React from "react";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="w-full my-3">
      <div className="navbar bg-base-100 w-11/12 mx-auto  my-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="font-bold text-sm hover:text-primary" href="#">
                  Marketplace
                </a>
              </li>
              <li>
                <a className="font-bold text-sm hover:text-primary" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="font-bold text-sm hover:text-primary" href="#">
                  About
                </a>
              </li>
              <li className="md:hidden">
                <button className="">
                  <a className="rounded-full bg-white font-bold text-primary text-xs hover:text-white">
                    Connect Wallet
                  </a>
                </button>
              </li>
            </ul>
          </div>
          <a className="btn text-primary normal-case text-xl bg-base-100 border-none font-extrabold hover:bg-base-100">
            NFTERS
          </a>
          <div className="hidden lg:flex gap-10 ml-6">
            <a className="font-bold text-sm hover:text-primary" href="#">
              Marketplace
            </a>
            <a className="font-bold text-sm hover:text-primary" href="#">
              Resource
            </a>
            <a className="font-bold text-sm hover:text-primary" href="#">
              About
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex input input-bordered rounded-full w-full max-w-xs relative mr-6">
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none ml-3 text-sm"
          />
          <FiSearch className="absolute right-5 text-xl text-accent" />
        </div>

        {/* only visible for large device */}
        <div className="hidden lg:flex gap-3">
          <button className="bg-primary rounded-full px-7 py-2">
            <a className="text-white text-xs font-semibold">Upload</a>
          </button>
          
          <button className="">
            <a className="hidden md:flex text-primary text-xs font-semibold bg-white border border-primary rounded-full px-4 py-3 hover:bg-primary hover:text-white">
              Connect <span className="ml-1">Wallet</span>
            </a>
          </button>
        </div>

        {/* hidden for large device */}
        <div className="navbar-end gap-3 lg:hidden">
          <button className="bg-primary rounded-full px-7 py-1 md:py-2">
            <a className="text-white text-xs font-semibold">Upload</a>
          </button>
          <button className="hidden md:flex bg-white border border-primary rounded-full px-4 py-3">
            <a className="hidden md:flex text-primary text-xs font-semibold">
              Connect Wallet
            </a>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
