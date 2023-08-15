"use client"
import Navbar from '@/components/Navbar'
import TopNav from '@/components/TopNav'
import { usePathname } from 'next/navigation'

export default function Layout({ children }) {
    const pathName = usePathname();
    return (
        <html lang="en">
            <body>
                <div>
                    {
                        pathName === "/home" && <TopNav />
                    }
                    <Navbar />
                </div>
                {children}
            </body>
        </html>
    )
}

