import Link from "next/link"
import { FaRocket } from "react-icons/fa";

const NavBar = () => {

    const Links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
    ]

    return (
        <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
            <Link href="/">
                <FaRocket />
            </Link>
            <ul className="flex space-x-6">
                {Links.map((link) => (
                    <li key={link.href} className="text-zinc-500 hover:text-zinc-800 transition-colors">
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
