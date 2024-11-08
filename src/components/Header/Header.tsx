'use client'
import React from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation'
const Header = () => {
  const pathname = usePathname()
  return (
    <header className='text-center py-8 bg-slate-700'>
      <nav>
        <Link href="/" className={`link ${pathname === '/' ? 'active' : ''}`}>Главная</Link>
        <span> | </span>
        <Link href="/about" className={`link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
        <span> | </span>
        <Link href="/users" className={`link ${pathname === '/users' ? 'active' : ''}`}>Перейти к пользователям</Link>
      </nav>
    </header>
  );
};

export default Header;