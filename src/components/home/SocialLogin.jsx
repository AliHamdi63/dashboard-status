import { signIn, useSession } from 'next-auth/react';
import React from 'react'

const SocialLogin = () => {
    // const { data } = useSession();

    return (
        <>
            <button className="social-btn google">
                {/* <button className="social-btn google" onClick={() => signIn('google')}> */}
                <i className="icon">G</i> Login with Google
            </button>

            {/* <button className="social-btn github" onClick={() => signIn('github')}> */}
            <button className="social-btn github">
                <i className="icon"></i> Login with Github
            </button>
        </>
    )
}

export default SocialLogin