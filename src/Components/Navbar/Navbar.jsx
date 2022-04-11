import React, { useState } from "react";
import logo from "../../assits/logo.svg";
import lines from "../../assits/lines.svg";
import multi from "../../assits/multi.svg";
import { Link } from "react-router-dom";
import { Link as Link2 } from 'react-scroll';
import "./Navbar.css";

function Navbar() {
  const [state, setState] = useState(false);
  const [servicestate, setServiceState] = useState(false);

  return (
    <>
      <div>
      <header className="w-full h-20 bg-white fixed -top-2 z-50" >
        <div className="relative my-5 ">
        <nav className="flex place-content-around lg:flex lg:place-content-between lg:place-items-center lg:mx-20 lg:mt-3   ">
          <div className="flex place-content-between place-items-center">
            <Link to="/">
              <img className="w-52 sm:w-auto" src={logo} alt="sitelogo" />
            </Link>
          </div>

          <div className="hidden relative lg:flex justify-evenly place-content-center place-items-center ml-5">
            <div className="">
              <div className="dropdown inline-block relative ">
                <button className=" py-2 px-4 rounded inline-flex items-center">
                  <span className="mr-1 ">Services</span>
                </button>

                <ul className="dropdown-menu absolute hidden left-2 w-fit shadow-lg">
                  <li className="hover:bg-gray-200 bg-white py-2 px-2 hover:font-semibold text-sm whitespace-nowrap  ">
                    <Link to="/services/web-dev">Web-based Application</Link> 
                  </li>
                  <li className="bg-white hover:bg-gray-200 py-2 px-2 hover:font-semibold text-sm  ">
                    <Link to="/services/app-dev">Mobile Apps</Link>
                  </li>
                  <li className="bg-white hover:bg-gray-200 py-2 px-2 hover:font-semibold text-sm  ">
                    <Link to="/services/dev-ops">Dev-Ops</Link>
                  </li>
                  <li className="bg-white hover:bg-gray-200 py-2 px-2 hover:font-semibold text-sm  ">
                    <Link to="/services/ui-ux">UI/UX</Link>
                  </li>
                  <li className="bg-white hover:bg-gray-200 py-2 px-2 hover:font-semibold text-sm ">
                    <Link to="/services/shared-cto">Shared CTO</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="dropdown inline-block relative">
                <button className=" py-2 px-4 rounded inline-flex items-center">
                  <span className="mr-1 ">Engineering</span>
                </button>

                <ul className="dropdown-menu absolute hidden left-2 shadow-lg ">
                  <li className="bg-white hover:bg-gray-200 py-2 px-2 hover:font-semibold text-sm  ">
                    <Link to="/engineering/mobile">Mobile</Link>
                  </li>
                  <li className="bg-white hover:bg-gray-200 py-2 px-2 hover:font-semibold text-sm  ">
                    <Link to="/engineering/web">Web</Link>
                  </li>
                  <li className="bg-white hover:bg-gray-200 py-2 px-2 hover:font-semibold text-sm  ">
                    <Link to="/engineering/cloud">Cloud</Link>
                  </li>
                  <li className="bg-white hover:bg-gray-200 py-2 px-2 hover:font-semibold text-sm  ">
                    <Link to="/engineering/ecommerce">Ecommerce</Link>
                  </li>
                </ul>
              </div>
            </div>

            <p className="px-4">
              <Link to="/Pricing"> Pricing</Link>
            </p>

            <div className="">
              <div className="dropdown inline-block relative">
                <button className=" py-2 px-4 rounded inline-flex items-center">
                  <span className="mr-1 ">Code Vyasa</span>
                </button>

                <ul className="dropdown-menu absolute hidden left-2 shadow-lg ">
                  <li className="hover:bg-gray-200 bg-white py-2 px-2 hover:font-semibold text-sm ">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="hover:bg-gray-200 bg-white py-2 px-2 hover:font-semibold text-sm  ">
                    <Link to="/our-team">Our Team</Link>
                  </li>
                  <li className=" hover:bg-gray-200 bg-white py-2 px-2 hover:font-semibold text-sm  ">
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link2 className="btn px-4 py-2" to="contact" 
                spy={true}
                smooth={true}
                duration={800}
                >
              Get in Touch
            </Link2>

          </div>

          <div className="flex lg:hidden">
            <div
              className={state ? "hidden lg:hidden  " : " lg:hidden"}
              onClick={() => {
                if (!state) {
                  setState(true);
                }
                
              }}
            >
              <img className="w-10" src={lines} alt="lines_logo" />
            </div>

            <div
              className={state ? " lg:hidden" : "hidden lg:hidden"}
              onClick={() => {
                if (state) {
                  setState(false);
                }
                console.log("true hogya");
              }}
            >
              <img className="w-10" src={multi} alt="lines_logo" />
            </div>

            <div
              className={
                state
                  ? "mt-14 left-0 w-full absolute lg:hidden bg-white overflow-scroll " : "hidden lg:hidden"
              }
            >
              <p onClick={()=>{
                if(servicestate === "hidden"){
                  setServiceState("block")
                }else{
                  setServiceState("hidden")
                }
              }} className="text-center text-2xl py-2 mx-10 my-5 border border-bcolor rounded-lg">

                <Link to="/services/web-dev"> SERVICES</Link>
              </p>

              <ul className={`text-center ${servicestate}`  }>
                <li className="text-center text-xl py-2 mx-10 my-5 border border-bcolor rounded-lg bg-bcolor text-white"><Link to="/services/web-dev">Web-based Application</Link> </li>
                <li className="text-center text-xl py-2 mx-10 my-5 border border-bcolor rounded-lg bg-bcolor text-white"><Link to="/services/app-dev">Mobile Apps</Link></li>
                <li className="text-center text-xl py-2 mx-10 my-5 border border-bcolor rounded-lg bg-bcolor text-white"><Link to="/services/dev-ops">Dev-Ops</Link></li>
                <li className="text-center text-xl py-2 mx-10 my-5 border border-bcolor rounded-lg bg-bcolor text-white"><Link to="/services/ui-ux">UI/UX</Link></li>
                <li className="text-center text-xl py-2 mx-10 my-5 border border-bcolor rounded-lg bg-bcolor text-white"><Link to="/services/ui-ux"><Link to="/services/shared-cto">Shared CTO</Link></Link></li>
              </ul>


              <p className="text-center text-2xl py-2 mx-10 my-5 border  border-bcolor rounded-lg">
                <Link to="/engineering/mobile"> Engineering</Link>
              </p>

              
              




              <p className="text-center text-2xl py-2 mx-10 my-5 border border-bcolor rounded-lg">
                <Link to="/Pricing">Pricing</Link>
              </p>
              <p className="text-center text-2xl py-2 mx-10 my-5 border border-bcolor rounded-lg">
                Code Vyasa
              </p>
              <p className="bg-bcolor text-white text-center text-2xl py-2 mx-10 my-5 rounded-lg ">
                Get in Touch{" "}
              </p>
            </div>
          </div>
        </nav>
        </div>
      </header>
      </div>

    </>
  );
}

export default Navbar;
