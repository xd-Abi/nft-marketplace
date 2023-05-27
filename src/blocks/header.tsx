import React from "react";
import AppLogo from "./logo";

const AppHeader = () => {
  return (
    <nav className="bg-transparent backdrop-blur-md fixed w-full bg-red-200 z-50 top-0 left-0">
      <div className="justify-center md:justify-between relative max-w-screen-2xl flex flex-wrap items-center mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className="text-slate-700 self-center text-2xl font-semibold whitespace-nowrap">
            <AppLogo />
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <button className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm border border-white hover:bg-transparent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
