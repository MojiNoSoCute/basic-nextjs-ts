'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {}

export default function Navbar({}: Props) {
    const pathname = usePathname()
  return (
    <nav className="flex justify-between item-center p-4 bg-gray-800 text-white">
        <div className='text-lg forn-blod'>MyApp</div>
        <ul className='flex space-x-4'>
            <li className='hover:text-gray-400'>
                <Link href="/" className={
                    pathname === '/' ? 'text-blue-700' : 'text-white'
                }>Home</Link>
            </li>
            <li className='hover:text-gray-400'>
                <Link href='/about' className={
                    pathname === '/about' ? 'text-blue-700' : 'text-white'
                }>About</Link>
            </li>
            <li className='hover:text-gray-400'>
                <Link href='/contact' className={
                    pathname === '/contact' ? 'text-blue-700' : 'text-white'
                }>Contact</Link>
            </li>
            <li className='hover:text-gray-400'>
                <Link href='/user' className={
                    pathname === '/user' ? 'text-blue-700' : 'text-white'
                }>User</Link>
            </li>
            <li className='hover:text-gray-400'>
                <Link href='/Login' className={
                    pathname === '/Login' ? 'text-blue-700' : 'text-white'
                }>Login</Link>
            </li>
        </ul>
    </nav>
  )
}