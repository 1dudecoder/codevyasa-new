import React, { useState } from "react";
import logo from "../../assits/logo.svg";
import lines from "../../assits/lines.svg";
import multi from "../../assits/multi.svg";
import { Link } from "react-router-dom";
import { Link as Link2 } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [state, setState] = useState(false);
  const [servicestate, setServiceState] = useState("hidden");
  const [engstate, setEngState] = useState("hidden");
  const [codevyasastate, setCodevyasaState] = useState("hidden");

  return (
    <>
      <div>
        <header className="w-full h-20 bg-white fixed -top-2 z-50">
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
                        <Link to="/services/web-dev">
                          Web-based Application
                        </Link>
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
                <Link to="/our-team"> Our Team</Link>
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
                      {/* <li className="hover:bg-gray-200 bg-white py-2 px-2 hover:font-semibold text-sm  ">
                        <Link to="/our-team">Our Team</Link>
                      </li> */}
                      <li className=" hover:bg-gray-200 bg-white py-2 px-2 hover:font-semibold text-sm  ">
                        <Link to="/blog">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                

                <Link2
                  className="btn px-4 py-2"
                  to="contact"
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
                  }}
                >
                  <img className="w-10" src={multi} alt="lines_logo" />
                </div>

                <div
                  className={
                    state
                      ? "mt-14 left-0 w-full absolute lg:hidden bg-white h-96 overflow-scroll shadow-2xl shadow-slate-500 rounded-b-md  "
                      : "hidden lg:hidden"
                  }
                >
                  <p
                    onClick={() => {
                      if (servicestate === "hidden") {
                        setServiceState("block");
                      } else {
                        setServiceState("hidden");
                      }
                    }}
                    className="text-center text-2xl py-2 mx-10 my-2 border border-bcolor bg-white  rounded-lg"
                  >
                    SERVICES
                  </p>

                  <ul className={`text-center ${servicestate}`}>
                    <li onClick={()=>{
                      setState(false);
                    }}  className="text-center text-sm py-2 mx-12 my-2 border border-bcolor rounded-lg bg-bcolor text-white">
                      <Link to="/services/web-dev">Web-based Application</Link>{" "}
                    </li>
                    <li onClick={()=>{
                      setState(false);
                    }} className="text-center text-sm py-2 mx-12 my-2 border border-bcolor rounded-lg bg-bcolor text-white">
                      <Link to="/services/app-dev">Mobile Apps</Link>
                    </li>
                    <li onClick={()=>{
                      setState(false);
                    }} className="text-center text-sm py-2 mx-12 my-2 border border-bcolor rounded-lg bg-bcolor text-white">
                      <Link to="/services/dev-ops">Dev-Ops</Link>
                    </li>
                    <li onClick={()=>{
                      setState(false);
                    }} className="text-center text-sm py-2 mx-12 my-2 border border-bcolor rounded-lg bg-bcolor text-white">
                      <Link to="/services/ui-ux">UI/UX</Link>
                    </li>
                    <li onClick={()=>{
                      setState(false);
                    }} className="text-center text-sm py-2 mx-12 my-2 border border-bcolor rounded-lg bg-bcolor text-white">
                      <Link to="/services/ui-ux">
                        <Link to="/services/shared-cto">Shared CTO</Link>
                      </Link>
                    </li>
                  </ul>


                  <p
                    onClick={() => {
                      if (engstate === "hidden") {
                        setEngState("block");
                      } else {
                        setEngState("hidden");
                      }
                    }}
                    className="text-center text-2xl py-2 mx-10 my-5 border border-bcolor bg-white rounded-lg "
                  >
                    Engineering
                  </p>

                  <ul className={`text-center ${engstate}`}>
                    <li onClick={()=>{
                      setState(false);
                    }}  className="text-center text-sm py-2 mx-12 my-2 border border-bcolor rounded-lg bg-bcolor text-white">
                        <Link to="/engineering/mobile">Mobile</Link>
                    </li>
                    <li onClick={()=>{
                      setState(false);
                    }} className="text-center text-sm py-2 mx-12 my-2 border border-bcolor rounded-lg bg-bcolor text-white">
                        <Link to="/engineering/web">Web</Link>
                    </li>
                    <li onClick={()=>{
                      setState(false);
                    }} className="text-center text-sm py-2 mx-12 my-2 border border-bcolor rounded-lg bg-bcolor text-white">
                        <Link to="/engineering/cloud">Cloud</Link>
                    </li>
                    <li onClick={()=>{
                      setState(false);
                    }} className="text-center text-sm py-2 mx-12 my-2 border border-bcolor rounded-lg bg-bcolor text-white">
                        <Link to="/engineering/ecommerce">Ecommerce</Link>
                    </li>


                  </ul>

                  <p onClick={()=>{
                    setState(false);
                  }} className="text-center text-2xl bg-white py-2 mx-10 my-5 border border-bcolor rounded-lg">
                    <Link to="/Pricing">Pricing</Link>
                  </p>

                  <p
                    onClick={() => {
                      if (codevyasastate === "hidden") {
                        setCodevyasaState("block");
                      } else {
                        setCodevyasaState("hidden");
                      }
                    }}
                    className="text-center text-2xl py-2 mx-10 my-2 border border-bcolor bg-white  rounded-lg"
                  >
                    Code Vyasa
                  </p>

                  <ul className={`text-center ${codevyasastate}`}>
                    <li onClick={()=>{
                      setState(false);
                    }}  className="text-center text-sm py-2 mx-12 my-2 border border-bcolor rounded-lg bg-bcolor text-white">
                        <Link to="/about">About</Link>
                    </li>
                    <li onClick={()=>{
                      setState(false);
                    }} className="text-center text-sm py-2 mx-12 my-2 border border-bcolor rounded-lg bg-bcolor text-white">
                        <Link to="/our-team">Our Team</Link>
                    </li>
                    <li onClick={()=>{
                      setState(false);
                    }} className="text-center text-sm py-2 mx-12 my-2 border border-bcolor rounded-lg bg-bcolor text-white">
                        <Link to="/blog">Blog</Link>
                    </li>


                  </ul>

                  <p onClick={()=>{setState(true)}} className="bg-bcolor text-white  text-center text-2xl py-2 mx-10 my-5 rounded-lg ">
                  <Link2
                  onClick={()=>{
                    setState(false);
                  }}
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  Get in Touch
                </Link2>
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
