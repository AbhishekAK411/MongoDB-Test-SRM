import User from "../models/user.js";
import axios from "axios";

export const createUser = async(req,res) => {
    try {
        const { username, email, password } = req.body;
        
        const newUser = new User({
            username,
            email,
            password
        });

        await newUser.save();

        return res.status(201).json({
            status: 201,
            success: true,
            message: "User created"
        });

        // const products = await axios.get("https://fakestoreapi.com/products/");
        

        // return res.status(200).json(products.data);

    } catch (error) {
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Internal server error",
            error
        });
    }
}