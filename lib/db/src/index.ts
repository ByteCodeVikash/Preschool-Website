import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

const { Pool } = pg;

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn(
    "Warning: DATABASE_URL environment variable is not set. Database connections cannot be established.",
  );
}

export const pool = databaseUrl ? new Pool({ connectionString: databaseUrl }) : null as unknown as pg.Pool;
export const db = pool ? drizzle(pool, { schema }) : null as unknown as ReturnType<typeof drizzle>;

export * from "./schema";
