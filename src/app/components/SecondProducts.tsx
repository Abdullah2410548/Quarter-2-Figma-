import React from 'react';
import Image from "next/image";

const SecondProducts = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden mt-16 ml-8">
        <div className="container px-5 py-2 mx-auto mt-16">
          <div className="flex flex-wrap">
            {/* Left side image */}
            <div className="lg:w-[50%] w-full">
              <Image
                alt="ecommerce"
                className="lg:h-[447px] h-[340px] object-cover object-center rounded"
                src="/13.jpg"
                width={600}
                height={447}
              />
            </div>
    
            {/* Rotating text */}
            <div className="text-center absolute top-648 transform left-[-200px] rotate-[-90deg] mt-48 text-[#000000] text-2xl ml-2 " style={{height:'52px', alignItems:"center", fontSize:'32px'}}>
                   Explore new and popular styles
                  </div>
            {/* Right side images: 2 upar aur 2 neeche */}
            <div className="lg:w-[50%] w-full lg:pl-6 mt-4 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  alt="ecommerce"
                  className="w-full h-[215px] object-cover object-center rounded"
                  src="/04.jpg"
                  width={300}
                  height={215}
                />
                <Image
                  alt="ecommerce"
                  className="w-full h-[215px] object-cover object-center rounded"
                  src="/Image Block.png"
                  width={300}
                  height={215}
                />
                <Image
                  alt="ecommerce"
                  className="w-full h-[215px] object-cover object-center rounded"
                  src="/06.jpg"
                  width={300}
                  height={215}
                />
                <Image
                  alt="ecommerce"
                  className="w-full h-[215px] object-cover object-center rounded"
                  src="/Image Block.png"
                  width={300}
                  height={215}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondProducts;


  








