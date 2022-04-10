import React from "react";
import whitelogo from "../../assits/whitelogo.svg";
import americalogo from "../../assits/americalogo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="w-full bg-fcolor p-10 text-center md:text-left  md:flex md:place-content-between ">
          <div className="flex-col flex md:items-start justify-center md:w-96 md:ml-14 p-2  ">
            <img className="" src={whitelogo} alt="company-logo" />
            <p className="text-white font-thin">
              Code Vyasa is a Product Engineering and Development company that
              helps Early-stage & Mid-Market Product companies across the US,
              Australia & APAC region. In just the 4th year of our journey,
              Shellhatch group (CodeVyasa) has won some of the most prestigious
              awards while driving immense value to our customers & employees.
            </p>
          </div>

          <div className="p-2">
            <div className="text-white font-thin ">
              <h1 className="mb-2 font-semibold">Services</h1>
              <p className="hover:text-bcolor"><Link to="/services/web-dev">Web-based Application</Link></p>
              <p className="hover:text-bcolor"><Link to="/services/app-dev">Mobile Apps</Link></p>
              <p className="hover:text-bcolor"><Link to="/services/dev-ops">Dev-Ops</Link></p>
              <p className="hover:text-bcolor"><Link to="/services/ui-ux">UI/UX</Link></p>
              <p className="hover:text-bcolor"><Link to="/services/shared-cto">Shared CTO</Link></p>
            </div>
          </div>

          <div className="p-2">
            <div className="text-white font-thin  ">
              <h1 className="mb-2 font-semibold">Technologies</h1>
              <p className="hover:text-bcolor"><Link to="/engineering/mobile">Flutter</Link></p>
              <p className="hover:text-bcolor"><Link to="/engineering/mobile">React Native</Link></p>
              <p className="hover:text-bcolor">  <Link to="/engineering/ecommerce">VTEX</Link></p>
              <p className="hover:text-bcolor"> <Link to="/engineering/ecommerce">Shopify</Link></p>
              <p className="hover:text-bcolor"><Link to="/engineering/cloud">Cloud Services</Link></p>
              <p className="hover:text-bcolor"><Link to="/services/dev-ops">DevOps</Link></p>
            </div>
          </div>

          <div className="p-2">
            <div className="text-white font-thin">
              <h1 className="mb-2 font-semibold">Pricing</h1>
              <p className="hover:text-bcolor"><Link to="/Pricing">Project-Based</Link></p>
              <p className="hover:text-bcolor"><Link to="/Pricing">Virtual Team</Link></p>
              <p className="hover:text-bcolor"><Link to="/Pricing">MVP Pack</Link></p>
            </div>
          </div>

          <div className="p-2">
            <div className="text-center text-white font-thin flex-col flex lg:text-left ">
              <h1 className="mb-2 font-semibold">Code Vyasa</h1>
              <p className="hover:text-bcolor">
                <Link to="/about">About us</Link>
              </p>
              <p className="hover:text-bcolor">
                <Link to="/our-team">Our Team</Link>
              </p>
              <p className="my-2 ">
                Florida | New Delhi <br />
                <a className="hover:text-bcolor " href="tel:+1(386)2437944">Call us + 1 (386) 243-7944</a> <br />
                <a className="hover:text-bcolor " href="mailto:example@email.com">support@codevyasa.com</a> 
               
              </p>
              <img
                className="w-16 place-self-center lg:place-self-start "
                src={americalogo}
                alt="americalogo"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
