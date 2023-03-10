import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo quiz.png';
import { MyContext } from '../../Layouts/Main';

const Header = () => {
  const [link, setlink] = useContext(MyContext);

  return (
    
<nav className=" px-2 sm:px-4 py-2.5 bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 border-gray-600">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <Link to={'/'} className="flex items-center">
      <img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Quiz Man</span>
  </Link>
  <div className="flex md:order-2">
      <button type="button" className="md:inline md:text-white md:bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 sm:hidden">Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700">
      <li>
        <Link to={"/"} className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to={link} className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Quiz</Link>
      </li>
      <li>
        <Link to={"/statistics"} className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Statistics</Link>
      </li>
      <li>
        <Link to={"/blogs"} className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Blogs</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>

  );
};

export default Header;