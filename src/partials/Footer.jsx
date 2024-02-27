import React from "react";
import { Link } from "react-router-dom";
import DynoLogo from "../images/dyno_logo_white_blue.png";

function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="border-quartiary-main grid grid-cols-1 gap-8 border-t py-8 md:grid-cols-12 md:py-12">
          {/* 1st block */}
          <div className="col-span-3">
            <div className="mb-2 ">
              {/* Logo */}
              <Link to="/" className="block " aria-label="Cruip">
                <img width={"20%"} src={DynoLogo} style={{ minWidth: "160px" }} />
              </Link>
            </div>
            <div className="text-neutral-main text-sm">
              <Link
                to="#"
                className="text-neutral-main hover:text-base-main transition duration-150 ease-in-out hover:underline"
              >
                Allgemeine Geschäftsbedingungen (AGB)
              </Link>{" "}
              ·{" "}
              <Link
                to="#"
                className="text-neutral-main hover:text-base-main transition duration-150 ease-in-out hover:underline"
              >
                Datenschutzerklärung
              </Link>
              <Link
                to="/impressum"
                className="text-neutral-main hover:text-base-main transition duration-150 ease-in-out hover:underline"
              >
                Impressum
              </Link>
            </div>
          </div>

          {/* 3rd block */}
          <div className="col-span-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-neutral-main mb-2 font-medium">Wissen</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="https://www.linkedin.com/pulse/we-germans-great-being-geizig-thrifty-lets-use-energy-schulte%3FtrackingId=1Vv1B4%252BbRdiviCmVwPiSrg%253D%253D/?trackingId=1Vv1B4%2BbRdiviCmVwPiSrg%3D%3D"
                  className="text-neutral-main hover:text-base-main transition duration-150 ease-in-out"
                >
                  Warum dynamische Tarife?
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-3 md:col-span-3 lg:col-span-2">
            <h6 className="text-neutral-main mb-2 font-medium">Unternehmen</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-neutral-main hover:text-base-main transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-neutral-main hover:text-base-main transition duration-150 ease-in-out"
                >
                  Über uns
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="col-span-3 sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-neutral-main mb-2 font-medium">Feedback</h6>
            <p className="text-neutral-main  text-sm">Feedback oder Ideen?</p>
            <p className="text-neutral-main mb-4 text-sm">
              Schreib uns gerne:{" "}
              <Link
                to="mailto:jonathan@dynocheck.de"
                className="text-neutral-main hover:text-base-main transition duration-150 ease-in-out"
              >
                jonathan@dynocheck.de
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom area */}
        <div className="border-quartiary-main border-t py-4 md:flex md:items-center md:justify-between md:py-8">
          {/* Social links */}
          <ul className="mb-4 flex md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <Link
                to="https://github.com/j0j0i996/stromcheck"
                className="hover:bg-neutral-main text-primary-main hover:text-base-main bg-neutral-main flex items-center justify-center rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Github"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="https://www.linkedin.com/in/j-schulte/"
                className="hover:bg-neutral-main text-primary-main hover:text-base-main bg-neutral-main flex items-center justify-center rounded-full shadow transition duration-150 ease-in-out"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="-8 -9 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
