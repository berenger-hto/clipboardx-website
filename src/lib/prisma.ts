import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/client";
import { withAccelerate } from "@prisma/extension-accelerate"

const globalForPrisma = globalThis as unknown as { 
    prisma: ReturnType<typeof createExtendedClient> | undefined;
    basePrisma: PrismaClient | undefined;
    pool: Pool | undefined;
    adapter: PrismaPg | undefined;
}

const connectionString = `${process.env.LOCAL_DATABASE_URL}`;

function getPool() {
    if (!globalForPrisma.pool) {
        globalForPrisma.pool = new Pool({ connectionString });
    }
    return globalForPrisma.pool;
}

function getAdapter() {
    if (!globalForPrisma.adapter) {
        globalForPrisma.adapter = new PrismaPg(getPool());
    }
    return globalForPrisma.adapter;
}

function getBasePrisma() {
    if (!globalForPrisma.basePrisma) {
        globalForPrisma.basePrisma = new PrismaClient({ adapter: getAdapter() });
    }
    return globalForPrisma.basePrisma;
}

function createExtendedClient() {
    return getBasePrisma().$extends(withAccelerate());
}

const basePrisma = getBasePrisma();
const prisma = globalForPrisma.prisma || createExtendedClient();

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

export { prisma, basePrisma };