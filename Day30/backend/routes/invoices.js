const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
    const filePath = path.join(__dirname, "../data/invoices.json");

    const invoices = JSON.parse(fs.readFileSync(filePath));

    res.json(invoices);
});

module.exports = router;