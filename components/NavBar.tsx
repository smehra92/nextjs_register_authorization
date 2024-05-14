'use client';

import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  
  return (
    <div className='flex bg-red-200 p-3 space-x-3 text-black'>
      <Link href="/" className='mr-5'>Next.js</Link>
          <Link href="/api/auth/signout" className='ml-3'>Sign Out</Link>
      <Link href="/api/auth/signin">Login</Link>
    </div>
  )
}

export default NavBar