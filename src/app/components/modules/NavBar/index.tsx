"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Logo } from '../../common/Logo';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
    };

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <nav className="bg-gray-800 py-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 relative">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/">
                            <Logo />
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/search">
                            <p className='text-foreground'>Search</p>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            className="text-white hover:text-gray-300"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-95 flex justify-center items-center z-50">
                    <button className="text-white absolute top-0 right-0 mt-4 mr-4" onClick={closeMenu}>Close</button>
                    <div className="p-4 rounded-md flex flex-col space-y-4">
                        <Link href="/">Home</Link>
                        <Link href="/search">Search</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
