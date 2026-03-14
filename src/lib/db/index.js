/**
 * Database layer – PostgreSQL (Jobzenter).
 *
 * Usage:
 *   import { query, getClient } from '@/lib/db';
 *   const { rows } = await query('SELECT * FROM users WHERE id = $1', [id]);
 *
 * For transactions, use getClient() and call client.release() when done.
 */
export { getPool, query, getClient } from "./pool.js";
export { getDbConfig } from "./config.js";
