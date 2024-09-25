import express from "express";
import { createUser } from "../controller/authController.js";

//! GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS

const router = express.Router();

router.get("/register", createUser);

export default router;