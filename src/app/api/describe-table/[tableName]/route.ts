// src/app/api/describe-table/[tableName]/route.js

import mysql from 'mysql2/promise';
import { RowDataPacket } from 'mysql2';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { tableName: string } }) {
  const { tableName } = params;

  if (!tableName) {
    return NextResponse.json(
      { success: false, error: "Table name is required." },
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

    // The query to describe the table structure
    const query = 'DESCRIBE ??;';
    
    // Use .query() for identifier substitution (??), not .execute()
    const [rows] = await connection.query<RowDataPacket[]>(query, [tableName]);
    
    await connection.end();

    return NextResponse.json({
      success: true,
      tableName: tableName,
      structure: rows,
    });

  } catch (error: any) {
    console.error(`DATABASE ERROR for table ${tableName}:`, error);

    if (error.code === 'ER_NO_SUCH_TABLE') {
        return NextResponse.json(
          { success: false, error: `Table '${tableName}' does not exist.` },
          { status: 404 }
        );
    }
    
    return NextResponse.json(
      { success: false, error: "Failed to fetch table structure." },
      { status: 500 }
    );
  }
}
