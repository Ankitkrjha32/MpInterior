import React from "react";
import logo from "../assets/MPnew.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  //  props can be also used to manage to transfer from one to another
  // let isLoggedIn=props.isLoggedIn
  //  let setIsLoggedIn=props.setIsLoggedIn

  function loginHandler() {
    setIsLoggedIn(false);
    toast.error("Logged Out");
  }

    // function clickhandler(){
      
    // }

  return (
    <div className="flex bg-[#ffffff] rounded-md  items-center h-[70px] justify-between  w-[90%]   mx-auto ">
      <div>
        <Link to="/">
          <img src={logo} height={120} width={230} className="bg-white" />
        </Link>
      </div>

      {/* Navbar anchor tag section */}

      <div className=" ">
        <ul className="flex text-black font-semibold gap-x-6  font-sans  ">
          <li className=" hover:text-blue-400  hover:border-b-2 border-blue-700">
            <Link to="/ "> HOME</Link>
          </li>
          <li className=" hover:text-blue-400  hover:border-b-2 border-blue-700">
            <Link to="/ "> RECENT PROJECTS</Link>
          </li>

          <li className=" hover:text-blue-400  hover:border-b-2 border-blue-700">
            <Link to="/ ">OUR SERVICES</Link>
          </li>

          <li className=" hover:text-blue-400  hover:border-b-2 border-blue-700">
            <Link to="/about ">ABOUT</Link>
          </li>

          
          <li className=" hover:text-blue-400  hover:border-b-2 border-blue-700">
            <Link to="/contact "> CONTACT US</Link>
           
          </li>
          <li className=" hover:text-blue-400  hover:border-b-2 border-blue-700">
            <Link to="/portfolio ">PORTFOLIO</Link>
          </li>
        </ul>
      </div>

      {/* Login signup logout dashboard button  */}

      {/* <div className="">
        {!isLoggedIn && (
          <Link to="/login">
            <button className=" text-richblack-100 rounded-[8px] border border-richblack-700  px-3 py-[8px] mx-4 transition duration-200 ease-in  bg-richblack-800 hover:text-green-500 ">
              Log in
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className=" text-richblack-100 rounded-[8px] border border-richblack-700  px-3 py-[8px]  transition duration-200 ease-in bg-richblack-800 hover:text-yellow-300">
              Sign up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={loginHandler}
              className=" text-richblack-100 rounded-[8px] border border-richblack-700  px-3 py-[8px] mx-4 transition duration-200 ease-in  bg-richblack-800 hover:text-green-500 "
            >
              Log out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className=" text-richblack-100 rounded-[8px] border border-richblack-700  px-3 py-[8px]  transition duration-200 ease-in bg-richblack-800 hover:text-green-500">
              Dashboard
            </button>
          </Link>
        )} */}
      {/* </div> */}




        <a href="https://api.whatsapp.com/send/?phone=9810275413&text&type=phone_number&app_absent=0" target="blank">
        <button className="bg-pink-600  h-[34px] text-[white]  px-2 text-[14px] flex items-center  hover:bg-yellow-25 hover:text-richblack-900 hover:font-400 transition-all duration-300 ease-in" >
        BOOK A CONSULTATION
      </button>
        </a>

        
    </div>
  );
};

export default Navbar;
