import express from "express";
import dotenv from "dotenv";

const app = express();

app.use(express.json({limit:"16kb"}))

// Healthcheck route

app.get("/" , (req,res)=> {
    res.send({
        status:"ok",
        service:"Payment Instruction Service"
    })
})

export default app;