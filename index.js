import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/routes.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/api", router);

mongoose.connect(process.env.mongo)
.then(() => console.log("DB Connection Established"))
.catch((err) => console.log("DB Error", err));

app.listen(process.env.port, ()=> console.log(`Listening on port ${process.env.port}`));



