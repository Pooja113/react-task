import app from './app.js'
import dotenv from 'dotenv'
import connectDB from "./config/database.js";
import path from "path";
import express from "express";

dotenv.config({path: "backend/config/config.env"});



//DB
connectDB()

app.listen(process.env.PORT,() =>{
  console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

// --------------------------deployment------------------------------

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------