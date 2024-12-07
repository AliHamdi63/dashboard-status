import mongoose from "mongoose";

export async function connect() {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${db.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

