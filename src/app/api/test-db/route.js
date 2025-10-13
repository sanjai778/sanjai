// src/app/api/list-tables/route.js

import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

export async function GET() {
  let connection;

  try {
    // Reading credentials securely from environment variables
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // The query to show all tables
    const query = 'SHOW TABLES;';
    const [rows] = await connection.execute(query);
    await connection.end();

    // The result from a 'SHOW TABLES' query is an array of objects,
    // where each object has a key like 'Tables_in_your_db_name'.
    // We can map this to a simple array of strings for a cleaner API response.
    const tableNames = rows.map(row => Object.values(row)[0]);

    return NextResponse.json({
      success: true,
      tables: tableNames,
    });

  } catch (error) {
    // If an error occurs, log it to the console for debugging
    console.error("DATABASE ERROR:", error);
    
    // Return a generic error response to the client
    return NextResponse.json(
      { success: false, error: "Failed to fetch tables from the database." },
      { status: 500 }
    );
  }
}