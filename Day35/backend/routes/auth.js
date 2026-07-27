const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const user = {
    id: 1,
    email: "admin@gmail.com",
    password: "123456"
};

router.post("/login", (req, res) => {

    const { email, password } = req.body;

    if (
        email !== user.email ||
        password !== user.password
    ) {
        return res.status(401).json({
            message: "Invalid Credentials"
        });
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    res.json({
        token
    });

});

module.exports = router;