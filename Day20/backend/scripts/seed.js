const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {

    console.log("Deleting old data...");

    // Delete child table first
    // await prisma.task.deleteMany();

    // Delete parent table
    // await prisma.user.deleteMany();
    await prisma.$executeRawUnsafe(`
TRUNCATE TABLE "Task", "User"
RESTART IDENTITY CASCADE;
`);

    console.log("Old data deleted.");

    console.log("Creating mock users...");

    const user1 = await prisma.user.create({
      data: {
        name: "John Doe",
        email: "john@example.com",
      },
    });

    const user2 = await prisma.user.create({
      data: {
        name: "Jane Smith",
        email: "jane@example.com",
      },
    });

    console.log("Creating mock tasks...");

    await prisma.task.createMany({
      data: [
        {
          title: "Complete Login API",
          completed: false,
          userId: user1.id,
        },
        {
          title: "Create Dashboard",
          completed: true,
          userId: user1.id,
        },
        {
          title: "Fix Navbar",
          completed: false,
          userId: user2.id,
        },
      ],
    });

    console.log("Database seeded successfully.");

  } catch (error) {

    console.error(error);

  } finally {

    await prisma.$disconnect();

  }
}

seedDatabase();