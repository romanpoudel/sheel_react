import { Input } from "@/components/ui/input";
import { useSearch } from "@/hooks/useSearch";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavbarOld() {
  const searchContext = useSearch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav id="navbar" className="z-20 fixed w-[100%] text-white pb-20">
      <div className="navbar bg-purple-900">
        <div className="navbar-start">
          {/* Dropdown */}
          <div className="dropdown dropdown-hover ">
            <div
              // tabIndex="0"
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleDropdown}
            >
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
            </div>
            <ul
              // tabIndex="0"
              className={`menu menu-sm dropdown-content p-2 z-[2] shadow bg-purple-900 rounded-box w-60 ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              {/* Nav links */}
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              {/* Products */}
              <li>
                <details>
                  <summary>Our Products</summary>
                  <ul className="p-2">
                    {/* Nested details */}
                    <details x-data="{ open: false }" className="p-2">
                      <summary
                        onClick={toggleDropdown}
                        className="cursor-pointer"
                      >
                        Waterproofing Chemical
                      </summary>
                      <ul className="nested-list pt-2" /*x-show="open"*/>
                        <li>
                          <a>Vista - IWA</a>
                        </li>
                        <li>
                          <a>Vista - IWA</a>
                        </li>
                        {/* Other items */}
                      </ul>
                    </details>
                    {/* Other product categories */}
                  </ul>
                </details>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              {/* <Input /> */}
            </ul>
          </div>

          {/* Logo and brand name */}
          <div className="flex">
            <figure>
              <img src="./src/assets/logo.svg" alt="logo" className="w-14 hidden lg:block" />
            </figure>
            <a className="btn btn-ghost text-xl"><Link to="/">Sheel Waterproofing</Link></a>
          </div>
        </div>

        {/* Large screen navbar */}
        <div className="navbar-center hidden lg:flex z-20">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>

            {/* Products */}
            <li>
              <details>
                <summary
                  className="navbar-item cursor-pointer"
                  data-page="./pages/products.html"
                >
                  <Link to="/products">Our Products</Link>
                </summary>
                <ul className="p-2 bg-purple-900" style={{ margin: 0 }}>
                  {/* Nested details */}
                  <details x-data="{ open: false }" className="p-2">
                    <summary
                      onClick={toggleDropdown}
                      className="cursor-pointer"
                    >
                      Crystallizing
                    </summary>
                    <ul className="p-2 nested-list">
                      <li>
                        <Link to="/">hari</Link>
                      </li>
                      {/* Other items */}
                    </ul>
                  </details>
                  {/* Other product categories */}
                </ul>
              </details>
            </li>
            {/* Other nav links */}
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex gap-4">
          <Input
            type="text"
            id="searchInput"
            placeholder="Search"
            value={searchContext?.searchQuery ?? ""}
            onChange={(e) => {
              if (searchContext) {
                searchContext.handleSetSearchQuery(e.target.value);
              }
            }}
          />
        </div>
      </div>
    </nav>
  );
}

export default NavbarOld;
