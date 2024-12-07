import User from "../../../models/User";
import bcryptjs from "bcryptjs"
import { connect } from "@/db_config/dbConfig"
import jwt from "jsonwebtoken"


export default async function POST(req, res) {
  try {
    await connect();
    const { email, password } = req.body;

    // Check if user already exists
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(400).json({ error: "User does not exist" });
    }

    // Check if the password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {

      res.status(400).json({ error: "Invalid Password" });
    }

    // create tokenData 
    const tokenData = {
      id: user._id,
      email: user.email
    }
    //create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });

    const response = res.json({ message: "Login success", success: true, token: token });
    return response;

  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error })
  }
}
