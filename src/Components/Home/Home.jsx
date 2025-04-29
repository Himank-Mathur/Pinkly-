import React from 'react';
import HomePage from './HomePage';

const Home = () => {
  const cards = [
    {
      id: 1,
      image: 'https://www.pinklay.com/cdn/shop/files/Vertical_2_800x.jpg?v=1744288512',
      colSpan: 'md:col-span-1',
      rowSpan: 'row-span-2',
    },
    {
      id: 2,
      image: 'https://www.pinklay.com/cdn/shop/files/Square_kids_d48b2f08-182d-4c2f-a493-426e7f6d3661_800x.jpg?v=1744288511',
      colSpan: 'md:col-span-1',
      rowSpan: '',
    },
    {
      id: 3,
      image: 'https://www.pinklay.com/cdn/shop/files/Square_fragrance_800x.jpg?v=1743675643',
      colSpan: 'md:col-span-1',
      rowSpan: '',
    },
    {
      id: 4,
      image: 'https://www.pinklay.com/cdn/shop/files/Main_banner_woodenware_1_1000x.jpg?v=1745210300',
      colSpan: 'md:col-span-2',
      rowSpan: 'row-span-2',
    },
    {
      id: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhcPQs7NsfIiueMkuMp8o1ZauaHm422ltX0e2lRCEISKPVOX_9g&s=10&ec=72940545',
      colSpan: 'md:col-span-1',
      rowSpan: '',
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative overflow-hidden rounded-lg shadow-md ${card.colSpan} ${card.rowSpan}`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
      <div className='flex font-bold'>
        <button className='border-2 p-2 w-full m-2 rounded-lg bg-pink-700 hover:bg-pink-500 '>Mykonos</button>
        <button className='border-2 p-2 w-full m-2 rounded-lg bg-pink-700 hover:bg-pink-500 '>Ikigi</button>
        <button className='border-2 p-2 w-full m-2 rounded-lg bg-pink-700 hover:bg-pink-500 '>Serengeti</button>
        <button className='border-2 p-2 w-full m-2 rounded-lg bg-pink-700 hover:bg-pink-500 '>Gulzaar</button>
      </div>
      <HomePage/>
    </div>
  );
};

export default Home;