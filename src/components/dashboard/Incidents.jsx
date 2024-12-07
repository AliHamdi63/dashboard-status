import React from 'react'

const Incidents = () => {
    return (
        <>
            <div className="container fw-semibold my-5">
                {/* Maintenance History Section */}
                <div className="mb-4">
                    <h4 className="mb-3">Maintenance History</h4>
                    <div className="card-empty">
                        No maintenance.
                    </div>
                </div>

                {/* Recent Incidents Section */}
                <div>
                    <h4 className="mb-3">Recent Incidents</h4>
                    <div className="card-empty">
                        No incidents reported.
                    </div>
                </div>
            </div>


        </>
    )
}

export default Incidents