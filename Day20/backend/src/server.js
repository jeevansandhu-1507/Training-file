const express = require("express");
const prisma = require("./db");
const taskRoutes = require("./routes/tasks");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use("/api/tasks", taskRoutes);

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