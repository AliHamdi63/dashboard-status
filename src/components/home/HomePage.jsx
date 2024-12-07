import React from 'react'
import OrdinaryLogin from './OrdinaryLogin'
import SocialLogin from './SocialLogin'

const HomePage = () => {


    return (
        <>
            <div className='container d-flex flex-sm-row-reverse flex-column justify-content=between mt-5 mb-5'>
                <div className='container'>

                    <OrdinaryLogin />

                </div>

                <div className="container vertical-divider d-sm-inline d-none"></div>

                <div className=" container social-buttons mt-sm-0">
                    <SocialLogin />
                </div>
            </div>
        </>
    )
}

export default HomePage