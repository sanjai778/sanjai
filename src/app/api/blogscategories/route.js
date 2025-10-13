// src/app/api/blogscategories/route.js

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

    const query = `
      SELECT 
        t.term_id, t.name, t.slug, tt.count 
      FROM wpsw_terms AS t
      INNER JOIN wpsw_term_taxonomy AS tt ON t.term_id = tt.term_id
      WHERE tt.taxonomy = 'category' AND tt.count > 0
      ORDER BY t.name ASC;
    `;
    
    const [categories] = await connection.query(query);
    await connection.end();

    return NextResponse.json({ success: true, data: categories });

  } catch (error) {
    console.error("DATABASE ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch categories." },
      { status: 500 }
    );
  }
}