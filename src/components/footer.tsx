import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 text-xs'>
            &copy; 2024 Bohan. All rights reserved;
        </small>
        <p className='text-xs font-semibold'>
            About this page: build with React, TailwindCSS, Next.js and Framer Motion, deploy on AWS by Docker
        </p>
    </footer>
  )
}
