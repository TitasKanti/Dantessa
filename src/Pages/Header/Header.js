import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import icon from '../../Images/Icons/icon2.png'
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">

        <div className="mb-2 sm:mb-0 flex flex-row">
          <div className="h-10 w-10 self-center mr-2">
            <img src={icon} alt="icon" />
          </div>
          <div>
            <NavLink to="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">Dentessa</NavLink><br />
          </div>
        </div>

        <div className="sm:mb-0 self-center">

          <NavLink to="/home" activeStyle={{ fontWeight: "bold", color: "blue" }} className="text-md no-underline text-black ml-3 px-1">Home</NavLink>

          <NavLink to="/about" activeStyle={{ fontWeight: "bold", color: "blue" }} className="text-md no-underline text-grey-darker ml-3 px-1">About</NavLink>

          <NavLink to="/doctors" activeStyle={{ fontWeight: "bold", color: "blue" }} className="text-lg no-underline text-grey-darkest ml-3">Doctors</NavLink>

          <NavLink to="/service" activeStyle={{ fontWeight: "bold", color: "blue" }} className="text-md no-underline text-grey-darker ml-3 px-1">Services</NavLink>

          <NavLink to="/news" activeStyle={{ fontWeight: "bold", color: "blue" }} className="text-md no-underline text-grey-darker ml-3 px-1">News</NavLink>
          <span className="text-blue-700 mx-3"> {user.displayName} </span>
          {
            user.email ?
              <button className="text-red-700" onClick={logOut}>Sign-Out</button>
              :
              <NavLink to="/signin" activeStyle={{ fontWeight: "bold", color: "blue" }} className="text-md no-underline text-grey-darker ml-3 px-1">Sign-In</NavLink>
          }


        </div>
      </nav>
    </div>
  );
};

export default Header;