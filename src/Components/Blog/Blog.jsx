import React, { useEffect, useState } from "react";
import {  animateScroll as scroll } from "react-scroll";
import mainblog from "../../assits/Blog/mainblog.jpg";
// icons
import amp from "../../assits/Blog/blogs-images/amp.jpg";
import vtex from "../../assits/Blog/blogs-images/vtex.jpg";

import first from "../../assits/Blog/amp-blog-images/first.jpeg";
import sec from "../../assits/Blog/amp-blog-images/sec.jpg";
import third from "../../assits/Blog/amp-blog-images/third.jpeg";

import firstvtex from "../../assits/Blog/vtex-blog-images/firstvtex.jpg";
import secvtex from "../../assits/Blog/vtex-blog-images/secvtex.jpg";
import thirdvtex from "../../assits/Blog/vtex-blog-images/thirdvtex.jpg";
import fourvtex from "../../assits/Blog/vtex-blog-images/fourvtex.jpg";
import fivevtex from "../../assits/Blog/vtex-blog-images/fivevtex.jpg";
import sixvtex from "../../assits/Blog/vtex-blog-images/sixvtex.jpg";
import sevenvtex from "../../assits/Blog/vtex-blog-images/sevenvtex.jpg";
import eightvtex from "../../assits/Blog/vtex-blog-images/eightvtex.jpg";

import { Link, useLocation } from "react-router-dom";
import BookNow from "../Contact/BookNow";

function Blog() {
  let location = useLocation();
  const [myscroll, setMyScroll] = useState(false);


  useEffect(()=>{
    setTimeout(() => {
      document.onscroll = function (event) {
        if (event === undefined) {
          setMyScroll(true);
        }
      };
      if(!myscroll){
        setTimeout(()=>{
          scroll.scrollTo(700); 
        },5000)
      }
    }, 5000);
  },[Mypages])

  function Mypages() {
    if (location.pathname === "/blog/amp-page") {

      useEffect(()=>{
        setTimeout(()=>{
          scroll.scrollTo(700); 
        },500)
      })

      return (
        <>
          <div className="flex flex-col place-content-center place-items-center px-5 md:px-52 lg:px-72 mt-16">
            <h1 className=" font-semibold text-left text-2xl md:text-3xl lg:text-4xl">
              AMP Pages — Just another Jargon or Are we late to the Party?
            </h1>
            <p className="py-2 place-self-start">Joy Singhal - 11 Jul</p>

            <h1 className="text-2xl font-semibold py-2 place-self-start pl-2">
              AMPs— Just another Jargon or Are we late to the Party?
            </h1>
            <p>
              The concept of AMP Pages has been around for 5 years. And yet,
              there is not too much evidence of whether it’s worth the effort.
              In fact, in the first place, there are questions on whether AMP
              Pages help the cause of the world has moved on from it. It’s fair
              to say that AMP (Accelerated Mobile Pages) is a controversial
              topic among web developers. Let’s dive deep into this….
            </p>

            <br />

            <h1 className="text-2xl font-semibold py-2 place-self-start pl-2">
              What Are AMP Pages?
            </h1>
            <br />

            <p>
              Accelerated Mobile Pages (AMP) is an open-source framework created
              to make web pages load faster for mobile devices. While it is
              open-source, it’s always had heavy involvement and support from
              Google. So it’s commonly referred to as Google AMP.
            </p>
            <br />

            <p>
              AMP pages showed up in Google mobile search results back in
              February 2016. So they really are now more than 5 years old. Yes,
              time flies fast & to put things in perspective, 5 years in a
              technology time-frame is quite a lot (the dot-com bubble lasted
              about 2 years between 1998 and 2000; just 2 years).
            </p>

            <br />

            <p>
              Seems like a good-to-have technology (probably, not a must-have)?
              The controversy, however, fueled up when Google prioritized AMP
              pages for mobile search results. Developers were left in a
              difficult position: stand by best practices supporting a
              platform-agnostic Web, or do what’s right for their clients by
              building the most competitive mobile site possible.
            </p>

            <br />

            <p className="place-self-start ">
              Hire Web Developers and build the next-generation web solutions
              for your Business.
            </p>
            <br />
            <img src={first} alt="amp-image" />
            <br />

            <h1 className="text-2xl font-semibold py-2 place-self-start pl-2">
              Why Are AMP Pages Important?
            </h1>
            <br />
            <p>
              Google implemented ‘mobile-first indexing’ back in July 2019 &
              which meant that ‘mobile’ became the starting point of everything
              Google did to assess your website.
            </p>
            <br />

            <p>
              AMP feeds into all this because there are strict design rules for
              AMP pages. Visually, AMPs have a very minimal page layout and all
              sorts of technical rules about what you can and can’t do.
              Everything aimed at keeping things minimal and fast. At first,
              this was far too restrictive and greatly limited functionality.
              However, it has changed a lot in the last 5 years.
            </p>
            <br />
            <h1 className="text-2xl font-semibold py-2 place-self-start pl-2">
              AMPs for Mobile-Friendly Pages?
            </h1>
            <br />
            <p>
              Like I mentioned above, these days websites are often built to be
              mobile-first. That is, they primarily look good on mobile
              devices — then shift and adapt to also look good on larger screens
              too (tablets, laptops, and desktops).
            </p>
            <br />
            <p>
              But earlier, most of the websites were still built to rigid sizes.
              They weren’t ‘mobile responsive’. Either the orientation would go
              for a toss or the contact forms, CTAs wouldn’t show up.
            </p>
            <br />
            <p>
              To fix this meant big design changes to create a more flexible
              design to cater to all screen sizes and devices. Or, you could
              simply add a plugin to let AMP pages get created automatically for
              the mobile audience. While this is not the most optimal solution,
              a lot of web developers took this route as a quick fix.
            </p>
            <br />
            <img src={sec} alt="android-phone" />
            <br />
            <p className="place-self-start">
              The big benefit for AMP has been ‘Google News’ (read it as `the
              big benefit used to be…`)
            </p>
            <br />
            <p>
              To be eligible to appear in the Google News Carousel that appeared
              at the top of news-related searches, a website was required to
              support AMP. That is, only AMP pages could appear (this has
              changed now).
            </p>
            <br />
            <p>
              Clearly, this prominence was hugely important to news and media
              websites as the News Carousel can send huge amounts of traffic to
              your site. This is exactly why AMPs were taken up very strongly by
              the media industry, but largely ignored by everyone else.
            </p>
            <br />
            <h1 className="text-2xl font-semibold py-2 place-self-start pl-2">
              So Are AMP Pages Worth It Now?
            </h1>
            <br />
            <p>
              1. AMP is one way to create fast-loading pages with a good user
              experience. But it’s not the only way. Mainstream (well-built)
              websites can achieve the same thing.
            </p>
            <br />
            <p>
              2. Is AMP beneficial from the SEO point of view? While there can
              be a separate blog for this, I’d try and summarize in a single
              line — If your competitors’ website performs better and delivers
              what your customers want more easily, then Google is going to want
              to send more people there instead. The extra Page Experience has
              NOT been factored by Google as any of the ranking factors.
            </p>
            <br />
            <p>
              3. Starting 17th June 2021 and completing sometime before the end
              of August, AMP will cease to be a factor in mobile site ranking.
              The AMP badge on mobile search results will vanish, and AMP is not
              required to have your site included on Google’s news app.
            </p>
            <br />
            <h1 className="text-2xl font-semibold py-2 place-self-start pl-2">
              Summary
            </h1>
            <br />

            <p>
              If you don’t have AMP pages already, now might NOT be the best
              time to implement them. With the limited knowledge available
              publically, my recommendation would be to put resources that would
              have gone into AMP into improving the website essentials instead.
              By doing so, you give yourself the best chance to succeed. All the
              best…..
            </p>
            <br />

            <p className="place-self-start">
              Hire Web Developers and build the next-generation web solutions
              for your Business.
            </p>
            <br />
            <p className="place-self-start">
              Always up for a chat! Hit me up at joy@codevyasa.com
            </p>
            <br />
            <img className="max-h-sixty-h" src={third} alt="men-image" />
            <br />
          </div>

          <div className="flex place-content-center place-items-center py-10">
            <p className="underline hover:text-bcolor">
              <Link to="/blog">See all posts</Link>
            </p>
            <button className="btn px-2 py-1 mx-5">
              <Link to="/blog/vtex-page">Next</Link>
            </button>
          </div>
        </>
      );
    }

    if (location.pathname === "/blog/vtex-page") {

      useEffect(()=>{
        setTimeout(()=>{
          scroll.scrollTo(700); 
        },500)
      })

      return (
        <>
          <div className="flex flex-col place-content-center place-items-center px-5 md:px-52 lg:px-72 mt-16">
            <h1 className="place-self-start font-semibold text-left text-2xl md:text-3xl lg:text-4xl">
              VTEX — A Force To Reckon With
            </h1>
            <p className="py-2 place-self-start">Joy Singhal - 26 Jun</p>

            <h1 className="text-2xl font-semibold py-2 place-self-start">
              VTEX — A Force To Reckon With
            </h1>
            <br />
            <p>
              Walmart, Vans, Coca-Cola, Sony, L´Oréal, Nestlé, Coca-Cola, Pizza
              Hut, Whirlpool……the list goes on and on. Wait, what is this about?
            </p>
            <br />
            <p>
              These are companies with a different product offering and have
              diverse customers across geographies, age groups, income brackets.
              But do they have anything in common? No, not the billion-dollar
              valuation. We are talking about Technology.
            </p>
            <br />
            <p>
              Taking a business online is no new phenomenon yet many fail to
              make the transition smooth and profitable as much as they
              anticipated. These could be due to a variety of reasons:
              fast-paced operations, market penetration, UI/UX, payment methods,
              customer grievances, etc. But there is something that is even more
              fundamental — the robustness of the underlying technology on which
              its E-commerce store operates.
            </p>
            <br />
            <p className="place-self-start">
              And here comes VTEX — just another player in the crowded market or
              is it a force to reckon with?
            </p>
            <br />
            <img src={firstvtex} alt="first-image" />
            <br />
            <p>
              E-commerce is a massive market all over the world & especially in
              the established markets such as the US, UK, India, China where the
              population is so much that every e-commerce store can have its
              particular set of audience. Talking about the popularity of
              e-commerce, we know that it has grown so much that the retail
              business, more specifically the offline business, is hurting.
              Online commerce now accounts for 14% of all retail sales, and its
              growth has led to a rise in the fortunes of startups that build
              tools to enable businesses to sell online. Enough context built,
              let’s see what (& who) is VTEX…
            </p>
            <br />
            <p>
              VTEX is a commerce and marketplace solution provider that helps
              brands, retailers, manufacturers, and others sell more, operate
              more efficiently, scale seamlessly and deliver remarkable customer
              experiences across all their channels and customer touchpoints.
            </p>
            <br />
            <p>
              On a more techno-functional front, VTEX is a SaaS-based
              multi-tenant single-instance platform that has auto-scaling
              elastic capabilities to react to market changes & customer demands
              in real-time. By developing your eCommerce App (whether for a B2C,
              B2B, or physical store ecosystem) using VTEX, you can increase
              conversions, grow revenue, reduce costs and risks and reach on a
              global scale.
            </p>
            <br />
            <p className="place-self-start">
              Hire VTEX Developers and build the next-generation Digital
              commerce solution for your Business.
            </p>
            <br />
            <p>
              Over 3,000 customers in 40 countries use VTEX to accelerate and
              transform their commerce, including Sony, L´Oréal, Nestlé,
              Coca-Cola, Pizza Hut, Walmart, and Whirlpool. But before we move
              to evaluate the value-add of VTEX to your Business, let’s see if
              VTEX as a Business (itself) has made it big: A leading start-up
              news agency reported last year the meteoric adoption of VTEX in
              Latin America. As a software provider, VTEX has 3 things that make
              it a force to reckon with:
            </p>
            <br />
            <p className="place-self-start">
              A strong team culture <br /> A best-in-class product <br /> A
              bunch of entrepreneurs with a profitability-mindset <br />
            </p>
            <br />
            <p>
              E-commerce is a business of economies of scale, and VTEX is a
              precise case in point. While the company processes some $2.5
              billion in transactions annually, it makes a relatively small
              return on that — $69 million, to be exact.
            </p>
            <br />
            <p>
              A look at the Gartner’s Magic Quadrant would tell you that it’s
              well on its way to becoming a `leader` in the Digital Commerce
              space.
            </p>
            <br />
            <img className="max-h-sixty-h" src={secvtex} alt="secend-image" />

            <br />

            <p className="place-self-start">
              VTEX has a clean and easy-to-use product that is evident from
              snapshots below:
            </p>
            <img className="max-h-sixty-h" src={thirdvtex} alt="third-image" />
            <br />
            <img className="max-h-sixty-h" src={fourvtex} alt="fourth-image" />

            <br />
            <p className="place-self-start">
              Back to the question that matters most to you….should you evaluate
              VTEX & for existing Business owners, does it make sense to bear
              the pain of platform migration? Well, let’s look at some
              competitive benchmarking:
              <br />
              <br />
              Most of the readers would have heard (if not used) Shopify manage
              their online store. And if you haven’t, just know that it has a
              Market Cap of $180 BN (that should settle the debate).
              <br />
              <br />A look at the current market penetration in the below 2
              charts should suggest that Shopify is way ahead of VTEX…..
            </p>
            <br />
            <img className="max-h-sixty-h" src={fivevtex} alt="five-image" />
            <img className="max-h-sixty-h" src={sixvtex} alt="sixth-image" />
            <br />
            <p>
              But, look at the below table ……. All it will tell you is that VTEX
              is breathing down the neck of Shopify with clear customer
              satisfaction (look at the last row):
            </p>
            <br />
            <br />
            <img className="max-h-sixty-h" src={sevenvtex} alt="seven-image" />
            <br />
            <p>
              Rounding this up, if your Business is on Shopify, it’s not a
              herculean task to hire Shopify developers. Hundreds of companies
              do so & so does our organization. The monthly developer’s rates
              vary with experience but it starts around 2500 USD/month. However,
              getting a VTEX developer is a mammoth task.
            </p>
            <br />
            <p>
              At the time of writing this blog, there are no companies in India
              that do VTEX development. I’ve m spent a significant time in the
              US and Singapore looking for VTEX developers myself but there were
              no companies (hardly, any) that offered VTEX developers. Precisely
              what led us to invest 8 months of our training program to come up
              with the VTEX army. Front end development, backend, and/or
              Full-stack — CodeVyasa has 25+ VTEX developers that can support
              your migration and custom development around VTEX. Do give us a
              shout at Code Vyasa or write to me at joy.codevyasa.com if you
              have any queries/feedback regarding VTEX, Shopify, or any other
              Digital Commerce platforms.
            </p>
            <br />
            <p className="place-self-start">
              Always up for a chat — Technology, Life, Football, The
              Office…..hit me up at joy@codevyasa.com
            </p>
            <br />
            <img className="max-h-sixty-h" src={eightvtex} alt="eight-image" />
            <br />
            <div className="flex place-content-center place-items-center py-10">
              <p className="underline hover:text-bcolor">
                <Link to="/blog">See all posts</Link>
              </p>
              <button className="btn px-2 py-1 mx-5">
                <Link to="/blog/amp-page">Next</Link>
              </button>
            </div>
          </div>
        </>
      );
    }

    if (location.pathname === "/blog") {
      return (
        <>
          <div className="bg-card p-4 mt-16" id="amp-page">
            <div className="text-center px-2 md:px-52 lg:px-64 xl:px-96 ">
              <h1 className="text-4xl font-bold mb-2">Our Blog</h1>
              <p className="">View our latest News</p>
            </div>

            <div className="flex place-content-center place-items-center flex-wrap mt-10   ">
              <Link to="/blog/amp-page">
                <div className="flex flex-wrap place-content-center place-items-center shadow-lg shadow-slate-600 m-5 rounded-lg   ">
                  <div className="flex flex-col place-content-center md:w-96 overflow-hidden bg-white pb-5   rounded-xl ">
                    <img src={amp} alt="Mayank-image" />
                    <div className="text-white px-4 bottom-10 bg-bcolor relative mt-5 w-fit">
                      11 Jul
                    </div>
                    <div className="px-4 h-60 text-sm">
                      <p className="font-semibold ">
                        AMPs— Just another Jargon or Are we late to the Party?
                      </p>
                      <p className="text-xs text-gray-400 ">
                        Author: Joy Singhal
                      </p>
                      <p className="py-2">
                        The concept of AMP Pages has been around for 5 years.
                        And yet, there is not too much evidence of whether it’s
                        worth the effort. In fact, in the first place, there are
                        questions on whether AMP Pages help the cause of the
                        world has moved on from it.
                      </p>

                      <button className="btn px-4 py-2 mt-2">
                        <Link to="/blog/amp-page">Read More</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/blog/vtex-page">
                <div className="flex flex-wrap place-content-center place-items-center shadow-lg shadow-slate-600 m-5 rounded-lg    ">
                  <div className="flex flex-col place-content-center md:w-96 overflow-hidden bg-white pb-5  rounded-xl  ">
                    <img src={vtex} alt="vtx-image" />
                    <div className="text-white px-4 bottom-10 bg-bcolor relative mt-5 w-fit">
                      26 Jul
                    </div>
                    <div className="px-4 h-60 text-sm">
                      <p className="font-semibold ">
                        VTEX — A Force To Reckon With
                      </p>
                      <p className="text-xs text-gray-400 ">
                        Author: Joy Singhal
                      </p>
                      <p className="py-2">
                        Walmart, Vans, Coca-Cola, Sony, L´Oréal, Nestlé,
                        Coca-Cola, Pizza Hut, Whirlpool……the list goes on and
                        on. Wait, what is this about? These are companies with a
                        different product offering and have diverse customers
                        across
                      </p>

                      <button className="btn px-4 py-2 mt-2">Read More</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </>
      );
    }
  }

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

      <Mypages />

      <div id="contact">
        <BookNow />
      </div>
    </div>
  );
}

export default Blog;
