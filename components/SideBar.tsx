"use client"

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {navItems} from "@/constants";
import {usePathname} from "next/navigation";

const SideBar = () => {
    const {pathname} = usePathname();
    return <aside className="sidebar">
        <Link href={"/"}>
            <Image src="/assets/icons/logo-full-brand.svg" alt="desktop-logo" width={160} height={50}
                   className="hidden h-auto lg:block"/>
            <Image src="/assets/icons/logo-brand.svg" alt="mobile-logo" width={52} height={52} className=" lg:hidden"/>
        </Link>
        <nav className="sidebar-nav">
            <ul className="flex flex-1 flex-col gap-6">
                {navItems.map(({url, name, icon}) => (
                    <Link key={name} href={url}>
                        <li>
                            <Image src={icon} alt={name} width={24} height={24}/>
                            <p>{name}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    </aside>
}
export default SideBar
