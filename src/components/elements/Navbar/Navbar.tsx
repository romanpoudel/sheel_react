
import { Link } from "react-router-dom"


const Navbar = () => {
  return (



    <>


      <div className="navbar-center hidden lg:flex z-20 bg-purple-900 text-white fixed w-full">
        <ul className="menu menu-horizontal px-1">
          {/* Nav links */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>



          <li>
            <details>
              <summary className="navbar-item cursor-pointer" data-page="./pages/products.html">
                Our Products
              </summary>
              <ul className="p-2 bg-purple-900" style={{ margin: 0 }}>
                {/* Nested details */}
                <details x-data="{ open: false }" className="p-2">
                  <summary className="cursor-pointer">
                    Crystallizing
                  </summary>
                  <ul className="p-2 nested-list" >
                    <li className="navbar-item cursor-pointer" data-page="./pages/vista_crystal_plus.html">
                      <a>Vista Crystal plus</a>
                    </li>
                    {/* Other items */}
                  </ul>
                </details>
                {/* Other product categories */}
              </ul>
            </details>
          </li>
          {/* Other nav links */}
          <li
            className="navbar-item cursor-pointer"
            id="contact-link"
            data-page="./pages/index_content.html"
          >
            <a>Contact Us</a>
          </li>
        </ul>
      </div>












      {/* 
      <div className="flex justify-center">
        <ul className="">

          <img src="./src/assets/logo.svg" />

          <NavbarLinks
            title="Home"
            linkUrl=""
          />

          <NavbarLinks
            title="About"
            linkUrl=""
          />

          <NavbarLinks
            title="Services"
            linkUrl=""
          />

          <NavbarLinks
            title="Products"
            linkUrl=""
          />

          <NavbarLinks
            title="Contact Us"
            linkUrl=""
          />

          <Input
            placeholder="Search"
            type="search"
          />
        </ul>


      </div> */}








    </>


  )
}

export default Navbar