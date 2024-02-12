'use client';
import Link from "next/link"
import { FaRocket } from "react-icons/fa";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
    
    const currentPath = usePathname();
    const Links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/Issues' },
    ]

    return (
        <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
            <Link href="/">
                <FaRocket />
            </Link>
            <ul className="flex space-x-6">
                {Links.map((link) => (
                    <li key={link.href}
                    className={
                        classNames({
                            'text-zinc-900' : currentPath === link.href,
                            'text-zinc-500' : currentPath !== link.href,
                            'hover:text-zinc-800 transition-colors': true
                        })
                    }
                    >
                    <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar
