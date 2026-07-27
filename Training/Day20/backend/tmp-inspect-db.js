
const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();
(async () => {
  try {
    const tables = await db.$queryRaw`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_type = 'BASE TABLE' ORDER BY table_name`;
    console.log("TABLES", JSON.stringify(tables, null, 2));
    const columns = await db.$queryRaw`SELECT column_name, is_nullable, data_type FROM information_schema.columns WHERE table_name = 'Task' ORDER BY ordinal_position`;
    console.log("TASK_COLUMNS", JSON.stringify(columns, null, 2));
    const taskCount = await db.$queryRaw`SELECT COUNT(*) as count FROM "Task"`;
    console.log("TASK_COUNT", JSON.stringify(taskCount, null, 2));
    try {
      const userCount = await db.$queryRaw`SELECT COUNT(*) as count FROM "User"`;
      console.log("USER_COUNT", JSON.stringify(userCount, null, 2));
    } catch (err) {
      console.log("USER_ERROR", err.message);
    }
  } catch (err) {
    console.error("ERROR", err);
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
})();

