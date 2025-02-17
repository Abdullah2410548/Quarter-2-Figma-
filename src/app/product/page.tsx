import React from 'react';
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col lg:flex-row lg:w-4/5 mx-auto items-center lg:items-start">
            {/* Product Image */}
            <div className="lg:w-1/2 w-full lg:h-auto h-50 mb-8 lg:mb-0">
              <Image
                alt="ecommerce"
                src="/02.jpg"
                layout="responsive"
                width={500}
                height={500}
                className="rounded-lg object-cover object-center"
              />
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-1/2 lg:ml-14 text-center lg:text-left">
              <h1 className="text-[#272343] text-3xl lg:text-5xl font-bold mb-4">
                Library Stool
              </h1>
              <h2 className="text-[#272343] text-2xl lg:text-5xl font-bold mb-6">
                Chair
              </h2>

              {/* Price Button */}
              <button className="bg-[#029FAE] text-white rounded-full w-[144px] h-[44px] mb-6 text-xl">
                $20.00 USD
              </button>

              {/* Product Description */}
              <p
                className="text-black opacity-60 text-sm lg:w-[330px] mx-auto lg:ml-0 mb-6"
                style={{
                  fontWeight: "400",
                  lineHeight: "33px",
                  whiteSpace: "normal",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>

              {/* Add to Cart Button */}
              <button
                className="bg-[#029FAE] text-white w-[144px] h-[44px] flex items-center justify-center gap-2 text-base"
                style={{ borderRadius: "8px" }}
              >
                <PiShoppingCartSimpleThin className="w-5 h-5" />
                Add To Cart
              </button>
            </div>
          </div>

          {/* Featured Products Title */}
          <div className="mt-16 ml-4 lg:ml-14">
            <div className="flex justify-between items-center">
              <h1
                className="text-[#000000] text-2xl lg:text-2xl font-bold tracking-wide mb-6"
                style={{ letterSpacing: "4px" }}
              >
                FEATURED PRODUCTS
              </h1>
              <div className="mr-8 mb-8">
                <div className="mr-16 border-b-2 border-black">
                  <button
                    className="text-black font-bold"
                    style={{
                      borderBottom: "2px solid #000",
                      border: "none",
                      paddingBottom: "2px",
                      marginTop: "-5px",
                      display: "inline-block",
                      width: "auto",
                    }}
                  >
                    View all
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Products Grid */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start ml-14 mt-8">
            {[
              { src: "/07.jpg", alt: "Library Stool Chair 1" },
              { src: "/Image Block.png", alt: "Library Stool Chair 2" },
              { src: "/pdct.jpeg", alt: "Library Stool Chair 3" },
              { src: "/03.jpg", alt: "Library Stool Chair 4" },
              { src: "/update.jpeg", alt: "Library Stool Chair 5" },
            ].map((product, index) => (
              <div className="text-center" key={index}>
                <div className="w-[151px] h-[155px] relative">
                  <Image
                    src={product.src}
                    alt={product.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-sm"
                  />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <h1
                    className="text-[#272343] text-start hover:text-[#007580] cursor-pointer"
                    style={{ fontSize: "11px" }}
                  >
                    Library Stool Chair
                  </h1>
                  <p
                    className="font-bold text-[#000000] text-end"
                    style={{ fontSize: "11px" }}
                  >
                    $99
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;












