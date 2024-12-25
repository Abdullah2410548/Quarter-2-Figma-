import React from 'react'
import Image from 'next/image'

const OurProducts = () => {
  return (
    <div>
      <div>
        <div className="text-center mb-[-30]">
          <h1 className="mt-20 text-[#272343] text-3xl">Our Products</h1>
        </div>
      </div>

      <section className="text-gray-600 body-font mt-12">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/Image Block.png"
                  width={300}
                  height={300}
                />
                {/* Badge for New Sale */}
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
                  New
                </div>
              </a>
              <div className="mt-1">
                <h3 className="text-xs tracking-widest title-font mb-1 text-[#007580] cursor-pointer">
                  Libraray Stool Chair
                </h3>
                <div className="flex items-center w-full">
                  <div className="flex items-center">
                    <p className="mt-1 font-bold text-[#272343]">$20</p>
                    <p className="mt-1 ml-1 line-through text-[#9A9CAA]">$39</p>
                  </div>
                     <Image
                      alt='cart logo'
                     src="/new.png"
                      className="ml-auto text-xl bg-[#029FAE] mt-[-22] w-[32px] h-[32px]" style={{borderRadius:'6px'}}
                     width={44}
                     height={44}
                />
                </div>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/02.jpg"
                  width={300}
                  height={300}
                />
                {/* Badge for Sales */}
                <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded">
                  Sales
                </div>
              </a>
              <div className="mt-1">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer">
                  Library Stool Chair
                </h3>
                <div className="flex items-center w-full">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                  <Image
                    src="/Add Cart.png"
                    alt="Add Cart"
                    width={44}
                    height={44}
                    style={{ borderRadius: "6px", padding: "2px" }}
                    className="ml-auto text-xl bg-[#F0F2F3] mt-[-22] w-[44px] h-[44px]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/13.jpg"
                  width={300}
                  height={300}
                />
              </a>
              <div className="mt-1 text-[#272343]">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer">
                  Library Stool Chair
                </h3>
                <div className="flex items-center w-full">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                  <Image
                    src="/Add Cart.png"
                    alt="Add Cart"
                    width={44}
                    height={44}
                    style={{ borderRadius: "6px", padding: "2px" }}
                    className="ml-auto text-xl bg-[#F0F2F3] mt-[-22] w-[44px] h-[44px]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/14.jpg"
                  width={300}
                  height={300}
                />
              </a>
              <div className="mt-1">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer">
                  Library Stool Chair
                </h3>
                <div className="flex items-center">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                  <Image
                    src="/Add Cart.png"
                    alt="Add Cart"
                    width={44}
                    height={44}
                    style={{ fontSize: "45px", color: "#272343", borderRadius: "6px", padding: "2px" }}
                    className="ml-auto text-xl bg-[#F0F2F3] mt-[-22] w-[44px] h-[44px]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/update.jpeg"
                  width={300}
                  height={300}
                />
                {/* Badge for New Sale */}
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
                  New
                </div>
              </a>
              <div className="mt-1">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer">
                  Library Stool Chair
                </h3>
                <div className="flex items-center">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                  <Image
                    src="/Add Cart.png"
                    alt="Add Cart"
                    width={44}
                    height={44}
                    style={{ fontSize: "45px", color: "#272343", borderRadius: "6px", padding: "2px" }}
                    className="ml-auto text-xl bg-[#F0F2F3] mt-[-22] w-[44px] h-[44px]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/06.jpg"
                  width={300}
                  height={300}
                />
                {/* Badge for Sales */}
                <div className="absolute top-3 left-8 bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded">
                  Sales
                </div>
              </a>
              <div className="mt-1">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer">
                  Library Stool Chair
                </h3>
                <div className="flex items-center">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                  <Image
                    src="/Add Cart.png"
                    alt="Add Cart"
                    width={44}
                    height={44}
                    style={{ fontSize: "45px", color: "#272343", borderRadius: "6px", padding: "2px" }}
                    className="ml-auto text-xl bg-[#F0F2F3] mt-[-22] w-[44px] h-[44px]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/07.jpg"
                  width={300}
                  height={300}
                />
              </a>
              <div className="mt-1">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer">
                  Library Stool Chair
                </h3>
                <div className="flex items-center">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                  <Image
                    src="/Add Cart.png"
                    alt="Add Cart"
                    width={44}
                    height={44}
                    style={{ fontSize: "45px", color: "#272343", borderRadius: "6px", padding: "2px" }}
                    className="ml-auto text-xl bg-[#F0F2F3] mt-[-22] w-[44px] h-[44px]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/Image Block.png"
                  width={300}
                  height={300}
                />
              </a>
              <div className="mt-1">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer">
                  Library Stool Chair
                </h3>
                <div className="flex items-center">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                  <Image
                    src="/Add Cart.png"
                    alt="Add Cart"
                    width={44}
                    height={44}
                    style={{ fontSize: "45px", color: "#272343", borderRadius: "6px", padding: "2px" }}
                    className="ml-auto text-xl bg-[#F0F2F3] mt-[-22] w-[44px] h-[44px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurProducts

