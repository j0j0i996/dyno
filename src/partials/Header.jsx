import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DynoLogo from "../images/dyno_logo_blue_white.png";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`bg-base-main fixed z-30 w-full shadow-lg  transition duration-300 md:bg-opacity-90`}
    >
      <div className="mx-auto  max-w-6xl px-5 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Site branding */}
          <div className="">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img width={"20%"} src={DynoLogo} style={{ minWidth: "200px" }} />
            </Link>
          </div>

          <div className="">
            {/* Logo */}
            <h1 className="text-primary-main text-2xl font-bold">Beta</h1>
          </div>

          {/* Site navigation */}
          {/*
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link to="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li>
              <li>
                <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Sign up</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
                </Link>
              </li>
            </ul>

          </nav>
        */}
        </div>
      </div>
    </header>
  );
}

export default Header;
