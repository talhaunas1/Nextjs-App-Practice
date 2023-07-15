import React from 'react'
import Link from 'next/link'




const links = [
    {
        id:1,
        title:"Home",
        url: "/"
    },
    {
        id:2,
        title:"Portfolio",
        url: "/portfolio"
    },
    {
        id:3,
        title:"Blog",
        url: "/blog"
    },
    {
        id:4,
        title:"About",
        url: "/about"
    },
    {
        id:5,
        title:"Contact",
        url: "/contact"
    },
]

const Navbar = () => {
  return (
    <div>
        <Link href="/"> PROJECT </Link>
        <div>
            {
                links.map(link=>(
                    <Link key={links.id}  href={link.url}> {link.title}</Link>
                ))
            }
        </div>
    </div>
  )
}

export default Navbar