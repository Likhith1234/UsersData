const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const userSchema = new mongoose.Schema({
    "name":String,
    "email":String,
    "number":Number,
    "age":Number
});

const userModel = new mongoose.model("allUsers", userSchema);

app.post("/create", (req,res) => {
    const user = req.body;
    let userObj = new userModel(user);
    userObj.save().then(() => {
        res.send({status:"User added"});
    });
});


mongoose.connect("mongodb://localhost:27017/customers", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log("Connected");
})

app.get("/demo", async (req,res) => {
    console.log("Get request called");
    let users = await userModel.find();
    res.send({users:users});
});

app.listen(8000);