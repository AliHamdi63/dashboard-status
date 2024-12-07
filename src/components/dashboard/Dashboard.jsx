"use client"

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React from 'react'
import ServerStatus from './ServerStatus';
import Incidents from './Incidents';

const Dashboard = ({ servers, history }) => {
    // const { data } = useSession();
    // console.log(data);
    const router = useRouter();


    return (
        <>
            <div className='container'>
                <div className='container systems-op text-center'>
                    <p className='fs-4 fw-semibold'>All Systems Operational</p>
                </div>
                <div className="container w-75 py-5">
                    <h1 className="mb-2">Service Status</h1>
                    <div className="d-flex flex-column align-items-center">
                        {servers.map((service, index) => (
                            <div className="" key={index}>
                                <ServerStatus
                                    name={service.name}
                                    uptime={service.uptime_percentage}
                                    ip={service.ip_address}
                                    history={history}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='container w-75'>
                <Incidents />
            </div>

        </>
    )
}

export default Dashboard