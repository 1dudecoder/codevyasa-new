import React, { useState } from "react";

function BookNow() {

  const [isError, setIsError] = useState(false);
  const [emailerror,setEmailError] = useState(false);

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [designation,setDesignation] = useState("");
  const [msg,setMsg] = useState("");

  function handlechange(e) {
    if(isNaN(e.target.value) === true || e.target.value.length > 12 || e.target.value.length < 6){
      setTimeout(()=>{
        setIsError(true)
        setPhone("")
      },1000)
    }else{
      setTimeout(()=>{
        setIsError(false)
        setPhone(e.target.value)
      },1000)
    }
  }

  const handleEmail = (e) => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if(regex.test(e.target.value) === false && e.target.value.length > 1){
      setTimeout(()=>{
        setEmailError(true)
        setEmail("")
      },1000)

    }else{
      setTimeout(()=>{
        setEmailError(false)
        setEmail(e.target.value)
      },1000)
    }
  }

  const handlesubmit = (e) => {
    
    if(name !== "" && email !== "" && phone !== "" && designation !== "" && msg  != ""){
      let data = {
        name,
        email,
        phone,
        designation,
        msg
      }

      console.log(data)

    }
  }


  return (
    <div>
      <div className="px-5 sm:px-14 text-center md:text-left  md:flex justify-between place-items-center bg-zinc-100 mt-8 ">
        <div className="text-start my-5 sm:my-14 mx-2 ">
          
          <p className="text-xs font-semibold pt-10">
            Get In Touch With Us Today!
          </p>

          <h1 className="text-xl sm:text-3xl font-semibold py-2 text-bcolor ">
            Need Our Services? <br />
            Book Your Appointment
          </h1>

          <p className="text-xs font-semibold ">
            We hate spam as much as you do. And we never send unnecessary emails
          </p>

          <div className="mt-4">
            <h1 className="text-sm sm:text-base italic font-semibold">CALL US FOR SUPPORT</h1>
            <a className="hover:text-bcolor " href="tel:+1(386)2437944"><h1 className="text-3xl font-bold">+ 1 (386) 243-7944</h1></a>
            <a className="hover:text-bcolor " href="mailto:support@codevyasa.com"><p>support@codevyasa.com</p></a>
          </div>
        </div>

        <div className=" md:p-5 md:w-1/2">
          <div className=" w-full md:flex lg:flex   md:pt-5 ">
            <input
              placeholder="Full Name"
              className="w-full h-10 my-2 sm:m-2 rounded-md border border-slate-300 outline-none p-2  hover:border-bcolor hover:border-2 "
              type="text"
              onChange={(e)=>{
                setName(e.target.value)
              }}
            />
            <input
              placeholder="Work Email"
              className="w-full h-10 my-2 sm:m-2 rounded-md border border-slate-300 outline-none p-2 hover:border-bcolor hover:border-2 "
              type="text"
              onChange={handleEmail}
            />
            {emailerror === true ? <p className="text-left text-red-600 sm:hidden">Please Enter Valid Email</p> : <p></p> }

          </div>


          {emailerror === true ? <p className="text-center ml-44 text-red-600 hidden sm:block">Please Enter Valid Email</p> : <p></p> }


          <div className=" w-full md:flex lg:flex   ">
            <input
              placeholder="Phone"
              className="w-full h-10 my-2 sm:m-2 rounded-md border border-slate-300 outline-none p-2 hover:border-bcolor hover:border-2 "
              type="text"
              onChange={handlechange}
            />
            
            {isError === true ? <p className="text-left text-red-600 sm:hidden">Please Enter Valid Number</p> : <p></p> }

            <input
              placeholder="Designation"
              className="w-full h-10 my-2 sm:m-2 rounded-md border border-slate-300 outline-none p-2 hover:border-bcolor hover:border-2 "
              type="text"
              onChange={(e)=>{
                setDesignation(e.target.value)
              }}
              />
          </div>
          
          {isError === true ? <p className="text-left text-red-600 hidden sm:block m-1 ml-2">Please Enter Valid Number</p> : <p></p> }


          <div className="md:flex lg:flex justify-start sm:pl-2 ">
            <textarea
              placeholder="Specify your requirements"
              className="w-full h-32 rounded-md border border-slate-300 outline-none p-2 hover:border-bcolor hover:border-2 "
              onChange={(e)=>{
                setMsg(e.target.value)
              }}
            ></textarea>

          </div>

          <div className="mt-5 float:none md:float-right  pb-10 ">
            <button onClick={handlesubmit} className="btn w-full px-20 py-2">Send</button>
          </div>




        </div>

      </div>
    </div>
  );
}

export default BookNow;
