import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const cardData = [
  {
    id: 1,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1tjWFh7Lw8bzXT1fb5ZRHUtplj714KfoHQ&s',
  
  },
  {
    id: 2,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT678PNODAYM1XQJtvsdqyQJIDF4jwiJ64NgQ&s',
   
  },
  {
    id: 3,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    
  },
  {
    id: 4,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHR9lE1GQE7zOYr0Z_mtd6GEAxL7efcHePQ&s',
    
  },
  {
    id: 5,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaofQmR6gyW6a0JUNM3nUbbDStyO0cR13uzA&s',
   
  },
  {
    id: 6,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbjiPOvCeH-23DOS3Hf2Hv9lX_xeViDEL1g&s',
    
  },
  {
    id: 7,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XlOWTk2OqvNpZNmWDw20egy2eLXy78Cqzg&s',
   
  },
  {
    id: 8,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT678PNODAYM1XQJtvsdqyQJIDF4jwiJ64NgQ&s',
    
  },
  {
    id: 9,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHR9lE1GQE7zOYr0Z_mtd6GEAxL7efcHePQ&s',
   
  },
  {
    id: 10,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    
  },
  {
    id: 11,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaofQmR6gyW6a0JUNM3nUbbDStyO0cR13uzA&s',
    
  },
  {
    id: 12,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbjiPOvCeH-23DOS3Hf2Hv9lX_xeViDEL1g&s',
   
  },
  {
    id: 13,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XlOWTk2OqvNpZNmWDw20egy2eLXy78Cqzg&s',
   
  },
  {
    id: 14,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    
  },
  {
    id: 15,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    
  },
  {
    id: 16,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    
  },
  {
    id: 17,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    
  },
  {
    id: 18,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
  },
  {
    id: 19,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 5',
    description: 'Description for card 5.',
  },
  {
    id: 20,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
  },
];

export default function HomeCards() {
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
    <div className="relative container mx-auto px-4">
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
        {cardData.map((card) => (
          <div
            key={card.id}
            className="flex-none w-70 bg-white rounded-lg shadow-md overflow-hidden"
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
  );
}