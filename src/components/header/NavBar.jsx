"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { signOut } from 'next-auth/react'


const NavBar = () => {
    return (
        <header>
            <nav className="navbar bg-body-tertiary p-4">
                <div className={"container d-flex flex-row " + (true ? "justify-content-between" : "justify-content-center")}>
                    <Link href={'/dashboard'}>
                        <div className="d-flex flex-row justify-content-center mb-sm-0 mb-2">
                            <Image src="/images/dashboard.png" alt="Logo" width={40} height={35} className='me-2' />
                            <strong className='fs-2'>Dashboard</strong>
                        </div>
                    </Link>
                    {/* <div className={(true ? "d-inline" : "d-none")}>
                        <button onClick={() => signOut()} className="btn btn-light fs-5 fw-semibold">Log Out</button>

                    </div> */}
                </div>
            </nav>
        </header>
    )
}

export default NavBar