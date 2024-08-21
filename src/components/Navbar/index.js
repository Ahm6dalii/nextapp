"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import { usePathname } from "next/navigation";

export default function Navbar() {
    const path = usePathname();
    console.log(path)

    const navItem=[
        {
            path:"/",
            name:"home"
        },
        {
            path:"/contact",
            name:"Contact"
        },
        {
            path:"/posts",
            name:"Posts"
        },
        {
            path:"/about",
            name:"About"
        },
        {
            path:"/postMongo",
            name:"postMongo"
        },
        {
            path:"/postMongo/add",
            name:"add post"
        }
    ]
  return (
    <nav className=' bg-gray-400 '>
        <div className='flex gap-4 p-2 w-[80%] mx-auto '>
        <h1 className='me-4'>logo</h1>
        <ul className={`flex gap-3`}>
        {navItem.map((item)=> <li key={`${item.path}`}>
            <Link  className={`${path == item.path ? styles.active : ""} font-light`}
 href={`${item.path}`}  >{`${item.name}`}</Link>
 </li>)}
        </ul>
        </div>
    </nav>
  )
}
