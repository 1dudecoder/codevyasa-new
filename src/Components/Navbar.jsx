import React, { useState } from 'react'
import logo from '../assits/logo.svg'
import lines from "../assits/lines.svg"
import multi from "../assits/multi.svg"
import { Link } from 'react-router-dom'


function Navbar() {

  const [state,setState] = useState(false)

  return (
    <>
      <header className='relative my-5'>
        <nav className='flex place-content-around lg:flex lg:place-content-between lg:place-items-center lg:mx-20 lg:mt-3   '>

          <div className='flex place-content-between place-items-center' >
            <Link to="/" > 
            <img src={logo} alt="sitelogo" />
            </Link>
          </div>

          <div className='hidden lg:flex justify-evenly place-content-center place-items-center ml-5'>
            <Link className='px-4' to="/services/web-dev">Services</Link>
            <p className='px-4'><Link className='px-4' to="/engineering/mobile">Engineering</Link></p>
            <p className='px-4'><Link to="/Pricing"> Pricing</Link></p>
            <p className='px-4'>Code Vyasa</p>
            <p className='btn px-4 py-2'>Get in Touch</p>
          </div>

          <div className='flex lg:hidden'>

            <div className={state ? "hidden lg:hidden" : ' lg:hidden' } onClick={()=>{
              if(!state){
                setState(true)
              }
              console.log("false hogya")
            }}>
                <img className='w-10' src={lines} alt="lines_logo" />
            </div>

            <div className={state ? " lg:hidden" : 'hidden lg:hidden' } onClick={()=>{
              if(state){
                setState(false)
              }
              console.log("true hogya")

            }}>
                <img className='w-10' src={multi} alt="lines_logo" />
            </div>

            <div className={state ? "mt-14 left-0 w-full absolute lg:hidden bg-white" : 'hidden lg:hidden' } >
            <p className='text-center text-2xl py-2 mx-10 my-5 border border-bcolor rounded-lg'>
              <Link to="/services/web-dev"> SERVICES</Link>
              </p>
            <p className='text-center text-2xl py-2 mx-10 my-5 border  border-bcolor rounded-lg'><Link to="/engineering/mobile"> Engineering</Link></p>
            <p className='text-center text-2xl py-2 mx-10 my-5 border border-bcolor rounded-lg'><Link to="/Pricing">Pricing</Link></p>
            <p className='text-center text-2xl py-2 mx-10 my-5 border border-bcolor rounded-lg'>Code Vyasa</p>
            <p className='bg-bcolor text-white text-center text-2xl py-2 mx-10 my-5 rounded-lg '>Get in Touch </p>

            </div>

          </div>

        </nav>
      </header>
    </>
  )
}

export default Navbar