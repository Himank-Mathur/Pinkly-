import React from 'react'
import { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const womenData = [
  {
    id: 1,
    imageUrl: 'https://www.pinklay.com/cdn/shop/files/Women_of_Pinklay_7_80764e99-8aa6-41d2-8816-5bd6ffbbe2bf_420x.jpg?v=1721369076',
  
  },
  {
    id: 2,
    imageUrl: 'https://www.pinklay.com/cdn/shop/files/Women_of_Pinklay_8_61cf31eb-cdfb-4b08-89de-ed03917d9da9_420x.jpg?v=1721369075',
   
  },
  {
    id: 3,
    imageUrl: 'https://www.pinklay.com/cdn/shop/files/10_e38d1bd5-7cc9-4617-93a6-68af5cb8c658_420x.jpg?v=1728975077',
    
  },
  {
    id: 4,
    imageUrl: 'https://www.pinklay.com/cdn/shop/files/1_8a748059-b573-4123-bb31-82f69361568e_420x.jpg?v=1728975007',
    
  },
  {
    id: 5,
    imageUrl: 'https://www.pinklay.com/cdn/shop/files/3_0577ab34-c8ac-4a69-b7e8-83ca6b79e51d_420x.jpg?v=1728975140',
   
  },
  {
    id: 6,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    
  },
  {
    id: 7,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
   
  },
  {
    id: 8,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    
  },
  {
    id: 9,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
   
  },
  {
    id: 10,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    
  },
]
function Women() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300; // Adjust scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300; // Adjust scroll distance as needed
    }
  };
  return (
    <div className='py-12'>
      <div className="flex justify-center items-center text-center ">
        <img
          src="https://cdn.shopify.com/s/files/1/0249/5099/7070/files/left_Image.webp?v=1703763153"
          alt=""
          className="h-12 w-auto m-2"
        />
        <h1 className="text-3xl text-green-600 font-bold">WOMEN OF PINKALY</h1>
        <img
          src="https://cdn.shopify.com/s/files/1/0249/5099/7070/files/Right_Image.webp?v=1703763152"
          alt=""
          className="h-12 w-auto m-2"
        />
      </div>
      <div className='container mx-auto px-4 relative'>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 z-10"
        onClick={scrollLeft}
      >
        <FaChevronLeft />
      </button>
      <div
        className="flex overflow-x-auto scroll-smooth gap-4 p-4"
        ref={containerRef}
      >
        {womenData.map((card) => (
          <div
            key={card.id}
            className="flex-none w-70 h-full bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-full object-cover"
            />

          </div>
        ))}
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 z-10"
        onClick={scrollRight}
      >
        <FaChevronRight />
      </button>
      </div>
    </div>
  )
}

export default Women;