import React from "react";
import heroimg from "../assets/Web designe/Saly-19.png";
import img1 from "../assets/Web designe/Saly-25.png";
import img2 from "../assets/Web designe/Saly-26.png";
import img3 from "../assets/Web designe/Saly-43.png";
import img4 from "../assets/Web designe/Saly-44.png";
import img5 from "../assets/Web designe/balanced.png";
import img6 from "../assets/Web designe/barcode.png";

const Home = () => {
  const color = "FF00B8  0038FF";
  return (
    <div className="  relative  ">
      <div className=" lg:flex-row flex-grow my-12 lg:mx-24  flex flex-col items-center justify-center  ">
        {/* <div className="absolute  top-[-300px] h-[900px] w-1/3 h-1/2 [filter:blur(300px)] rounded-[50%] bg-custom-pink z-[3] "></div> */}
        <div className=" relative  lg:w-3/5 lg:items-start z-10 mx-12 flex flex-col items-center">
          <h1 className=" lg:text-5xl lg:text-left text-3xl text-center font-bold mb-5 text-[#222E56]  ">
            Fast service, better performance high quality
          </h1>
          <p className="lg:text-lg  lg:text-left font-bold  text-center text-[#222E56]">
            If you are looking for high performance and fast service with good
            quality and reasonable prices you will find it here. Just subscribe
          </p>
          <button className="px-8 py-6 text-white font-bold bg-[#8359e3] mt-8 rounded-full">
            Get Started
          </button>
        </div>
        <div className=" ">
          <img className=" " src={heroimg} />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col flex-grow justify-between items-center mx-12 lg:my-12 lg:mx-24 gap-24">
        <div>
          <h1 className="lg:text-5xl lg:text-justify text-center text-4xl text-[#222E56] font-bold my-8">
            Track anywhere, anytime.
          </h1>
          <p className="text-[#222E56] lg:text-justify font-bold text-center">
            We are always there for you and your requests
          </p>
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <div
            className="shadow-blue-200 border-none shadow-lg relative xl:h-full  w-full bg-blue-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100
"
          >
            <img className="relative top-4 right-8 " src={img1} />
          </div>
          <div
            className="shadow-blue-200 border-none shadow-lg relative h-full w-full bg-blue-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100
"
          >
            <img className="relative top-4 right-8 " src={img2} />
          </div>
          <div
            className="shadow-blue-200 border-none shadow-lg relative h-full w-full bg-blue-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100
"
          >
            <img className="relative top-4 right-8 " src={img3} />
          </div>
          <div
            className="shadow-blue-200 border-none shadow-lg relative h-full w-full bg-blue-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100
"
          >
            <img className="relative top-4 right-8 " src={img4} />
          </div>
        </div>
        <div className="grid grid-rows-2 place-items-center gap-2">
          <div className="flex gap-4 xl:gap-8">
            <img src={img5} className="w-20 h-20" />
            <div>
              <h2 className="text-[#222E56] font-bold">Our Well Balanced</h2>
              <p className="text-[#222E56] ">
                Goal is the one we recommend for most people. However, if you
                have specific dietary requirements.
              </p>
            </div>
          </div>
          <div className="flex gap-4 xl:gap-8">
            <img src={img6} className="w-20 h-20" />
            <div>
              <h2 className="text-[#222E56] font-bold">Our Well Balanced</h2>
              <p className="text-[#222E56] ">
                Goal is the one we recommend for most people. However, if you
                have specific dietary requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
