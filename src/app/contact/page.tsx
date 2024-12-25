
import { Poppins } from 'next/font/google';
import React from 'react';
import { FaClock, FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const ContactPage = () => {
    return (
       <div>
              
                
            

            {/* Intro Section */}
            <div className="flex flex-col justify-center text-center md:w-[50%] mx-auto px-5 gap-3 mt-10">
                <h1 className="text-[36px] font-semibold text-black">Get In Touch With Us</h1>
                <p className="text-[#9F9F9F] text-[16px]">
                    For more information about our product & services, please feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
                </p>
            </div>

            {/* Contact Form and Info */}
            <div className="lg:w-[1058px] mt-10 mx-auto flex md:flex-row flex-col justify-between gap-12 md:gap-0 pb-10">
                {/* Left Info Section */}
                <div className="flex flex-col gap-10">
                    {/* Address */}
                    <div className="flex w-[300px] gap-5 ml-2">
                        <IoLocationSharp className="text-[80px]" />
                        <div className="mt-5 flex flex-col gap-2">
                            <h1 className="text-[24px] font-medium">Address</h1>
                            <p className="text-[16px]">
                                236 5th SE Avenue, New York NY10000, United States
                            </p>
                        </div>
                    </div>
                    {/* Phone */}
                    <div className="flex w-[300px] gap-5 ml-4">
                        <FaPhoneAlt className="text-[40px]" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[24px] font-medium">Phone</h1>
                            <p className="text-[16px]">
                                Mobile: +(84) 546-6789 <br />
                                Hotline: +(84) 456-6789
                            </p>
                        </div>
                    </div>
                    {/* Working Time */}
                    <div className="flex w-[300px] gap-5 ml-4">
                        <FaClock className="text-[40px]" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[24px] font-medium">Working Time</h1>
                            <p className="text-[16px]">
                                Monday-Friday: 9:00 - 22:00 <br />
                                Saturday-Sunday: 9:00 - 21:00
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Form Section */}
                <div>
                    <form className="md:w-[530px] w-[90vw] md:h-[741px] h-auto flex flex-col justify-between">
                        {/* Name */}
                        <div className="mb-4 mr-16">
                            <label htmlFor="name" className="block text-[16px] font-medium text-black mb-3">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Abc"
                                className="w-full p-5 border border-gray-400 rounded-[10px] focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4 mr-16">
                            <label htmlFor="email" className="block text-[16px] font-medium text-black mb-3">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Abc@def.com"
                                className="w-full p-5 border border-gray-400 rounded-[10px] focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>

                        {/* Subject */}
                        <div className="mb-4 mr-16">
                            <label htmlFor="subject" className="block text-[16px] font-medium text-black mb-3">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="This is an optional"
                                className="w-full p-5 border border-gray-400 rounded-[10px] focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>

                        {/* Message */}
                        <div className="mb-4 mr-16">
                            <label htmlFor="message" className="block text-[16px] font-medium text-black mb-3">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={3}
                                placeholder="Hi! I’d like to ask about..."
                                className="w-full p-5 border border-gray-400 rounded-[10px] focus:outline-none focus:ring focus:ring-blue-200"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="md:w-fit w-full bg-[#029FAE] text-white text-[16px] font-medium py-[12px] px-[44px] rounded-[5px] focus:outline-none focus:ring focus:ring-blue-200 hover:bg-[#000000]"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="w-full max-w-[1320px] h-auto  sm:h-[270px] bg-[#F4F4F4] flex flex-col sm:flex-row justify-around items-center mx-auto px-8 py-4">
  {/* High Quality */}
  <div className="flex items-center mb-6 sm:mb-0">
    <img
      className="w-[52.77px] h-[60px] mr-4"
      src="f1.png"
      alt="High Quality"
    />
    <div>
      <h1 className="text-[#242424] font-poppins text-[25px] leading-[37.5px] font-semibold">
        High Quality
      </h1>
      <p className="text-[#898989] font-poppins text-[20px] leading-[30px] font-medium">
        crafted from top materials
      </p>
    </div>
  </div>

  {/* Warranty Protection */}
  <div className="flex items-center mb-6 sm:mb-0">
    <img
      className="w-[52.77px] h-[60px] mr-4"
      src="f2.png"
      alt="Warranty Protection"
    />
    <div>
      <h1 className="text-[#242424] font-poppins text-[25px] leading-[37.5px] font-semibold">
        Warranty Protection
      </h1>
      <p className="text-[#898989] font-poppins text-[20px] leading-[30px] font-medium">
        Over 2 years
      </p>
    </div>
  </div>

  {/* 24/7 Support */}
  <div className="flex items-center">
    <img
      className="w-[52.77px] h-[60px] mr-4"
      src="f4.png"
      alt="24/7 Support"
    />
    <div>
      <h1 className="text-[#242424] font-poppins text-[25px] leading-[37.5px] font-semibold">
        24 / 7 Support
      </h1>
      <p className="text-[#898989] font-poppins text-[20px] leading-[30px] font-medium">
        Dedicated support
      </p>
    </div>
  </div>
</div>



    
            
        </div>
        
    );
};

export default ContactPage;