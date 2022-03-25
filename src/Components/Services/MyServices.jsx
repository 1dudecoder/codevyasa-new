import React from "react";
import { useLocation } from "react-router-dom";
import BookNow from "../Contact/BookNow";
import NotFound from "../../NotFound";
import main from "../../assits/services/webdev/main.jpg"
import first from "../../assits/services/webdev/first.jpg"
import sec from "../../assits/services/webdev/sec.jpg"

function MyServices() {
  let location = useLocation();

  const ShowingData = () => {
    if (location.pathname === "/services/web-dev") {
      let mydata = [
        {
          title: "Have An Idea ?",
          msg: "Bring your idea to life using our Web development services",
          img: main,
        },
        {
          lilmsg: "Get Quality-Rich",
          title: "Web Development Services",
          msg: "We offer top-of-the-line web development services using emerging technologies for various industries.",
        },
      ];

      let services = [
        {
          name: "Expert Web Developers/Coders",
          msg: "CodeVyasa is Silicon Valley's top-rated custom web app development company with over 3+ years of experience building world-class B2B & B2C applications. Our clients range from startups to enterprises and we have worked with a variety of industry verticals including healthcare, adtech, eLearning, data analysis, Fintech & eCommerce.",
          img: first,
        },
        {
          name: "Web Solution Form E-Commerce Portals,CMS, ERP Solutions To Chatbots",
          msg: "If you desire to experience the best of web development to ensure growth-centric digital transformation for your business, our full-stack web application development services are perfect for you. From e-commerce portals, CMS, ERP solutions to chatbots, custom apps and more - our web development services include all major robust web solutions.",
          img: sec,
        },
      ];

      return (
        <>
          <div className="flex place-content-center place-items-center  ml-5 lg:h-eighty-h ">
            <div className="flex-col place-content-center place-items-center lg:p-16 lg:mb-10">
              <h1 className="text-xl  font-semibold sm:text-2xl md:text-4xl lg:text-5xl ">
                {mydata[0].title}
              </h1>
              <p className="md:mt-5 md:xl lg:text-xl ">{mydata[0].msg}</p>
            </div>

            <div className="lg:p-10">
              <img className="p-2" src={mydata[0].img} alt="land-img" />
            </div>
          </div>

          <div className="px-10 md:px-0 text-center my-14 ">
            <p className="text-lg">{mydata[1].lilmsg}</p>
            <h1 className="text-2xl sm:text-5xl font-bold pb-2">
              {mydata[1].title}
            </h1>
            <p className="">{mydata[1].msg}</p>
          </div>

          {services.map((item, index) => {
            if (index / 2 === 0) {
              return (
                <>
                  <div className=" flex justify-center items-center sm:px-10 my-16">
                    <div className="p-2  flex flex-1 flex-col  ">
                      <h1 className="text-xl sm:text-3xl font-bold my-2 ">
                        {item.name}
                      </h1>
                      <p className="text-xs sm:text-sm">{item.msg}</p>
                    </div>

                    <div className="">
                      <img className="" src={item.img} alt="expert-image" />
                    </div>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  <div className="flex flex-row-reverse justify-center items-center sm:px-10 my-16">
                    <div className="p-2 flex flex-1 flex-col ">
                      <h1 className="text-xl sm:text-3xl font-bold my-2 ">
                        {item.name}
                      </h1>
                      <p className="text-xs sm:text-sm">{item.msg}</p>
                    </div>

                    <div className="">
                      <img className="" src={item.img} alt="expert-image" />
                    </div>
                  </div>
                </>
              );
            }
          })}
        </>
      );
    } else {
      return <NotFound />;
    }
  };

  return (
    <>
      <ShowingData />
      <BookNow />
    </>
  );
}

export default MyServices;
