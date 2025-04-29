import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home/Home';
import Contact from './Contact'

function Nav() {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = () => {
        navigate('/login', { replace: true });
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='z-50'>
            <nav className='border-b-1 p-4 flex justify-between items-center'>
                <div className="text-white text-2xl font-bold">
                    <img src="https://www.pinklay.com/cdn/shop/files/pinklay_logo_buy_76d29792-e34f-4523-a9ec-0e6a78828bb8_170x@2x.png?v=1689667588" alt="" />
                </div>

                <div className="md:hidden">
                    <button onClick={toggleSidebar} className="text-black focus:outline-none">
                        {/* three lines icon from Heroicons */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path  strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation links */}
                <div className="hidden md:flex">
                    <button className='m-3 hover:text-blue-700 hover:text-2xl hover:underline font-bold' onClick={() => navigate('/home')}>Home</button>
                    <button className='m-3 hover:text-blue-700 hover:text-2xl hover:underline font-bold' onClick={() => navigate('/about')}>About</button>
                    <button className='m-3 hover:text-blue-700 hover:text-2xl hover:underline font-bold' onClick={() => navigate('/contact')}>Contact</button>
                    <button className='m-3 hover:text-blue-700 hover:text-2xl hover:underline font-bold' onClick={handleLogout}>Logout</button>
                </div>
              
            </nav>

            {/* Sidebar is visible on phone screens when i toggled */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
                <button onClick={toggleSidebar} className="absolute top-4 left-4 text-white focus:outline-none">
                    {/* Close icon from Heroicons */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <nav className="mt-16">
                    <button className='block w-full text-left p-3 hover:bg-gray-700' onClick={() => { navigate('/home'); toggleSidebar(); }}>Home</button>
                    <button className='block w-full text-left p-3 hover:bg-gray-700' onClick={() => { navigate('/about'); toggleSidebar(); }}>About</button>
                    <button className='block w-full text-left p-3 hover:bg-gray-700' onClick={() => { navigate('/contact'); toggleSidebar(); }}>Contact</button>
                    <button className='block w-full text-left p-3 hover:bg-gray-700' onClick={() => { handleLogout(); toggleSidebar(); }}>Logout</button>
                </nav>
            </div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </div>
    );
}

export default Nav;