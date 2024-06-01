"use client";

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';

export default function Header() {

    const [acState, setAcState] = useState('home');
    const {data: session} = useSession()

  return (
    <header className="z-[999] relative">
        <motion.div className='fixed top-0, left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opcaity-40 bg-[#dddbff] bg-opacity-80% shadow-lg shadow-black/[0.03] 
        backdrop-blur-[0.5rem] sm:top-4 sm:h-[3.25rem] sm:w-[50rem] sm:rounded-full' initial={{y:-100, x: "-50%", opacity:0}} animate={{y: 0, x: "-50%", opacity: 1}}>
            <div className='flex justify-between top-0 sm:top-4 p-3 ml-3 mr-5'>
                <div className='text-2xl font-bold drop-shadow-lg'>Bohan</div>
                <ul className='flex gap-10 text-lg font-medium'>

                    <Link
                        id='home'
                        href="/" className={clsx("text-muted-foreground hover:text-foreground", {"text-gray-950": acState === 'home'})}
                        onClick={() => setAcState('home')}
                    >
                        Home
                    </Link>
                    
                    <Link
                        href="/#about"
                        className={clsx("text-muted-foreground hover:text-foreground", {"text-gray-950": acState === 'about'})}
                        onClick={() => setAcState('about')}
                    >
                        About
                    </Link>
                    <Link
                        href="/blog"
                        className={clsx("text-muted-foreground hover:text-foreground", {"text-gray-950": acState === 'blog'})}
                        onClick={() => setAcState('blog')}
                    >
                        Blog
                    </Link>
                    {/* <button className='text-black hover:text-foreground mb-2 border px-3 bg-white  shadow-lg shadow-black/[0.03] rounded-md' >Login</button> */}
                    <a href={session ? "/api/auth/signout" : "/api/auth/signin"} 
                    className={ session? "text-white hover:text-foreground mb-2 border px-3 bg-black shadow-lg shadow-black/[0.03] rounded-md" : 
                        "text-black hover:text-foreground mb-2 border px-3 bg-white shadow-lg shadow-black/[0.03] rounded-md"}>
                        {session ? 'Logout' : 'Login'}
                    </a>
                </ul>
            </div>     
        </motion.div>
    </header>
  )
}
