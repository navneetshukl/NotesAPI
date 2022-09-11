const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes"); 
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const path = require('path');
dotenv.config();
require('dotenv').config({ path: path.resolve(__dirname+'/.env') });




app.use(express.json());

app.use(cors());

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) =>{
    res.send("Notes API From CheezyCode");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on port no. " + PORT);
    });
})
.catch((error)=>{
    console.log(error);
});


