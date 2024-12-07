import { connect } from "@/db_config/dbConfig"
import User from "../../../models/User";
// import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export default async function POST(req, res) {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await connect();
        await User.create({ email, password: hashedPassword });
        // NextResponse.json({ message: "User registered." }, { status: 201 });
        const response = res.status(201).json({ message: "User registered." });
        return response;
    } catch (error) {
        res.status(500).json({ message: "An error occurred while registering the user." });

        // return NextResponse.json(
        //     { message: "An error occurred while registering the user." },
        //     { status: 500 }
        // );
    }
}