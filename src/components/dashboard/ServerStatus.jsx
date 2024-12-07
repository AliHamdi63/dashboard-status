import Tooltip from "@mui/joy/Tooltip";
import Link from "next/link";
import React from "react";

export default function ServerStatus({ name, uptime, ip, history }) {
    const getColorClass = (color) => {
        switch (color) {
            case "Up":
                return "bg-success";
            case "Degraded":
                return "bg-warning";
            case "Down":
                return "bg-danger";
            default:
                return "bg-secondary";
        }
    };
    const tooltipData = (date, status, responseTime) => {
        return (
            <div className="p-2">
                <p>{date}</p>
                <p>Status: {status}</p>
                <p>Response Time: {responseTime}ms</p>
            </div>
        )
    }
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <Link href={`/dashboard/${name}`}>
                        <h5 className="card-title mb-3">{name}</h5>
                    </Link>

                    <span className="text-muted mb-3">{uptime}% uptime</span>
                </div>
                <div className="d-flex">
                    {history.map((data, index) => (

                        <Tooltip
                            arrow
                            color="neutral"
                            placement="top"
                            size="lg"
                            variant="plain"
                            title={tooltipData(data.date, data.status, data.response_time_ms)}
                            key={index}
                        >

                            <div
                                // key={index}
                                className={` ${getColorClass(data.status)}`}
                                style={{ width: "8px", height: "30px", marginRight: "5px" }}
                            ></div>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </div>
    );
}