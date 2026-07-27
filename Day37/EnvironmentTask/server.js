require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Server is running successfully!");
});

// Login Route
app.post("/login", (req, res) => {

    const user = {
        id: 1,
        email: "admin@gmail.com"
    };

    const token = jwt.sign(
        user,
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({
        message: "Login Successful",
        token
    });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});