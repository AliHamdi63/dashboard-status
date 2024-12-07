import React from 'react'

const ServerInfo = ({ server }) => {

    const getColorClass = (color) => {
        switch (color) {
            case "Up":
                return "text-success";
            case "Degraded":
                return "text-warning";
            case "Down":
                return "text-danger";
            default:
                return "text-secondary";
        }
    };

    return (
        <>
            <div className='container w-75 mt-5 mb-5'>
                <h1 className='fs-3 fw-bold'>{server.name}</h1>
                <div className='d-flex flex-column'>

                    <h2 className='fs-5 fw-semibold mt-4 '>Status: <span className={getColorClass(server.status)}>{server.status}</span></h2>
                    <h2 className='fs-5 fw-semibold mt-4'>IP Address: {server.ip_address}</h2>
                    <h2 className='fs-5 fw-semibold mt-4'>Response time: {server.response_time_ms}ms</h2>
                    <h2 className='fs-5 fw-semibold mt-4'>Uptime: {server.uptime_percentage}%</h2>
                </div>
            </div>

        </>
    )
}

export default ServerInfo