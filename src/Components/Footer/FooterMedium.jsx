import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";

const FooterMedium = () => {
  return (
    <div className="hidden md:flex lg:hidden w-10/12 mx-auto mt-24 mb-16">
      <footer className="grid grid-cols-2 gap-x-24 gap-y-14">
      <div className="w-72">
        <a
          href="#"
          className="text-black normal-case text-2xl bg-base-100 border-none font-extrabold pl-0">
          NFTERS
        </a>
        <p className="text-accent font-semibold my-4 text-sm leading-6">
          Digital marketplace for crypto collectibles and non-fungible tokens
          (NFTs).Buy,sell and discover exclusive digital assets.
        </p>

        <div className="flex gap-4 mt-8">
          <div className="bg-blue-800 rounded-full p-1">
            <FaFacebookF className="text-2xl text-white" />
          </div>
          <div className="bg-sky-400 rounded-full p-1">
            <ImTwitter className="text-2xl text-white" />
          </div>
          <div className="bg-warning rounded-full p-1">
            <ImLinkedin2 className="text-2xl text-white" />
          </div>
        </div>
      </div>

      <div>
        <span className="font-semibold text-black text-xl">
          Market Place
        </span>
        <div className="flex flex-col gap-3">
          <a href="#" className="text-info text-sm font-semibold mt-4">
            All NFTs
          </a>
          <a href="#" className="text-info text-sm font-semibold">
            New
          </a>
          <a href="#" className="text-info text-sm font-semibold">
            Art
          </a>
          <a href="#" className="text-info text-sm font-semibold">
            Sports
          </a>
          <a href="#" className="text-info text-sm font-semibold">
            Utility
          </a>
          <a href="#" className="text-info text-sm font-semibold">
            Music
          </a>
          <a href="#" className="text-info text-sm font-semibold">
            Domain Name
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="font-semibold text-black text-xl">
          My Account
        </span>
        <div className="flex flex-col gap-3">
        <a href="#" className="text-info text-sm font-semibold mt-4">
          Profile
        </a>
        <a href="#" className="text-info text-sm font-semibold">
          Favourite
        </a>
        <a href="#" className="text-info text-sm font-semibold">
          My Collections
        </a>
        <a href="#" className="text-info text-sm font-semibold">
          Settings
        </a>
        </div>
      </div>

      <div>
        <span className="font-semibold text-black text-xl">
          Newsletter
        </span>
        <div className="form-control">
          <p className="text-info text-sm leading-6 my-4">
            Join our mailing list to stay in the loop with our newest feature
            releases,NFT drops,and tips and tricks for navigating NFTs.
          </p>

          <div className="flex items-center input input-bordered py-5 mt-3 rounded-full w-full relative">
            <input
              type="text"
              placeholder="Enter your email address.."
              className="w-full pr-16 text-xs"
            />
            <button className="bg-success text-white text-xs font-bold rounded-full px-3 py-2 absolute right-2">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default FooterMedium;