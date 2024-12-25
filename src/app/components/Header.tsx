
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full bg-[#F0F2F3] pt-[1px] pb-[20px] h-auto sm:h-[44px]">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-0">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="Logo Icon.png"
            alt="Comforty Logo"
            className="w-10 h-10 ml-4 sm:ml-10"
          />
          <h2 className="text-[22px] sm:text-[26px] font-medium">Comforty</h2>
        </div>

        {/* Cart Section */}
        <Link href="/cart">
          <button className="flex items-center space-x-2 bg-white py-2 px-4 rounded-md shadow-md sm:mr-11">
            <FiShoppingCart
             className="text-lg sm:text-xl hover:text-[#fa2fc1]" />
            <span className="hidden sm:inline text-sm sm:text-base">Cart</span>
            <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-[#007580] text-white text-xs sm:text-sm rounded-full">
              2
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
