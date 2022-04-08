import React from "react";
import mainblog from "../../assits/Blog/mainblog.jpg";
// icons
import amp from "../../assits/Blog/blogs-images/amp.jpg";
import vtex from "../../assits/Blog/blogs-images/vtex.jpg";

function Blog() {
  return (
    <div>
      <div className="flex place-content-center place-items-center  ml-5 lg:h-eighty-h  ">
        <div className="flex-col place-content-center place-items-center lg:p-16 lg:mb-10">
          <h1 className="text-xl font-bold sm:text-2xl md:text-4xl lg:text-4xl  ">
            Blog
          </h1>
          <p className="md:mt-5 md:xl lg:text-xl ">
            Here is what brewing at Code Vyasa. Always up <br /> for a
            chat — Technology, Life, Football,
            <br /> The Office…..hit us up at support@codevyasa.com
          </p>
        </div>

        <div className="lg:p-10">
          <img className="p-2" src={mainblog} alt="land-img" />
        </div>
      </div>

      <div className="bg-card p-4 mt-16">
        <div className="text-center px-2 md:px-52 lg:px-64 xl:px-96 ">
          <h1 className="text-4xl font-bold mb-2">Our Blog</h1>
          <p className="">View our latest News</p>
        </div>

        <div className="flex place-content-center p-5 place-items-center flex-wrap mt-10  ">
          <div className="flex flex-wrap place-content-center place-items-center shadow-lg shadow-slate-600 m-5 rounded-lg  ">
            <div className="flex flex-col place-content-center w-96 overflow-hidden bg-white pb-5   rounded-xl ">
              <img src={amp} alt="Mayank-image" />
              <div className="text-white px-4 bottom-10 bg-bcolor relative mt-5 w-fit">
                11 Jul
              </div>
              <div className="px-4 h-60 text-sm">
                <p className="font-semibold ">
                  AMPs— Just another Jargon or Are we late to the Party?
                </p>
                <p className="text-xs text-gray-400 ">Author: Joy Singhal</p>
                <p className="py-2">
                  The concept of AMP Pages has been around for 5 years. And yet,
                  there is not too much evidence of whether it’s worth the
                  effort. In fact, in the first place, there are questions on
                  whether AMP Pages help the cause of the world has moved on
                  from it.
                </p>

                <button className="btn px-4 py-2 mt-2">Read More</button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap place-content-center place-items-center shadow-lg shadow-slate-600 m-5  rounded-lg    ">
            <div className="flex flex-col place-content-center w-96 overflow-hidden bg-white pb-5  rounded-xl  ">
              <img src={vtex} alt="vtx-image" />
              <div className="text-white px-4 bottom-10 bg-bcolor relative mt-5 w-fit">
                26 Jul
              </div>
              <div className="px-4 h-60 text-sm">
                <p className="font-semibold ">VTEX — A Force To Reckon With</p>
                <p className="text-xs text-gray-400 ">Author: Joy Singhal</p>
                <p className="py-2">
                  Walmart, Vans, Coca-Cola, Sony, L´Oréal, Nestlé, Coca-Cola,
                  Pizza Hut, Whirlpool……the list goes on and on. Wait, what is
                  this about? These are companies with a different product
                  offering and have diverse customers across
                </p>

                <button className="btn px-4 py-2 mt-2">Read More</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Blog;
