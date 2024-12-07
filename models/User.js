import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter a valid email address"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter a valid password"],
    },

});



export default mongoose.models.User || mongoose.model("User", UserSchema);