import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../AuthContext/AuthContext';


function Header() {

  const navigate = useNavigate()
  const { user,logOutUser } = useAuth()





  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img

              src="https://img.icons8.com/papercut/60/cheap-2--v2.png"
              className=" mr-3 w-17 h-15"
              alt="Logo"
            />
            <span className=' text-lime-500 text-xl font-mono'>MoneyView</span>
          </Link>





          {/* log in links */}
          <div className="flex items-center lg:order-2">

            {user ? (
              <Link
                to="/login"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                onClick={logOutUser}
              >
                Log out
              </Link>
            ) : (
              <Link
              to="/login"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
              )}


          </div>




          {/* middle links div */}
          <div
            className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1 md:justify-end"
            id="mobile-menu-2 "
          >
            <ul className="flex justify-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 md:items-center">

              {/* middle links start here */}

              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
        ${isActive ? "text-green-500" : " text-gray-700"}
        lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
        ${isActive ? "text-green-500" : " text-gray-700"}
        lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
        ${isActive ? "text-green-500" : " text-gray-700"}
        lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
        ${isActive ? "text-green-500" : " text-gray-700"}
        lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                  }
                >
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/account"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
        ${isActive ? "text-green-500" : " text-gray-700"}
        lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                  }
                >
                  Account
                </NavLink>
              </li>

              {/* middle links ends here */}

            </ul>

          </div>
          {/* middle links div end here */}



        </div>



      </nav>
    </header>
  );
}

export default Header



