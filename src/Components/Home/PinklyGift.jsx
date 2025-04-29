import React from 'react'

export default function PinklyGift() {
    const cards = [
        {
            id: 1,
            image: 'https://www.pinklay.com/cdn/shop/files/Square_kids_bedding_560x.jpg?v=1743675643',
            colSpan: 'md:col-span-2',
            rowSpan: '',
        },
        {
            id: 2,
            image: 'https://www.pinklay.com/cdn/shop/files/Square_basics_560x.jpg?v=1743675643',
            colSpan: 'md:col-span-1',
            rowSpan: '',
        },
        {
            id: 3,
            image: 'https://www.pinklay.com/cdn/shop/files/Square_dresses_560x.jpg?v=1744288512',
            colSpan: 'md:col-span-1',
            rowSpan: '',
        },
        {
            id: 4,
            image: 'https://www.pinklay.com/cdn/shop/files/Square_tableware_b49b1bec-e843-47e8-a85a-ad16718fd052_560x.jpg?v=1744705709',
            colSpan: 'md:col-span-1',
            rowSpan: '',
        },
        {
            id: 5,
            image: 'https://www.pinklay.com/cdn/shop/files/Mid_grid_main_banner_4cd1caa1-13a4-4b11-8dbd-b7457cfc9d1f_1200x.jpg?v=1743675644',
            colSpan: 'md:col-span-1',
            rowSpan: '',
        },
    ];
    return (
        <div className='mt-10'>
            <img src="https://www.pinklay.com/cdn/shop/files/Pinkalay_Gift_card_banner_-_ibiza_1a4dbaec-80e5-4ab6-b5a4-c5dd3e4adba6_2048x.jpg?v=1744094821" alt="" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`relative overflow-hidden rounded-lg shadow-md ${card.colSpan} ${card.rowSpan}`}
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-[80em] h-[30em] object-cover transform hover:scale-105 transition duration-500"
                        />  
                    </div>
                ))}
            </div>
        </div>
    )
}
