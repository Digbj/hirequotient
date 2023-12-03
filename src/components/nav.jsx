import React from "react";
import Marquee from "react-fast-marquee";
import Ava from "../assets/avar.png/";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const viewP = (id) => {
    const text = document.getElementById(`text-${id}`);
    const heading = document.getElementById(`h-${id}`);
    if (text) {
      text.hidden = !text.hidden;
      heading.style.color = text.hidden ? "black" : "#8247ff";
    }
  };

  return (
    <div className="bg-gradient-to-b from-orange-50 to-blue-100 ">
      <div className="flex flex-row  justify-between p-3  ">
        <div>
          <img
            className="h-12"
            src="https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png"
            alt="logo"
          />
        </div>
        <div className="flex flex-row items-center gap-5 nav">
         <a href="#feature"><li className="list-none font-semibold hover:text-violet-500 hover:cursor-pointer duration-300">
            Features
          </li></a> 
          <a href="#FAQ"><li className="marker:text-gray-400 font-semibold hover:text-violet-500 hover:cursor-pointer duration-300">
            FAQ
          </li></a>
          <a href="#price"><li className="marker:text-gray-400 font-semibold hover:text-violet-500 hover:cursor-pointer duration-300">
            Pricing
          </li></a>
          <a href="#test"><li className="marker:text-gray-400 font-semibold hover:text-violet-500 hover:cursor-pointer duration-300">
            Testimonials
          </li></a>
          
        <a href="https://templatesunit.lemonsqueezy.com/checkout" target="_blank"> <button className="hover:border m-1 p-3 rounded-2xl font-sans text-lg font-medium">
            Buy Template
          </button></a> 
        </div>
      </div>
      <hr />

      <section className="flex flex-col items-center justify-center mt-8">
        <p className="border rounded-lg font-sans font-medium text-violet-500 p-1 ">
          👋WELCOME TO MANAGE WISE!
        </p>
        <h1 className="font-sans text-7xl text-center m-6 font-bold">
          Empower your business with
        </h1>
        <h1 className="font-sans text-7xl text-center font-bold">
          <span className="text-orange-500">Strategic</span> insights
        </h1>
        <p className="font-sans text-gray-400 m-5 text-center font-semibold text-lg">
          Powerful management platform designed to streamline your business
          <br /> operations, boost productivity, and drive success
        </p>
        <div className="m-3 p-3 flex items-center gap-8">
        <a href="https://templatesunit.lemonsqueezy.com/checkout" target="_blank"><button className="border  bg-violet-500 h-16 w-48 text-lg font-bold text-white rounded-3xl hover:ring-8 ring-violet-200 duration-300">
            Get Started
          </button></a>  
          <a href="https://www.youtube.com/" target="_blank"> <button className="border  h-16 w-48 text-lg font-bold rounded-3xl hover:border-2">
            Whatch Demo
          </button></a>
         
        </div>
        <img
          className="h-[70%] w-[70%] mt-8 hover:scale-105 duration-300 rounded-3xl"
          src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048"
        />
      </section>

      <section
        id="feature"
        className="flex flex-col items-center justify-center bg-gradient-to-b m-12 from-gray-100 to-white mb-0"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="border rounded-lg font-sans font-medium text-violet-500 mt-20 p-1 ">
            🔥PREMIER FEATURES
          </p>
          <h3 className="font-sans text-5xl text-center font-bold">
            Discover our product's{" "}
            <span className="text-orange-500">Capabilities</span>
          </h3>
          <p className="font-sans text-gray-400 m-5 text-center font-semibold text-lg">
            Don't settle for mediocrity - embrace the future of management
            <br />
            with Manage Wise.
          </p>
          <div className="bg-[#ededfa] ml-[20%] mr-[20%] h-80 rounded-2xl">
            <div className="border rounded-xl bg-white h-14 w-14 m-6 flex items-center justify-center text-3xl">
              ⭐
            </div>
            <p className="text-center font-semibold text-4xl">
              Boost productivity and streamline workflow with us. Enjoy our
              intuitive interface and robust features.
            </p>
          </div>
          <div className="flex flex-col ml-[20%] mr-[20%]  rounded-2xl border  mt-8">
            <img src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024" />
            <h3 className="font-sans text-2xl font-bold ml-5 mb-1">
              Smart Task Management
            </h3>
            <p className="font-sans text-gray-400 m-5 text-left font-semibold text-l ml-5 mt-0">
              Say goodbye to chaos with our smart task management system
            </p>
          </div>

          <div className="flex flex-col w-[60%] rounded-2xl border  mt-8">
            <img src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512" />
            <h3 className="font-sans text-2xl font-bold ml-5 mb-1">
              Flexible Scheduling
            </h3>
            <p className="font-sans text-gray-400 m-5 text-left font-semibold text-l ml-5 mt-0">
              Stay productive with our flexible scheduling system
            </p>
          </div>

          <div className="flex flex-col w-[60%] rounded-2xl border  mt-8">
            <img src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512" />
            <h3 className="font-sans text-2xl font-bold ml-5 mb-1">
              Easy Communication
            </h3>
            <p className="font-sans text-gray-400 m-5 text-left font-semibold text-l ml-5 mt-0">
              Collaborate seamlessly with your team in real-time
            </p>
          </div>

          <div className="flex flex-col w-[60%] rounded-2xl border  mt-8 mb-8">
            <img src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512" />
            <h3 className="font-sans text-2xl font-bold ml-5 mb-1">
              Analytics
            </h3>
            <p className="font-sans text-gray-400 m-5 text-left font-semibold text-l ml-5 mt-0">
              Gain valuable insights with our advanced analytics feature
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col p-10 bg-black w-[100%] mt-0 gap-3  pb-0">
        <p className="bg-white p-2 w-36 rounded-xl font-semibold ml-5 text-violet-500">
          🤩AND MORE...
        </p>
        <p className="font-sans text-gray-400 m-5 text-left font-semibold text-l ml-5 mt-0 text-4xl">
          Explore an array of features that elevate your
          <span className="text-orange-500">Productivity</span> to new heights
        </p>
        <p className="font-sans text-gray-500 m-5 text-left font-semibold text-xl ml-5 mt-0 w-[40%]">
          Discover the tools that will revolutionize the way you manage and
          optimize your operations
        </p>
        <div className="flex flex-col justify-center items-center">
          <div className="p-10 flex flex-col justify-center items-center mt-10 bg-slate-900 w-[80%]  rounded-3xl">
            <div className="h-16 w-16 bg-violet-600 rounded-xl"></div>
            <p className="font-bold text-white text-2xl mt-3">
              Cross-Platform Compatibility
            </p>
            <p className="font-sans text-gray-500 m-5 text-center font-semibold">
              Enjoy the flexibility of cross-platform compatibility. Our product
              works seamlessly across desktop, web, and mobile devices, allowing
              you to work from your preferred device.
            </p>
          </div>
          <div className="p-10 flex flex-col justify-center items-center mt-10 bg-slate-900 w-[80%]  rounded-3xl">
            <div className="h-16 w-16 bg-violet-600 rounded-xl"></div>
            <p className="font-bold text-white text-2xl mt-3">
              Stay Informed with Essential Notifications
            </p>
            <p className="font-sans text-gray-500 m-5 text-center font-semibold">
              Automate support from first customer contact to closing the
              ticket. Drastically improve time to resolution.Automate support
              from first customer contact to closing the ticket.
            </p>
          </div>

          <div className="p-10 flex flex-col justify-center items-center mt-10 bg-slate-900 w-[80%]  rounded-3xl">
            <div className="h-16 w-16 bg-violet-600 rounded-xl"></div>
            <p className="font-bold text-white text-2xl mt-3">
              Secure Data Encryption at all times
            </p>
            <p className="font-sans text-gray-500 m-5 text-center font-semibold">
              Trust in our robust data encryption to keep your sensitive
              information safe and secure. Rest easy knowing your data is
              protected at all times.
            </p>
          </div>
          <div className="m-10 flex flex-wrap gap-5">
            <div className="h-20 w-20 p-3 bg-slate-600 flex items-center justify-center rounded-2xl">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1024px-Gmail_icon_%282020%29.svg.png" />
            </div>
            <div className="h-20 w-20 p-3 bg-slate-600 flex items-center justify-center rounded-2xl">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png" />
            </div>
            <div className="h-20 w-20 p-3 bg-slate-600 flex items-center justify-center rounded-2xl">
              <img src="https://www.vectorlogo.zone/logos/dropbox/dropbox-icon.svg" />
            </div>
            <div className="h-20 w-20 p-3 bg-slate-600 flex items-center justify-center rounded-2xl">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/600px-Figma-logo.svg.png" />
            </div>
            <div className="h-20 w-20 p-3 bg-slate-600 flex items-center justify-center rounded-2xl">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/150px-Notion-logo.svg.png" />
            </div>
            <div className="h-20 w-20 p-3 bg-slate-600 flex items-center justify-center rounded-2xl">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/155px-Wikipedia-logo-v2.svg.png?20111003033239" />
            </div>
            <div className="h-20 w-20 p-3 bg-slate-600 flex items-center justify-center rounded-2xl">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png" />
            </div>
            <div className="h-20 w-20 p-3 bg-slate-600 flex items-center justify-center rounded-2xl">
              <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" />
            </div>
            <div className="h-20 w-20 p-3 bg-slate-600 flex items-center justify-center rounded-2xl">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/900px-Octicons-mark-github.svg.png" />
            </div>
            <div className="h-20 w-20 p-3 bg-slate-600 flex items-center justify-center rounded-2xl">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg/768px-YouTube_play_button_icon_%282013%E2%80%932017%29.svg.png?20190606141903" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center justify-center w-[50%] gap-5">
              <p className="border rounded-lg font-sans font-medium text-violet-500 mt-20 p-1 bg-white ">
                🛠 INTEGRATIONS
              </p>
              <h3 className="font-sans text-3xl text-center font-bold text-white">
                Enable <span className="text-orange-500">integration</span> with
                other popular tools and platforms
              </h3>
              <p className="font-sans text-gray-400 m-5 text-center font-semibold text-lg">
                Seamlessly connect and amplify your workflow by enabling
                integration with a diverse array of widely-used tools and
                platforms.
              </p>
              <img
                className="mb-0"
                src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="FAQ" className="flex flex-col p-14 mt-0 gap-3  pb-0">
        <p className="bg-white p-2 w-20 rounded-xl font-semibold ml-5 text-violet-500">
          🙋‍♀️ FAQ
        </p>
        <p className="font-sans text-black m-5 text-left font-semibold text-l ml-5 mt-0 text-4xl">
          Need
          <br />
          <span className="text-orange-500">Answers?</span>
        </p>
        <p className="font-sans text-gray-500 m-5 text-left font-semibold text-xl ml-5 mt-0 w-[40%]">
          Check out our most commonly asked questions below to find the
          information you need.
        </p>
        <div className="flex flex-col items-center justify-center w-[100%] gap-10">
          <div
            className=" bg-slate-300 p-7 rounded-lg w-[100%] duration-300 cursor-pointer "
            onClick={() => viewP(1)}
          >
            <h1
              id="h-1"
              className="font-sans font-extrabold text-2xl ml-5 mb-5 "
            >
              What is Manage Wise and what does it offer?
            </h1>
            <p
              id="text-1"
              className="font-sans text-gray-700 m-5 text-left font-semibold text-xl ml-5 mt-0"
            >
              Manage Wise is a comprehensive management platform designed to
              streamline your business operations, enhance productivity, and
              drive success. It offers a range of features including task
              management, scheduling, communication tools, analytics, and more.
            </p>
          </div>
          <div
            className="bg-slate-300 p-7 rounded-lg w-[100%] duration-300 cursor-pointer "
            onClick={() => viewP(2)}
          >
            <h1
              id="h-2"
              className="font-sans font-extrabold text-2xl ml-5 mb-5"
            >
              Is Manage Wise suitable for small businesses and larger
              enterprises alike?
            </h1>
            <p
              id="text-2"
              className="font-sans text-gray-700 m-5 text-left font-semibold text-xl ml-5 mt-0"
            >
              Yes, Manage Wise is designed to cater to the needs of both small
              businesses and larger enterprises. Its scalable features and
              customizable options make it versatile for various business sizes.
            </p>
          </div>
          <div
            className="bg-slate-300 p-7 rounded-lg w-[100%] duration-300 cursor-pointer "
            onClick={() => viewP(3)}
          >
            <h1
              id="h-3"
              className="font-sans font-extrabold text-2xl ml-5 mb-5"
            >
              Can I access Manage Wise from different devices and platforms?
            </h1>
            <p
              id="text-3"
              className="font-sans text-gray-700 m-5 text-left font-semibold text-xl ml-5 mt-0"
            >
              Yes, Manage Wise offers cross-platform compatibility, allowing you
              to access and use the platform seamlessly on desktops, web
              browsers, and mobile devices.
            </p>
          </div>
          <div
            className="bg-slate-300 p-7 rounded-lg w-[100%] duration-300 cursor-pointer "
            onClick={() => viewP(4)}
          >
            <h1
              id="h-4"
              className="font-sans font-extrabold text-2xl ml-5 mb-5"
            >
              What kind of support options do you offer to users?
            </h1>
            <p
              id="text-4"
              className="font-sans text-gray-700 m-5 text-left font-semibold text-xl ml-5 mt-0"
            >
              We provide responsive customer support via chat and email to
              assist you with any inquiries, issues, or guidance you may need
              while using Manage Wise.
            </p>
          </div>
          <div
            className="bg-slate-300 p-7 rounded-lg w-[100%] duration-300 cursor-pointer "
            onClick={() => viewP(5)}
          >
            <h1
              id="h-5"
              className="font-sans font-extrabold text-2xl ml-5 mb-5"
            >
              How secure is the data stored within Manage Wise?
            </h1>
            <p
              id="text-5"
              className="font-sans text-gray-700 m-5 text-left font-semibold text-xl ml-5 mt-0 "
            >
              Your data's security is a top priority. Manage Wise employs robust
              data encryption and follows industry best practices to ensure your
              sensitive information is safe and protected.
            </p>
          </div>
        </div>
      </section>

      <div id="price" className="flex flex-col items-center justify-center mt-10">
        <p className="border rounded-lg font-sans font-medium text-violet-500 p-1 ">
          💲PRICING
        </p>
        <p className="font-sans text-black m-5 text-left font-semibold text-l ml-5 mt-0 text-4xl">
          Select your ideal <span className="text-orange-500">Pricing</span>{" "}
          plan
        </p>
        <p className="font-sans text-gray-400 m-5 text-center font-semibold text-lg w-[40%]">
          At Manage Wise, we believe in providing you with pricing plans that
          adapt to your unique needs.
        </p>
        <div className="flex flex-col m-10 bg-orange-100 w-1/2 rounded-3xl p-10">
          <p className="font-sans font-bold bg-white text-violet-400 w-14 m-8 text-center h-8 p-1 rounded-lg">
            FREE
          </p>
          <div className="flex flex-row ml-8 item-center">
            <p className="font-bold text-5xl">$0</p>{" "}
            <p className="mt-6 font-sans">/month</p>
          </div>
          <div className="flex flex-col gap-2 ml-14 w-1/2 text-neutral-700 mt-5">
            <p className="font-bold text-neutral-500">
              Access to all basic features
            </p>
            <p className="font-bold text-neutral-500">
              Reporting and analytics
            </p>
            <p className="font-bold text-neutral-500">
              Up to 5 individual users
            </p>
            <p className="font-bold text-neutral-500">Chat and email support</p>
          </div>
          <div className="mt-6 ml-5">
           <a href="https://templatesunit.lemonsqueezy.com/checkout" target="_blank"><button className="p-4 m-0 border font-sans text-lg font-semibold bg-white rounded-xl">
              Get Started
            </button></a> 
          </div>
        </div>

        <div className="flex flex-col m-10 bg-black w-1/2 rounded-3xl p-10">
          <p className="font-sans font-bold bg-white text-orange-400 w-24 m-8 text-center h-8 p-1 rounded-lg">
            STANDARD
          </p>
          <div className="flex flex-row ml-8 item-center">
            <p className="font-bold text-5xl text-white">$25</p>{" "}
            <p className="mt-6 font-sans text-white">/month</p>
          </div>
          <div className="flex flex-col gap-2 ml-14 w-1/2 text-neutral-700 mt-5">
            <p className="font-bold text-neutral-500">
              Access to all basic features
            </p>
            <p className="font-bold text-neutral-500">
              Reporting and analytics
            </p>
            <p className="font-bold text-neutral-500">
              Up to 5 individual users
            </p>
            <p className="font-bold text-neutral-500">Chat and email support</p>
          </div>
          <div className="mt-6 ml-5">
           <a href="https://templatesunit.lemonsqueezy.com/checkout" target="_blank"><button className="p-4 m-0 border font-sans text-lg font-semibold bg-violet-300 rounded-xl">
              Get Started
            </button></a> 
          </div>
        </div>

        <div className="flex flex-col m-10 bg-violet-400 w-1/2 rounded-3xl p-10">
          <p className="font-sans font-bold bg-white text-orange-300 w-24 m-8 text-center h-8 p-1 rounded-lg">
            BUSINESS
          </p>
          <div className="flex flex-row ml-8 item-center">
            <p className="font-bold text-5xl text-black">$25</p>{" "}
            <p className="mt-6 font-sans text-black">/month</p>
          </div>
          <div className="flex flex-col gap-2 ml-14 w-1/2 text-neutral-700 mt-5">
            <p className="font-bold text-neutral-500">
              Access to all basic features
            </p>
            <p className="font-bold text-neutral-500">
              Reporting and analytics
            </p>
            <p className="font-bold text-neutral-500">
              Up to 5 individual users
            </p>
            <p className="font-bold text-neutral-500">Chat and email support</p>
          </div>
          <div className="mt-6 ml-5">
           <a href="https://templatesunit.lemonsqueezy.com/checkout" target="_blank"><button className="p-4 m-0 border font-sans text-lg font-semibold bg-white rounded-xl">
              Get Started
            </button></a> 
          </div>
        </div>
      </div>

      <section id="test" className="flex flex-col">
        <div className="flex flex-col gap-5 ml-7 p-7 mt-10">
          <p className="bg-white p-2 w-40 rounded-xl font-semibold ml-5 text-violet-500">
            🧡TESTIMONIALS
          </p>
          <p className="font-sans text-black mb-0 m-5 text-left font-semibold text-l ml-5 mt-0 text-4xl">
            Hear from our
            <span className="text-orange-500"> Satisfied</span> clients
          </p>
          <p className="font-sans text-gray-600 m-5 text-left mt-0 font-semibold text-lg">
            Discover why our clients love working with us. Read their
            testimonials <br /> and learn how we has helped businesses.
          </p>
        </div>

        <div className=" flex flex-row gap-5 items-center justify-around">
          <div className="w-[20%] flex flex-col gap-2 border-black">
            <p className="font-sans text-lg font-medium">
              "Manage Wise transformed our team's productivity. The intuitive
              interface and powerful features have made a significant impact on
              our daily operations"
            </p>
            <div className="flex flex-row gap-3 items-center">
              <div className="h-20 w-20 bg-lime-400 rounded-full"></div>
              <div>
                <p className="font-sans text-lg font-semibold">Emily</p>
                <p className="font-sans text-sm font-semibold text-slate-600">
                  Art Director
                </p>
              </div>
            </div>
          </div>
          <div className="w-[20%] flex flex-col gap-2 ">
            <p className="font-sans text-lg font-medium">
              "Manage Wise transformed our team's productivity. The intuitive
              interface and powerful features have made a significant impact on
              our daily operations"
            </p>
            <div className="flex flex-row gap-3 items-center">
              <div className="h-20 w-20 bg-lime-400 rounded-full"></div>
              <div>
                <p className="font-sans text-lg font-semibold">Fasal</p>
                <p className="font-sans text-sm font-semibold text-slate-600">
                  Content Creator
                </p>
              </div>
            </div>
          </div>

          <div className="w-[20%] flex flex-col gap-2">
            <p className="font-sans text-lg font-medium">
              "Manage Wise transformed our team's productivity. The intuitive
              interface and powerful features have made a significant impact on
              our daily operations"
            </p>
            <div className="flex flex-row gap-3 items-center">
              <div className="h-20 w-20 bg-lime-400 rounded-full"></div>
              <div>
                <p className="font-sans text-lg font-semibold">Utkarsh</p>
                <p className="font-sans text-sm font-semibold text-slate-600">
                  Manager
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10 items-center justify-center bg-slate-50 m-20 rounded-2xl">
          <p className="border rounded-lg font-sans font-medium text-violet-500 p-1 mt-10">
            👋DON'T MISS OUT
          </p>
          <p className="font-sans text-black m-5 text-left font-semibold text-l ml-5 mt-0 text-4xl">
            Unleash your
            <span className="text-orange-500">Potential</span> with us
          </p>
          <p className="font-sans text-gray-400 m-5 text-center font-semibold text-lg">
            Join our community of ambitious individuals and organizations eager{" "}
            <br />
            to make a difference.
          </p>
          <a href="https://templatesunit.lemonsqueezy.com/checkout" target="_blank"><button className="border  bg-violet-500 h-16 w-48 text-lg font-bold text-white rounded-3xl hover:ring-8 ring-violet-200 duration-300">
            Try Out Now
          </button></a>
          

          <div className="p-3 bg-slate-50 mt-9 rounded-2xl">
            <p className="font-sans text-2xl font-semibold">
              <span className="font-bold text-violet-500"> 200+</span>Happy
              Users
            </p>
          </div>
          <div className="w-1/2 opacity-60">
            <img src={Ava} />
          </div>
        </div>
      </section>
      <div className="flex flex-row items-center justify-between m-10">
        <div>
          <img
            className="h-14"
            src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"
          />
        </div>
        <div className="flex flex-col gap-2">
          <a href="#feature">
            {" "}
            <p className="font-semibold hover:cursor-pointer">Features</p>
          </a>
          <a href="#FAQ">
            <p className="font-semibold hover:cursor-pointer">FAQ</p>
          </a>
          <a href="#price"><p className="font-semibold hover:cursor-pointer">Pricing</p></a>
         <a href="#test"><p className="font-semibold hover:cursor-pointer">Testimonials</p></a> 
        </div>
      </div>
      <hr />
      <footer>
        <div className="flex flex-row items-center justify-between m-10 mb-0 p-5">
          <p className="font-semibold">© 2022 ManageWise, Inc.</p>
          <div className="flex flex-row gap-5">
            <a href="https://www.instagram.com/" target="_blank">
              {" "}
              <img
                className="h-8 w-8"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png?20210403190622"
                alt="log"
              />
            </a>
            <a href="https://twitter.com/i/flow/login" target="_blank">
              {" "}
              <img
                className="h-8 w-8"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/768px-Logo_of_Twitter.svg.png?20220821125553"
              />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <img
                className="h-8 w-8"
                src="https://www.svgrepo.com/show/54425/linkedin.svg"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Header;
