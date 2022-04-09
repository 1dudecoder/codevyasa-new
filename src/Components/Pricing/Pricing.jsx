import React from "react";

import tickicon from "../../assits/services/sharedcto/icons/tickicon.svg";
import mainprice from "../../assits/pricing/mainprice.jpg";
import BookNow from "../Contact/BookNow";

function Pricing() {
  return (
    <>
      <div>
        <div className="flex place-content-center place-items-center  ml-5 lg:h-eighty-h ">
          <div className="flex-col place-content-center place-items-center lg:p-16 lg:mb-10">
            <h1 className="text-xl font-bold sm:text-2xl md:text-4xl lg:text-5xl md:whitespace-nowrap lg:pr-24 ">
              Pricing
            </h1>
          </div>

          <div className="lg:p-10">
            <img className="p-2" src={mainprice} alt="land-img" />
          </div>
        </div>

        <div className="flex-col flex place-content-center place-items-center px-2 lg:mt-10 ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center my-4">
            Project-Based Pricing
          </h1>

          <p className="text-center font-semibold p-2 lg:px-60">
            From operational point of view,Project-based refers to a setup where
            the customer has a fairly-clear idea and strategy about the project
            and Code Vyasa would work with the the client to:
          </p>

          <div className="md:flex text-sm md:text-base place-content-between px-5 ">
            <div className="flex place-self-center p-2 text-start ">
              Being a customer-focused company, we ensure that our Pricing is as
              clear <br /> and transparent as possible. We follow the industry
              best <br />
              practices and always commit to deliver a predictable high quality
              & on-time <br /> result that you expect from your development
              partner.
            </div>
            <div className="flex-col flex place-items-start place-content-start md:p-5 ">
              <div className="flex place-items-center place-content-start p-2">
                <img className="pr-2" src={tickicon} alt="tickicon" />
                <p>Detailed Discovery Phase that nurtures the Idea</p>
              </div>
              <div className="flex place-items-center place-content-start p-2">
                <img className="pr-2" src={tickicon} alt="tickicon" />
                <p>Start Spec'ing the details</p>
              </div>
              <div className="flex place-items-center place-content-start p-2">
                <img className="pr-2" src={tickicon} alt="tickicon" />
                <p>Working Prototype</p>
              </div>
              <div className="flex place-items-center place-content-start p-2">
                <img className="pr-2" src={tickicon} alt="tickicon" />
                <p>Overall project timelines and cost (for the main product)</p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold py-5 lg:py-14">
          Our Pricing is a function of 2 things
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-1 place-content-center place-items-center xl:px-60 ">
          <div className="p-5 m-2 md:p-10 border-2 shadow-2xl w-screen  sm:w-sixty-h h-fit md:h-1/2 flex place-items-center place-content-center text-bcolor rounded-md font-semibold text-sm text-center ">
            <p>
              Skill-set requested by the customer - eg: a Python developer, in
              all likelihood, would be priced higher as compared to a CSS
              developer
            </p>
          </div>

          <div className="p-5 m-2 md:p-10 border-2 shadow-2xl w-screen sm:w-sixty-h h-fit md:h-1/2 flex place-items-center place-content-center text-bcolor rounded-md font-semibold text-sm text-center  ">
            <p>
              Experience level - goes without saying, an engineer with 7 yrs of
              experience would be costlier as compared to a 3+ yrs developer
            </p>
          </div>
        </div>

        <p className="text-center mt-4 p-2 lg:px-96 ">
          In a project-based model, our clients leverage our wide range of
          offerings such as Developers, Business Analyst, UI/UX designer, QA,
          Solutions Architect etc.
        </p>

        <div class="md:px-32 py-8 w-full ">
          <div class="shadow overflow-auto md:overflow-hidden rounded border-b border-gray-200">
            <table class="table-auto md:min-w-full bg-white">
              <thead class="bg-bcolor text-white">
                <tr>
                  <th class="w-1/3 text-center py-3 px-4 uppercase  font-semibold text-sm">
                    Coe
                  </th>
                  <th class="w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm">
                    Role
                  </th>
                  <th class="w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm">
                    Skills
                  </th>
                  <th class="text-center py-3 px-4 uppercase font-semibold text-sm">
                    Years
                  </th>
                  <th class="text-center py-3 px-4 uppercase font-semibold text-sm">
                    Hourly Rate (USD)
                  </th>
                  <th class="text-center py-3 px-4 uppercase font-semibold text-sm">
                    *Monthly Rate (USD)
                  </th>
                  <th class="text-center py-3 px-4 uppercase font-semibold text-sm">
                    **Blended Hourly Rate (USd)
                  </th>
                </tr>
              </thead>
              <tbody class="text-gray-700">
                <tr>
                  <td rowSpan={"7"} class="w-1/3 text-center py-3 px-4">
                    Full Stack Develperment
                  </td>
                  <td rowSpan={"7"} class="w-1/3 text-center py-3 px-4">
                    .Net, PHP, Java, Angular, UI/UX, Mean Stack, Paython
                  </td>
                  <td class="text-center py-3 px-4">
                    Technical Architect/Project Manager
                  </td>
                  <td class="text-center py-3 px-4">6 to 8</td>
                  <td class="text-center py-3 px-4">20</td>
                  <td class="text-center py-3 px-4">4160</td>
                  <td rowSpan={"7"} class="text-center py-3 px-4">
                    20
                  </td>
                </tr>

                <tr class="bg-gray-100">
                  <td class="w-1/3 text-center py-3 px-4">Business Analyst</td>
                  <td class="w-1/3 text-center py-3 px-4">3 to 6</td>
                  <td class="w-1/3 text-center py-3 px-4">20</td>
                  <td class="w-1/3 text-center py-3 px-4">3200</td>
                </tr>

                <tr class="">
                  <td class="w-1/3 text-center py-3 px-4">Lead Developer</td>
                  <td class="w-1/3 text-center py-3 px-4">4 to 6</td>
                  <td class="w-1/3 text-center py-3 px-4">22</td>
                  <td class="w-1/3 text-center py-3 px-4">3520</td>
                </tr>

                <tr class="bg-gray-100">
                  <td class="w-1/3 text-center py-3 px-4">Sr. Developer</td>
                  <td class="w-1/3 text-center py-3 px-4">2 to 4</td>
                  <td class="w-1/3 text-center py-3 px-4">20</td>
                  <td class="w-1/3 text-center py-3 px-4">3200</td>
                </tr>

                <tr class="">
                  <td class="w-1/3 text-center py-3 px-4">Developer</td>
                  <td class="w-1/3 text-center py-3 px-4">1 to 2</td>
                  <td class="w-1/3 text-center py-3 px-4">19</td>
                  <td class="w-1/3 text-center py-3 px-4">3040</td>
                </tr>

                <tr class="bg-gray-100">
                  <td class="w-1/3 text-center py-3 px-4">QA</td>
                  <td class="w-1/3 text-center py-3 px-4">2 to 4</td>
                  <td class="w-1/3 text-center py-3 px-4">16</td>
                  <td class="w-1/3 text-center py-3 px-4">2560</td>
                </tr>

                <tr class="">
                  <td class="w-1/3 text-center py-3 px-4">Product Leader</td>
                  <td class="w-1/3 text-center py-3 px-4">6 to 8</td>
                  <td class="w-1/3 text-center py-3 px-4">25</td>
                  <td class="w-1/3 text-center py-3 px-4">4200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* text card */}
        <div className="bg-card py-5">
          <div className="flex-col flex place-content-center place-items-center px-2 lg:mt-10 ">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center my-4">
              Virtual-Team Pricing
            </h1>

            <p className="text-center p-2 lg:px-60">
              Virtual Team refers to an operating model between Clients & Code
              Vyasa wherein
            </p>

            <div className="md:flex text-sm md:text-base place-content-between px-5 ">
              <div className="flex place-self-center p-2 text-start  ">
                Being a customer-focused company, we ensure that our Pricing is
                as clear <br /> and transparent as possible. In Virtual Team
                setup, you get the exact same <br /> throughput as would get
                from an in-house <br /> developer at 40% lesser pricing.
                <br />
                <br />
                All you need to do is tell us the skill-set that is needed and
                you pay <br /> us every month instead of any upfront cost.
              </div>
              <div className="flex-col flex place-items-start place-content-start md:p-5 ">
                <div className="flex place-items-center place-content-start p-2">
                  <img className="pr-2" src={tickicon} alt="tickicon" />
                  <p>Dedicated-developers assigned to your team</p>
                </div>
                <div className="flex place-items-center place-content-start p-2">
                  <img className="pr-2" src={tickicon} alt="tickicon" />
                  <p>100% transparency on the throughput</p>
                </div>
                <div className="flex place-items-center place-content-start p-2">
                  <img className="pr-2" src={tickicon} alt="tickicon" />
                  <p>Minimum of 70% common working hours</p>
                </div>
                <div className="flex place-items-center place-content-start p-2">
                  <img className="pr-2" src={tickicon} alt="tickicon" />
                  <p>5X faster team scale-up</p>
                </div>
                <div className="flex place-items-center place-content-start p-2">
                  <img className="pr-2" src={tickicon} alt="tickicon" />
                  <p>40% cost-savings</p>
                </div>

                <div className="flex place-items-center place-content-start p-2">
                  <img className="pr-2" src={tickicon} alt="tickicon" />
                  <p>No Upfront cost</p>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold py-5 lg:py-14">
            Our Pricing is a function of 2 things
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-1 place-content-center place-items-center xl:px-60 ">
            <div className="p-5 m-2 md:p-10 border-2 shadow-2xl w-screen  sm:w-sixty-h h-fit md:h-1/2 flex place-items-center place-content-center text-bcolor rounded-md font-semibold text-sm text-center bg-white ">
              <p>
                Skill-set requested by the customer - eg: a Python developer, in
                all likelihood, would be priced higher as compared to a CSS
                developer
              </p>
            </div>

            <div className="p-5 m-2 md:p-10 border-2 shadow-2xl w-screen sm:w-sixty-h h-fit md:h-1/2 flex place-items-center place-content-center text-bcolor rounded-md font-semibold text-sm text-center bg-white ">
              <p>
                Experience level - goes without saying, an engineer with 7 yrs
                of experience would be costlier as compared to a 3+ yrs
                developer
              </p>
            </div>
          </div>
        </div>

        {/* text card */}
        <div className=" py-5">
          <div className="flex-col flex place-content-center place-items-center px-2 lg:mt-10 ">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center my-4">
              MVP Pack
            </h1>

            <p className="text-center p-2 lg:px-60">
              We are a start-up and we empathize with early-stage Founders
              trying to test their Product Idea.
            </p>

            <div className="md:flex text-sm md:text-base place-content-between px-5 ">
              <div className="flex place-self-center p-2 text-start ">
                Having worked with hundreds of early stage-founders, we realize
                that Time and Money <br /> both are a constraint for any company
                at the starting of the journey. At the same time, <br /> the
                Quality of the Output (Prototype/MVP) can never be compromised.
                <br /> Keeping this in mind, we offer a special package that
                includes:
              </div>
              <div className="flex-col flex place-items-start place-content-start md:p-5 ">
                <div className="flex place-items-center place-content-start p-2">
                  <img className="pr-2" src={tickicon} alt="tickicon" />
                  <p>Detailed Discovery Phase that nurtures the Idea</p>
                </div>
                <div className="flex place-items-center place-content-start p-2">
                  <img className="pr-2" src={tickicon} alt="tickicon" />
                  <p>Start Spec'ing the details</p>
                </div>
                <div className="flex place-items-center place-content-start p-2">
                  <img className="pr-2" src={tickicon} alt="tickicon" />
                  <p>Working Prototype</p>
                </div>
                <div className="flex place-items-center place-content-start p-2">
                  <img className="pr-2" src={tickicon} alt="tickicon" />
                  <p>
                    Overall project timelines and cost (for the main product)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold py-5 lg:py-14">
            Cost and Timelines
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-1 place-content-center place-items-center xl:px-60 ">
            <div className="p-5 m-2 md:p-10 border-2 shadow-2xl w-screen  sm:w-80 h-fit md:h-1/2 flex place-items-center place-content-center text-bcolor font-semibold rounded-md text-sm text-center bg-white ">
              <p>2-3 weeks</p>
            </div>

            <div className="p-5 m-2 md:p-10 border-2 shadow-2xl w-screen sm:w-80  h-fit md:h-1/2 flex place-items-center place-content-center text-bcolor font-semibold rounded-md text-sm text-center bg-white ">
              <p>
                Inclusions: Discovery, Specs, Product Requirement Document
                (PRD), Working Prototype
              </p>
            </div>

            <div className="p-5 m-2 md:p-10 border-2 shadow-2xl w-screen sm:w-80  h-fit md:h-1/2 flex place-items-center place-content-center text-bcolor font-semibold rounded-md text-sm text-center bg-white ">
              <p>Cost: starts at 4000 USD</p>
            </div>
          </div>
        </div>

        <p className="text-center mt-4 p-2 lg:px-96  text-sm ">
          We have helped 30+ founders build a prototype for less than 6000 USD
          that has eventually helped them raise funds. More than 90% of them
          came back to us after raising funds and we co-built the actual product
          for them.
        </p>
      </div>

      <div id="contact">
        <BookNow />
      </div>
    </>
  );
}

export default Pricing;
