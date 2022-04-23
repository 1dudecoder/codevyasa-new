import React from "react";
import whitelogo from "../../assits/whitelogo.svg";
import americalogo from "../../assits/americalogo.svg";
import { Link } from "react-router-dom";
import { scroll ,  Link as Link2   } from 'react-scroll';


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

              <Link2 to="Web-based" 
                spy={true}
                smooth={true}
                duration={800}> 
              <p className="hover:text-bcolor"><Link to="/services/web-dev">Web-based Application</Link></p> </Link2>
              <Link2 to="app" 
                spy={true}
                smooth={true}
                duration={800}> 
              <p className="hover:text-bcolor"><Link to="/services/app-dev">Mobile Apps</Link></p> </Link2>
              <Link2 to="Dev" 
                spy={true}
                smooth={true}
                duration={800}> <p className="hover:text-bcolor"><Link to="/services/dev-ops">Dev-Ops</Link></p> </Link2>
                <Link2 to="ui" 
                spy={true}
                smooth={true}
                duration={800}><p className="hover:text-bcolor"><Link to="/services/ui-ux">UI/UX</Link></p></Link2>
              <Link2 to="Shared" 
                spy={true}
                smooth={true}
                duration={800}><p className="hover:text-bcolor"><Link to="/services/shared-cto">Shared CTO</Link></p></Link2>

            </div>
          </div>

          <div className="p-2">
            <div className="text-white font-thin  ">
              <h1 className="mb-2 font-semibold">Technologies</h1>
              <Link2 to="mob" 
                spy={true}
                smooth={true}
                duration={800}><p className="hover:text-bcolor"><Link to="/engineering/mobile">Flutter</Link></p></Link2>
              <Link2 to="mob" 
                spy={true}
                smooth={true}
                duration={800}><p className="hover:text-bcolor"><Link to="/engineering/mobile">React Native</Link></p></Link2>
              <Link2 to="eco" 
                spy={true}
                smooth={true}
                duration={800}><p className="hover:text-bcolor"> <Link to="/engineering/ecommerce">VTEX</Link></p></Link2>
              <Link2 to="eco" 
                spy={true}
                smooth={true}
                duration={800}><p className="hover:text-bcolor"> <Link to="/engineering/ecommerce">Shopify</Link></p></Link2>
              <Link2 to="cloud" 
                spy={true}
                smooth={true}
                duration={800}><p className="hover:text-bcolor"><Link to="/engineering/cloud">Cloud Services</Link></p></Link2>
              <Link2 to="mydev" 
                spy={true}
                smooth={true}
                duration={800}><p className="hover:text-bcolor"><Link to="/services/dev-ops">DevOps</Link></p></Link2>
            </div>
          </div>

          <div className="p-2">
            <div className="text-white font-thin">
              <h1 className="mb-2 font-semibold">Pricing</h1>
              <Link2 to="price" 
                spy={true}
                smooth={true}
                duration={800}><p className="hover:text-bcolor"><Link to="/Pricing">Project-Based</Link></p></Link2>
              <Link2 to="virtual" 
                spy={true}
                smooth={true}
                duration={800}><p className="hover:text-bcolor"><Link to="/Pricing">Virtual Team</Link></p></Link2>
              <Link2 to="mvp" 
                spy={true}
                smooth={true}
                duration={800}><p className="hover:text-bcolor"><Link to="/Pricing">MVP Pack</Link></p></Link2>
            </div>
          </div>

          <div className="p-2">
            <div className="text-center text-white font-thin flex-col flex lg:text-left ">
              <h1 className="mb-2 font-semibold">Code Vyasa</h1>
              <p className="hover:text-bcolor">

                <Link2 to="myabout" 
                spy={true}
                smooth={true}
                duration={800}> <Link to="/about">About</Link></Link2> 

              </p>

              <p className="hover:text-bcolor">
              <Link2 to="ourteam" 
                spy={true}
                smooth={true}
                duration={800}
                offset={-70}
                >
                <Link to="/our-team"> Our Team</Link> </Link2>
              </p>

              <p className="my-2 ">
                Florida | New Delhi <br />
                <a className="hover:text-bcolor " href="tel:+1(386)2437944">Call us + 1 (386) 243-7944</a> <br />
                <a className="hover:text-bcolor " href="mailto:support@codevyasa.com">support@codevyasa.com</a> 
               
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
