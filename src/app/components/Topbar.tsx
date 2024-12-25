import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaCheck, FaExclamationCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="w-full bg-[#272343] py-2 sm:py-0">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Left Section */}
        <div className="flex items-center space-x-2 text-white text-xs sm:text-sm">
          <FaCheck aria-label="Free Shipping Icon" />
          <span>Free shipping on all orders over $50</span>
        </div>

        {/* Right Section */}
        <ul className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-white text-xs sm:text-sm mt-2 sm:mt-0">
          {/* Language Selector */}
          <li className="flex items-center space-x-1 cursor-pointer">
            <span>Eng</span>
            <ChevronDown aria-label="Language Selector" />
          </li>

          {/* FAQs Link */}
          <li className="hover:text-[#fa2fc1]">
            <Link href="/faq">FAQs</Link>
          </li>

          {/* Need Help */}
          <li className="flex items-center space-x-1 cursor-pointer">
            <FaExclamationCircle aria-label="Help Icon" />
            <span>Need Help</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;






      
     

    
