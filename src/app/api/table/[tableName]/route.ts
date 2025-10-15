// src/app/api/table/[tableName]/route.js

import mysql from 'mysql2/promise';
import { RowDataPacket } from 'mysql2';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ tableName: string }> }
) {
  // Extract the table name from the dynamic URL segment
  const { tableName } = await context.params;

  if (!tableName) {
    return NextResponse.json(
      { success: false, error: "Table name is required in the URL." },
      { status: 400 }
    );
  }

  let connection;

  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // The query to select all data from the specified table.
    // Using '??' prevents SQL injection by safely escaping the table name.
    const query = 'SELECT * FROM ??;';
    
    // We use .query() because .execute() does not support identifiers (??)
    const [rows] = await connection.query<RowDataPacket[]>(query, [tableName]);
    
    await connection.end();

    return NextResponse.json({
      success: true,
      tableName: tableName,
      data: rows,
    });

  } catch (error: any) {
    console.error(`DATABASE ERROR while fetching data from ${tableName}:`, error);

    // Provide a specific error if the table doesn't exist
    if (error.code === 'ER_NO_SUCH_TABLE') {
        return NextResponse.json(
          { success: false, error: `Table '${tableName}' does not exist.` },
          { status: 404 }
        );
    }
    
    // Generic error for any other issues
    return NextResponse.json(
      { success: false, error: "Failed to fetch data from the table." },
      { status: 500 }
    );
  }
}
