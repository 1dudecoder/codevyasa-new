import React from 'react'
import whitelogo from "../../assits/whitelogo.svg"
import americalogo from "../../assits/americalogo.svg"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <footer>
            <div className='w-full bg-fcolor p-10 text-center md:text-left  md:flex md:place-content-between '>

                <div className='flex-col flex md:items-start justify-center md:w-96 md:ml-14 p-2  '>
                    <img className='' src={whitelogo} alt="company-logo" />
                    <p className='text-white font-thin'>
                    Code Vyasa is a Product Engineering and Development company that helps Early-stage & Mid-Market Product companies across the US, Australia & APAC region. In just the 4th year of our journey, Shellhatch group (CodeVyasa) has won some of the most prestigious awards while driving immense value to our customers & employees.
                    </p>
                </div>
                
                <div className='p-2'>
                    <div className='text-white font-thin'>
                        <h1 className='mb-2 font-semibold'>Services</h1>
                        <p>Web-Based Application</p>
                        <p>Mobile Apps</p>
                        <p>DevOps</p>
                        <p>UI/UX</p>
                        <p>Shared CTO</p>
                    </div>
                </div>

                <div className='p-2'>
                    <div className='text-white font-thin'>
                        <h1 className='mb-2 font-semibold'>Technologies</h1>
                        <p>Flutter</p>
                        <p>React Native</p>
                        <p>VTEX</p>
                        <p>Shopify</p>
                        <p>Cloud Services</p>
                        <p>DevOps</p>
                    </div>
                </div>

                <div className='p-2'>
                    <div className='text-white font-thin'>
                        <h1 className='mb-2 font-semibold'>Pricing</h1>
                        <p>Project-Based</p>
                        <p>Virtual Team</p>
                        <p>MVP Pack</p>
                    </div>
                </div>

                <div className='p-2'>
                    <div className='text-center text-white font-thin flex-col flex lg:text-left '>
                        <h1 className='mb-2 font-semibold'>Code Vyasa</h1>
                        <p><Link to="/about">About us</Link></p>
                        <p><Link to="/our-team">Our Team</Link></p>
                        <p className='my-2'>Florida | New Delhi <br/>
                        Call us + 1 (386) 243-7944 <br/>
                        support@codevyasa.com</p>
                        <img className='w-16 place-self-center lg:place-self-start ' src={americalogo} alt="americalogo" />
                    </div>
                </div>

            </div>
        </footer>
    </>
  )
}

export default Footer