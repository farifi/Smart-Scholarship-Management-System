import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import "dotenv/config";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    const userCount = await prisma.user.count();
    console.log("User count:", userCount);
  } catch (error) {
    console.error("Connection test failed:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
