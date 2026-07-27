const express = require("express");
const prisma = require("./db");

const app = express();

app.use(express.json());

const PORT = 5000;

async function startServer() {
  try {
    await prisma.$connect();

    console.log("Database connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Database connection failed:", error);

    process.exit(1);
  }
}

startServer();