import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // validate: {
        //     validator: (value) => {
        //         if(value.length < 8) {
        //             throw new Error("Min length is 8")
        //         }
        //     }
        // }
    },
    password: {
        type: String,
        required: true
    }
});

export default mongoose.model("User", UserSchema);