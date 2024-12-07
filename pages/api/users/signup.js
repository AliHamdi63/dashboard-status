import User from "../../../models/User";
import bcryptjs from "bcryptjs"
import { connect } from "@/db_config/dbConfig"



export default async function POST(req, res) {
    try {
        await connect();
        const { email, password } = req.body;

        // Check if the user already exists
        const user = await User.findOne({ email })
        if (user) {
            res.status(200).json({ error: "User Already exists" })
        }

        // hash Password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()

        res.status(200).json({ message: "User created successfully" })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
