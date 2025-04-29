import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const cardData = [
  {
    id: 1,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 1',
    description: 'Description for card 1.',
  },
  {
    id: 2,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 2',
    description: 'Description for card 2.',
  },
  {
    id: 3,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 3',
    description: 'Description for card 3.',
  },
  {
    id: 4,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 4',
    description: 'Description for card 4.',
  },
  {
    id: 5,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 5',
    description: 'Description for card 5.',
  },
  {
    id: 6,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 5',
    description: 'Description for card 5.',
  },
  {
    id: 7,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 5',
    description: 'Description for card 5.',
  },
  {
    id: 8,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 5',
    description: 'Description for card 5.',
  },
  {
    id: 9,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 5',
    description: 'Description for card 5.',
  },
  {
    id: 10,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 5',
    description: 'Description for card 5.',
  },
  {
    id: 11,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 5',
    description: 'Description for card 5.',
  },
  {
    id: 12,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 5',
    description: 'Description for card 5.',
  },
  {
    id: 13,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 5',
    description: 'Description for card 5.',
  },
  {
    id: 14,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 5',
    description: 'Description for card 5.',
  },
  {
    id: 15,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 5',
    description: 'Description for card 5.',
  },
  {
    id: 16,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 5',
    description: 'Description for card 5.',
  },
  {
    id: 17,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 5',
    description: 'Description for card 5.',
  },
  {
    id: 18,
    imageUrl: 'https://assets.vogue.com/photos/5ef3cdc714859e0dd1418d0e/master/pass/00_promo.gif',
    title: 'Card 5',
    description: 'Description for card 5.',
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
    title: 'Card 5',
    description: 'Description for card 5.',
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
    <div className="relative">
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
            className="flex-none w-70 h-full bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
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
  );
}