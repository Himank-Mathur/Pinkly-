import React from 'react'

export default function Women2() {
    const Women2 = [
        {
            id: 1,
            image: 'https://www.pinklay.com/cdn/shop/files/Square_top_560x.jpg?v=1743675643',
            colSpan: 'md:col-span-1',
            rowSpan: '',
        },
        {
            id: 2,
            image: 'https://www.pinklay.com/cdn/shop/files/Square_kurtas_560x.jpg?v=1743675644',
            colSpan: 'md:col-span-1',
            rowSpan: '',
        },
        {
            id: 3,
            image: 'https://www.pinklay.com/cdn/shop/files/Square_travel_560x.jpg?v=1743675643',
            colSpan: 'md:col-span-1',
            rowSpan: '',
        },
        {
            id: 4,
            image: 'https://www.pinklay.com/cdn/shop/files/Square_tableware_b49b1bec-e843-47e8-a85a-ad16718fd052_560x.jpg?v=1744705709',
            colSpan: 'md:col-span-2',
            rowSpan: '',
        },
        {
            id: 5,
            image: 'https://www.pinklay.com/cdn/shop/files/Bottom_banenr_indigo_1200x.jpg?v=1744288512',
            colSpan: 'md:col-span-',
            rowSpan: '',
        },
    ];
    return (
        <div className='mt-10'>
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {Women2.map((card) => (
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
