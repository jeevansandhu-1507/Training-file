const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Route
app.get("/api/invoices", (req, res) => {
  setTimeout(() => {
    res.json([
      {
        id: 1,
        customer: "John",
        amount: 450,
      },
      {
        id: 2,
        customer: "Alice",
        amount: 800,
      },
      {
        id: 3,
        customer: "David",
        amount: 1200,
      },
    ]);
  }, 3000);
});

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});