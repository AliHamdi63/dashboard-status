import Register from '@/src/components/home/Register'
import SocialLogin from '@/src/components/home/SocialLogin'
import Head from 'next/head'
import React from 'react'

const register = () => {
    return (
        <>
            <Head>
                <title>Register</title>
            </Head>

            <div className='container d-flex flex-sm-row-reverse flex-column justify-content=between mt-5 mb-5'>
                <div className='container'>

                    <Register />

                </div>

                <div className="container vertical-divider d-sm-inline d-none"></div>

                <div className=" container social-buttons mt-sm-0">
                    <SocialLogin />
                </div>
            </div>
        </>
    )
}

export default register