import HomePage from '@/src/components/home/HomePage'
import Head from 'next/head'
import React from 'react'

const signIn = () => {
    return (
        <>
            <Head>
                <title>Sign in</title>
            </Head>

            <HomePage />
        </>
    )
}

export default signIn