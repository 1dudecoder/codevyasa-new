import React from "react";

function BookNow() {
  return (
    <div>
      <div className="px-14 text-center md:text-left  md:flex justify-between place-items-center bg-zinc-100 mt-8 ">
        <div className="text-start my-14 mx-2 ">
          <p className="text-xs font-semibold pt-10">
            Get In Touch With Us Today!
          </p>
          <h1 className="text-3xl font-semibold py-2 text-bcolor ">
            Need Our Services? <br />
            Book Your Appointment
          </h1>
          <p className="text-xs font-semibold ">
            We hate spam as much as you do. And we never send unnecessary emails
          </p>

          <div className="mt-4">
            <h1 className="italic font-semibold">CALL US FOR SUPPORT</h1>
            <h1 className="text-3xl font-bold">+ 1 (386) 243-7944</h1>
            <p>support@codevyasa.com</p>
          </div>
        </div>

        <div className=" md:p-5 md:w-1/2">
          <div className=" w-full md:flex lg:flex   md:pt-5 ">
            <input
              placeholder="Your Name"
              className="w-full h-10 m-2 rounded-md border border-slate-300 outline-none p-2  hover:border-bcolor hover:border-2 "
              type="text"
            />
            <input
              placeholder="Work Email"
              className="w-full h-10 m-2 rounded-md border border-slate-300 outline-none p-2 hover:border-bcolor hover:border-2 "
              type="text"
            />
          </div>

          <div className=" w-full md:flex lg:flex   ">
            <input
              placeholder="Phone"
              className="w-full h-10 m-2 rounded-md border border-slate-300 outline-none p-2 hover:border-bcolor hover:border-2 "
              type="text"
            />
            <input
              placeholder="Designation"
              className="w-full h-10 m-2 rounded-md border border-slate-300 outline-none p-2 hover:border-bcolor hover:border-2 "
              type="text"
            />
          </div>

          <div className="md:flex lg:flex justify-start px-2 ">
            <textarea
              placeholder="Specify your requirements"
              className="w-full h-32 rounded-md border border-slate-300 outline-none p-2 hover:border-bcolor hover:border-2 "
            ></textarea>
          </div>

          <div className="mt-5 float:none md:float-right  pb-10 ">
            <button className="btn w-full px-20 py-2">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
