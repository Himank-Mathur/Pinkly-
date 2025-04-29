import React from 'react'
import { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const bestsellersData = [
  {
    id: 1,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaaB33Ow5OoCmGc1qA_946g4snSdU7yr2Ug&s',
  
  },
  {
    id: 2,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKakYswkvSylTrJc8XQBQ0UzBpGwtP3Q6hw&s',
   
  },
  {
    id: 3,
    imageUrl: 'https://www.pinklay.com/cdn/shop/files/10_e38d1bd5-7cc9-4617-93a6-68af5cb8c658_420x.jpg?v=1728975077',
    
  },
  {
    id: 4,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0RSS3lmtSqG3RICeif0PEL5RJZWoGJpsyg&s',
    
  },
  {
    id: 5,
    imageUrl: 'https://www.pinklay.com/cdn/shop/files/Pinklay_and_You_-_New_Website_3742477b-e8f3-41d5-bd2c-26bfcc663f1f_420x.jpg?v=1712146915',
   
  },
  {
    id: 6,
    imageUrl: 'https://www.pinklay.com/cdn/shop/files/Mira_Kapoor_-_Pinklay_6e9ee4de-6e38-41c3-813c-1f29ccc851ce_420x.jpg?v=1699600477',
    
  },
  {
    id: 7,
    imageUrl: 'https://www.pinklay.com/cdn/shop/files/Lara_Dutta_-_Pinklay_420x.jpg?v=1699600368',
   
  },
  {
    id: 8,
    imageUrl: 'https://www.pinklay.com/cdn/shop/files/Pinklay_and_You_-_New_Website_420x.png?v=1711653940',
    
  },
  {
    id: 9,
    imageUrl: 'https://www.pinklay.com/cdn/shop/files/5_8baccaf6-2839-4913-9271-498ad6914368_420x.png?v=1725446394',
   
  },
  {
    id: 10,
    imageUrl: 'https://www.pinklay.com/cdn/shop/files/Chitrangada_Singh_-_Pinklay_420x.jpg?v=1699600368',
    
  },
]
function Bestsellers() {
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
        <h1 className="text-3xl text-green-600 font-bold">BESTSELLERS</h1>
        <img
          src="https://cdn.shopify.com/s/files/1/0249/5099/7070/files/Right_Image.webp?v=1703763152"
          alt=""
          className="h-12 w-auto m-2 "
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
          {bestsellersData.map((card) => (
            <div
              key={card.id}
              className="flex-none w-70 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            <div
            title='Bali Mix Dress'
            >
                
            </div>
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

export default Bestsellers