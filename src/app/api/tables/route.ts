import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

export async function GET() {
  let connection;

  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows] = await connection.query('SHOW TABLES;');
    await connection.end();

    const tables = (rows as any[]).map(row => Object.values(row)[0]);

    return NextResponse.json({ success: true, tables });

  } catch (error) {
    console.error('DATABASE ERROR:', error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch table list." },
      { status: 500 }
    );
  }
}
