import React, { useState } from "react";
import logo from "../../assits/logo.svg";
import close from "../../assits/cancel.png";
import { Link } from "react-router-dom";
import { Link as Link2 } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [state, setState] = useState(false);
  const [servicestate, setServiceState] = useState("hidden");
  const [engstate, setEngState] = useState("hidden");
  const [codevyasastate, setCodevyasaState] = useState("hidden");
  const [transition, setTransition] = useState("hidden");

  return (
    <>
      <div>
        <header className="w-full bg-white fixed -top-0 z-50 flex-1">
          <div className="relative my-5 ">
            <nav className="flex place-content-between px-2 lg:flex lg:place-content-between lg:place-items-center lg:mx-20 lg:mt-3   ">
              <div className="flex place-content-between place-items-center" onClick={()=>{
                setTransition("hidden");
              }}>
                <Link to="/">
                  <img className="h-8 sm:w-auto" src={logo} alt="sitelogo" />
                </Link>
              </div>

              <div className="hidden relative lg:flex justify-evenly place-content-center place-items-center ml-5">
                
                <div className="w-full absolute -top-0 ">
                  <div className={`w-10 h-1 rounded-md bg-bcolor mx-20 ${transition} duration-200	  	 `}></div>
                </div>

                <div
                  className=""
                  onClick={() => {
                    setTransition("-translate-x-14");
                  }}
                >
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

              <div className="" 
                onClick={() => {
                    setTransition("translate-x-10");
                  }}
                  >
                    
                  <div className="dropdown inline-block relative" 
                  onClick={() => {
                    setTransition("translate-x-1");
                  }}>
                    
                    <button className=" py-2 px-4 rounded inline-flex items-center ">
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

                <p className="px-4"
                 onClick={() => {
                    setTransition("translate-x-40");
                  }}>
                  <Link to="/our-team">Our Team</Link>
                </p>

                <div className=""
                onClick={() => {
                    setTransition("translate-x-64");
                  }}>

                  <div className="dropdown inline-block relative " 
                  >
                    <button className=" py-2 px-4 rounded inline-flex items-center">
                      <span className="mr-1 ">Code Vyasa</span>
                    </button>

                    <ul className="dropdown-menu absolute hidden left-2 shadow-lg ">
                      <li className="hover:bg-gray-200 bg-white py-2 hover:font-semibold text-sm px-5">
                        <Link to="/about">About</Link>
                      </li>

                      <li className=" hover:bg-gray-200 bg-white py-2 px-5 hover:font-semibold text-sm  ">
                        <Link to="/blog">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link2 
                  onClick={() => {
                    setTransition("translate-x-96");
                  }}
                  className="bg-teal-50 text-primaryColor font-semibold rounded-md px-4 py-2 cursor-pointer shadow"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  Get in Touch
                </Link2>
              </div>

              <div className="flex lg:hidden pr-3">
                <div
                  className={state ? "hidden lg:hidden  " : " lg:hidden"}
                  onClick={() => {
                    if (!state) {
                      setState(true);
                    }
                  }}
                >
                  <div class="space-y-2">
                    <span class="block w-8 h-0.5 bg-gray-600"></span>
                    <span class="block w-8 h-0.5 bg-gray-600"></span>
                    <span class="block w-5 h-0.5 bg-gray-600"></span>
                  </div>
                </div>

                <div
                  className={state ? " lg:hidden" : "hidden lg:hidden"}
                  onClick={() => {
                    if (state) {
                      setState(false);
                    }
                  }}
                >
                  <img className="w-6" src={close} alt="lines_logo" />
                </div>

                <div
                  className={
                    state
                      ? "mt-12 left-0 w-full absolute lg:hidden bg-white h-96 overflow-scroll shadow-2xl shadow-slate-500 rounded-b-md  "
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
                    className="text-center hover:font-semibold text-xl py-2 mx-16 my-2 border border-bcolor bg-white  rounded-lg"
                  >
                    Services
                  </p>

                  <ul className={`text-center ${servicestate}`}>
                    <li
                      onClick={() => {
                        setState(false);
                      }}
                      className="text-center text-sm py-2 mx-16 my-2 border border-bcolor rounded-lg bg-bcolor text-white"
                    >
                      <Link to="/services/web-dev">Web-based Application</Link>{" "}
                    </li>
                    <li
                      onClick={() => {
                        setState(false);
                      }}
                      className="text-center text-sm py-2 mx-16 my-2 border border-bcolor rounded-lg bg-bcolor text-white"
                    >
                      <Link to="/services/app-dev">Mobile Apps</Link>
                    </li>
                    <li
                      onClick={() => {
                        setState(false);
                      }}
                      className="text-center text-sm py-2 mx-16 my-2 border border-bcolor rounded-lg bg-bcolor text-white"
                    >
                      <Link to="/services/dev-ops">Dev-Ops</Link>
                    </li>
                    <li
                      onClick={() => {
                        setState(false);
                      }}
                      className="text-center text-sm py-2 mx-16 my-2 border border-bcolor rounded-lg bg-bcolor text-white"
                    >
                      <Link to="/services/ui-ux">UI/UX</Link>
                    </li>
                    <li
                      onClick={() => {
                        setState(false);
                      }}
                      className="text-center text-sm py-2 mx-16 my-2 border border-bcolor rounded-lg bg-bcolor text-white"
                    >
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
                    className="text-center text-xl py-2 hover:font-semibold mx-16 my-5 border border-bcolor bg-white rounded-lg "
                  >
                    Engineering
                  </p>

                  <ul className={`text-center ${engstate}`}>
                    <li
                      onClick={() => {
                        setState(false);
                      }}
                      className="text-center text-sm py-2 mx-16 my-2 border border-bcolor rounded-lg bg-bcolor text-white"
                    >
                      <Link to="/engineering/mobile">Mobile</Link>
                    </li>
                    <li
                      onClick={() => {
                        setState(false);
                      }}
                      className="text-center text-sm py-2 mx-16 my-2 border border-bcolor rounded-lg bg-bcolor text-white"
                    >
                      <Link to="/engineering/web">Web</Link>
                    </li>
                    <li
                      onClick={() => {
                        setState(false);
                      }}
                      className="text-center text-sm py-2 mx-16 my-2 border border-bcolor rounded-lg bg-bcolor text-white"
                    >
                      <Link to="/engineering/cloud">Cloud</Link>
                    </li>
                    <li
                      onClick={() => {
                        setState(false);
                      }}
                      className="text-center text-sm py-2 mx-16 my-2 border border-bcolor rounded-lg bg-bcolor text-white"
                    >
                      <Link to="/engineering/ecommerce">Ecommerce</Link>
                    </li>
                  </ul>

                  <p
                    onClick={() => {
                      setState(false);
                    }}
                    className="text-center text-xl hover:font-semibold bg-white py-2 mx-16 my-5 border border-bcolor rounded-lg"
                  >
                    <Link to="/our-team"> Our Team</Link>
                  </p>

                  <p
                    onClick={() => {
                      if (codevyasastate === "hidden") {
                        setCodevyasaState("block");
                      } else {
                        setCodevyasaState("hidden");
                      }
                    }}
                    className="text-center text-xl py-2 mx-16 my-2 border hover:font-semibold border-bcolor bg-white  rounded-lg"
                  >
                    Code Vyasa
                  </p>

                  <ul className={`text-center ${codevyasastate}`}>
                    <li
                      onClick={() => {
                        setState(false);
                      }}
                      className="text-center text-sm py-2 mx-16 my-2 border border-bcolor rounded-lg bg-bcolor text-white"
                    >
                      <Link to="/about">About</Link>
                    </li>
                    <li
                      onClick={() => {
                        setState(false);
                      }}
                      className="text-center text-sm py-2 mx-16 my-2 border border-bcolor rounded-lg bg-bcolor text-white"
                    >
                      <Link to="/blog">Blog</Link>
                    </li>
                  </ul>

                  <p
                    onClick={() => {
                      setState(true);
                    }}
                    className="bg-bcolor text-white hover:font-semibold text-center text-xl py-2 mx-16 my-5 rounded-lg "
                  >
                    <Link2
                      onClick={() => {
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
