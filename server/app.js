import  express  from "express";
import {config} from "dotenv";
import paymentRoute from "./routes/paymentsRoutes.js";
config({path:"./config/config.env"})
export const app=express();
app.use("/api",paymentRoute)