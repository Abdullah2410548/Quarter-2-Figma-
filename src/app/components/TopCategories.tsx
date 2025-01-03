import React from 'react';
import Image from 'next/image';

const TopCategories = () => {
  const categories = [
    {
      title: 'Wing Chair',
      products: '3,204 PRODUCTS',
      image: '/update.jpeg', 
    },
    {
      title: 'Wooden Chair',
      products: '12 PRODUCTS',
      image: '/thepic.png', 
    },
    {
      title: 'Desk Chair',
      products: '34 PRODUCTS',
      image: '/pdct.jpeg', 
    }
  ];

  return (
    <section className="py-10 px-5">
      <h2 className="text-2xl font-semibold mb-6 text-[#272343]">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={category.image}
              alt={category.title}
              className="w-full h-[300px] object-cover"
              width={500}  
              height={300}
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-black/40 p-2 text-white">
              <h3 className="text-lg font-medium">{category.title}</h3>
              <p className="text-sm">{category.products}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;










