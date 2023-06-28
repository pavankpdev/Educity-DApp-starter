'use client'

import Link from "next/link"
import React from "react";
import { useRouter } from 'next/navigation'
import Wallet from "@/components/Wallet";

type Props = {
    CTAType?: 'Consumer' | 'Manufacturer'
}

const Navbar: React.FC<Props> = ({CTAType}) => {

    const links: Record<'Consumer' | 'Manufacturer', string> = {
        'Consumer': '/',
        'Manufacturer': '/manufacturer'
    }

    const router = useRouter()

    return <>
        <nav
            className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <Link href="#" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SupplyChain</span>
                </Link>
                <div className="flex gap-2">
                    <Wallet />
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => router.push(links[CTAType || "Manufacturer"])}
                    >
                        {CTAType}
                    </button>
                </div>
            </div>
        </nav>

    </>
}

Navbar.defaultProps = {
    CTAType: 'Manufacturer'
}

export default Navbar