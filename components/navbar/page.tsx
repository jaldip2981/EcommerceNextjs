import { useState } from "react";

import { navLinks } from "../../constants/index";
import { logo, menu } from "@/assets";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex flex-col navbar">
    <div className="flex justify-between items-center bg-red">
      
    
        <div className="p-6 max-w-sm  bg-white rounded-xl  flex  items-center space-x-4">
          <div className="shrink-0">
            <img src="https://imgs.search.brave.com/doWqpBRvaJzKbzhTZn1v575oy5f_shzFfC6nUp7YY1w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9pQmVCUlZzak5L/d2gzbWlJTGctTnps/S21EVVk9LzB4MDoy/MDAweDIwMDAvZml0/LWluLzUwMHg1MDAv/cHJvamVjdHMtZmls/ZXMvMTIxLzEyMTI5/LzEyMTI5ODMvODdj/YjIyMmUtZTU4Ni00/NmNiLTg1NmQtNzI1/ZmY4ZjgxZmVlLnBu/Zw" alt="logo" className="w-[60px] h-[auto]" />
          </div>
          <div>
            <div className="text-3xl font-semibold text-black leading-tight">
              Tech<span className="text-current">Hub</span>
            </div>
            <p className="text-current">Get your product</p>
          </div>
        </div>

        <form>   
    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Search" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-current  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

        </div>


      <ul className="list-none sm:flex hidden px-[2rem] items-center flex-1 bg-current">
        {navLinks.map((nav: any, index: any) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer p-3 text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav: any, index: any) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;