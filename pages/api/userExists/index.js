import { connect } from "@/db_config/dbConfig"
import User from "../../../models/User";
// import { NextResponse } from "next/server";

export default async function POST(req, res) {
    try {
        await connect();
        const { email } = req.body;
        const user = await User.findOne({ email }).select("_id");
        // console.log("user: ", user);
        // NextResponse.json({ user });
        const response = res.status(201).json({ user });
        return response;

    } catch (error) {
        console.log(error);
    }
}