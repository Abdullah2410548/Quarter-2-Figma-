import React from "react";
import Image from "next/image";
import { GoCreditCard } from "react-icons/go";
import { LuSprout } from "react-icons/lu";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";

const HomePage = () => {
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-[#007580] text-white p-8 rounded-lg flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">About Us - Comforty</h2>
          <p className="text-lg mb-6">
          At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. 
          </p>
          <button className="px-6 py-3 w-[179px] h-[56px] bg-[#0a838f] text-[#ffffff] hover:bg-black mt-28">
            View More
          </button>
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/Image.png" // Replace with actual image path
            alt="Chair"
            width={619}
            height={478}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          What Makes Our Brand Different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
          <TbTruckDelivery className="w-[24px] h-[24px] mb-2 ml-4" style={{color:'#007580'}}/>
            <h3 className="text-xl font-inter mb-2" style={{fontSize:"20px", color:'#007580', fontWeight:'400px'}}>Next day as standard</h3>
            <p className="text-gray-600 font-inter" style={{fontSize:"16px", color:'#007580', fontWeight:'400px', lineHeight:'24px', font:'inter'}}>
            Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
          <IoIosCheckmarkCircleOutline className="w-[24px] h-[24px] mb-2 ml-2" style={{color:'#007580'}}/>
            <h3 className="text-xl font-inter mb-2"  style={{fontSize:"20px", color:'#007580', fontWeight:'400px'}}>Made by true artisans</h3>
            <p className="text-gray-600 font-inter" style={{fontSize:"16px", color:'#007580', fontWeight:'400px', lineHeight:'24px', font:'inter'}}>
            Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
          <GoCreditCard className="w-[24px] h-[24px] mb-2 ml-2" style={{color:'#007580'}}/>
            <h3 className="text-xl font-inter mb-2"  style={{fontSize:"20px", color:'#007580', fontWeight:'400px'}}>Unbeatable prices</h3>
            <p className="text-gray-600 font-inter" style={{fontSize:"16px", color:'#007580', fontWeight:'400px', lineHeight:'24px', font:'inter'}}>
            For our materials and quality you won’t find better prices anywhere
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
          <LuSprout className="w-[24px] h-[24px] mb-2 " style={{color:'#007580'}}/>
            <h3 className="text-xl font-inter mb-2"  style={{fontSize:"20px",color:'#007580', fontWeight:'400px'}}>Recycled packaging</h3>
            <p className="text-gray-600" style={{fontSize:"16px", color:'#007580', fontWeight:'400px', lineHeight:'24px', font:'inter'}}>
            We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </div>  
     

      <div className="p-8 text-start">
  <h2
    className="font-semibold mb-6 text-[#272343] font-inter"
    style={{
      fontSize: "32px",
      lineHeight: "35.2px",
      fontWeight: "600",
    }}
  >
    Our Popular Products
  </h2>
  <div className="flex flex-wrap lg:flex-nowrap justify-between gap-6">
    {/* Product 1 */}
    <div className="text-start w-full lg:w-[630px]">
      <img
        src="/1.jpg"
        alt="The Poplar smoke sofa"
        className="w-full h-[375px] object-cover rounded-lg"
      />
      <h3
        className="font-inter mt-4 text-[#2A254B]"
        style={{ fontSize: "20px", fontWeight: "400", lineHeight: "28px" }}
      >
        The Poplar suede sofa
      </h3>
      <p
        className="font-inter text-[#2A254B]"
        style={{ fontSize: "18px", fontWeight: "400", lineHeight: "27px" }}
      >
        $499.00
      </p>
    </div>

    {/* Product 2 */}
    <div className="text-start w-full sm:w-[48%] lg:w-[305px]">
      <img
        src="/2.jpg"
        alt="The Dandy chair"
        className="w-full h-[375px] object-cover rounded-lg"
      />
      <h3
        className="font-inter mt-4 text-[#2A254B]"
        style={{ fontSize: "20px", fontWeight: "400", lineHeight: "28px" }}
      >
        The Dandy chair
      </h3>
      <p
        className="font-inter text-[#2A254B]"
        style={{ fontSize: "18px", fontWeight: "400", lineHeight: "27px" }}
      >
        $99.00
      </p>
    </div>

    {/* Product 3 */}
    <div className="text-start w-full sm:w-[48%] lg:w-[305px]">
      <img
        src="/blacknew.jpg"
        alt="The Dandy chair"
        className="w-full h-[375px] object-cover rounded-lg"
      />
      <h3
        className="font-inter mt-4 text-[#2A254B]"
        style={{ fontSize: "20px", fontWeight: "400", lineHeight: "28px" }}
      >
        The Dandy chair
      </h3>
      <p
        className="font-inter text-[#2A254B]"
        style={{ fontSize: "18px", fontWeight: "400", lineHeight: "27px" }}
      >
        $99.00
      </p>
    </div>
  </div>
</div>




       
    </div>
  );
};

export default HomePage;