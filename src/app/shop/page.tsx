import React from 'react';

const OurProducts = () => {
  return (
    <div>
      <div>
        <h1 className='mt-6 text-[#272343] text-3xl ml-6'>All Products</h1>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">

            {/* Product 1 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="Image Block.png" />
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">New</div>
              </a>
              <div className="mt-1">
                <h3 className="text-xs tracking-widest title-font mb-1 text-[#007580] cursor-pointer">Library Stool Chair</h3>
                <div className="flex items-center w-full">
                  <div className="flex items-center">
                    <p className="mt-1 font-bold text-[#272343]">$20</p>
                    <p className="mt-1 ml-1 line-through text-[#9A9CAA]">$39</p>
                  </div>
                  <img
             src='new.png'
               style={{borderRadius:"6px", padding:"2px"}} className='ml-auto text-xl bg-[#029FAE] mt-[-22] w-[32px] h-[32px]' />
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="02.jpg" />
                <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded">Sales</div>
              </a>
              <div className="mt-1">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer">Library Stool Chair</h3>
                <div className="flex items-center w-full">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                                      
               <img 
                 src='Add Cart.png' 
           
               style={{ borderRadius:"6px", padding:"2px"}} className='ml-auto text-xl bg-[#F0F2F3] mt-[-22] w-[44px] h-[44px]' />
  
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="13.jpg" />
              </a>
              <div className="mt-1 text[#272343]">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer text[#272343]">Library Stool Chair</h3>
                <div className="flex items-center w-full">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                  <img 
             src='Add Cart.png' 
          
              style={{ borderRadius:"6px", padding:"2px"}} className='ml-auto text-xl bg-[#F0F2F3] mt-[-22] w-[44px] h-[44px]' />
              </div>
              </div>
              </div>

            {/* Product 4 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="14.jpg" />
              </a>
              <div className="mt-1">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer">Library Stool Chair</h3>
                <div className="flex items-center">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                  <img 
                src='Add Cart.png' 
          
               style={{ borderRadius:"6px", padding:"2px"}} className='ml-auto text-xl bg-[#F0F2F3] mt-[-22] w-[44px] h-[44px]' />
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="thepic.png" />
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">New</div>
              </a>
              <div className="mt-1">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer">Library Stool Chair</h3>
                <div className="flex items-center">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                  <img
                    src='new.png'
                   style={{borderRadius:"6px", padding:"2px"}} className='ml-auto text-xl bg-[#029FAE] mt-[-22] w-[32px] h-[32px]' />
                </div>
              </div>
            </div>

            {/* Product 6 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="06.jpg" />
                <div className="absolute top-3 left-8 bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded">Sales</div>
              </a>
              <div className="mt-1">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer">Library Stool Chair</h3>
                <div className="flex items-center">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                  <img 
             src='Add Cart.png' 
          
             style={{ borderRadius:"6px", padding:"2px"}} className='ml-auto text-xl bg-[#F0F2F3] mt-[-22] w-[44px] h-[44px]' />
                </div>
              </div>
            </div>

            {/* Product 7 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="07.jpg" />
              </a>
              <div className="mt-1">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer">Library Stool Chair</h3>
                <div className="flex items-center">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                  <img 
          src='Add Cart.png' 
          
           style={{ borderRadius:"6px", padding:"2px"}} className='ml-auto text-xl bg-[#F0F2F3] mt-[-22] w-[44px] h-[44px]' />
                </div>
              </div>
            </div>

            {/* Product 8 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="Image Block.png" />
              </a>
              <div className="mt-1">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer">Library Stool Chair</h3>
                <div className="flex items-center">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                  <img 
            src='Add Cart.png' 
          
             style={{ borderRadius:"6px", padding:"2px"}} className='ml-auto text-xl bg-[#F0F2F3] mt-[-22] w-[44px] h-[44px]' />
                </div>
              </div>
            </div>

            {/* Product 9 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="Update.jpeg" />
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">New</div>
              </a>
              <div className="mt-1">
                <h3 className="text-xs tracking-widest title-font mb-1 text-[#007580] cursor-pointer">Library Stool Chair</h3>
                <div className="flex items-center w-full">
                  <div className="flex items-center">
                    <p className="mt-1 font-bold text-[#272343]">$20</p>
                    <p className="mt-1 ml-1 line-through text-[#9A9CAA]">$39</p>
                  </div>
                  <img
                 src='new.png'
                   style={{borderRadius:"6px", padding:"2px"}} className='ml-auto text-xl bg-[#029FAE] mt-[-22] w-[32px] h-[32px]' />               
                </div>
              </div>
            </div>

            {/* Product 10 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="02.jpg" />
                <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded">Sales</div>
              </a>
              <div className="mt-1">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer">Library Stool Chair</h3>
                <div className="flex items-center w-full">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                  <img 
             src='Add Cart.png' 
          
             style={{ borderRadius:"6px", padding:"2px"}} className='ml-auto text-xl bg-[#F0F2F3] mt-[-22] w-[44px] h-[44px]' />
                </div>
              </div>
            </div>

            {/* Product 11 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="13.jpg" />
              </a>
              <div className="mt-1 text[#272343]">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer text[#272343]">Library Stool Chair</h3>
                <div className="flex items-center w-full">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                   <img 
              src='Add Cart.png' 
          
            style={{ borderRadius:"6px", padding:"2px"}} className='ml-auto text-xl bg-[#F0F2F3] mt-[-22] w-[44px] h-[44px]' />
                </div>
              </div>
            </div>

            {/* Product 12 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="Pdct.jpeg" />
              </a>
              <div className="mt-1">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 hover:text-[#007580] cursor-pointer">Library Stool Chair</h3>
                <div className="flex items-center">
                  <p className="mt-1 font-bold text-[#272343]">$20</p>
                  <p className="mt-1 ml-1 line-through flex items-center text-[#9A9CAA]">$39</p>
                  <img 
                src='Add Cart.png' 
          
               style={{ borderRadius:"6px", padding:"2px"}} className='ml-auto text-xl bg-[#F0F2F3] mt-[-22] w-[44px] h-[44px]' />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>  

      <div className="bg-[#1E28320D] py-12 mt-12">
  <div className="text-center mb-8">
    <h2 className="text-2xl font-semibold text-gray-800">Or Subscribe To The Newsletter</h2>
    <div className="flex justify-center mt-4">
      <input
        type="email"
        placeholder="Email Address..."
        className="border-b-2 border-gray-400 px-2 py-1 text-center w-[300px] focus:outline-none focus:border-gray-800 bg-gray-100"
      />
      <button
        className="ml-4 text-gray-400 hover:text-gray-800 font-medium border-b-2 border-gray-400 hover:border-gray-800 focus:outline-none"
      >SUBMIT

      </button>
    </div>
  </div>


  <div className="text-center mt-8">
    <h3 className="text-lg font-medium text-gray-800">
      Follow Products And Discounts On Instagram
    </h3>
    <div className="flex justify-center items-center gap-4 mt-6">
      <img
        src="/thepic.png"
        alt="Product 1"
        className=" w-[100px] h-[100px] object-cover rounded-md"
      />
      <img
        src="/update.jpeg"
        alt="Product 2"
        className="w-[100px] h-[100px] object-cover rounded-md"
      />
      <img
        src="/02.jpg"
        alt="Product 3"
        className="w-[100px] h-[100px] object-cover rounded-md"
      />
      <img
        src="/Image.png"
        alt="Product 4"
        className="w-[100px] h-[100px] object-cover rounded-md"
      />
      <img
        src="/03.jpg"
        alt="Product 5"
        className="w-[100px] h-[100px] object-cover rounded-md"
      />
       <img
        src="/pdct.jpeg"
        alt="Product 5"
        className="w-[100px] h-[100px] object-cover rounded-md"
      />
    </div>
  </div>
</div>

           
           </div>
  );
};

export default OurProducts;
