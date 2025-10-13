// lib/db.js
import mysql from 'mysql2/promise';

export async function getDBConnection() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT),
    });
    return connection;
  } catch (err) {
    console.error('Failed to connect to the database.', err);
    throw err;
  }
}
