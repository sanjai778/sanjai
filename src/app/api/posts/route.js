// src/app/api/posts/route.js

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

    // This is the definitive query to get the featured image URL
    const query = `
      SELECT 
        p.ID,
        p.post_title,
        p.post_content,
        p.post_excerpt,
        p.post_date,
        p.post_name,
        image_meta.meta_value AS featured_image_url
      FROM 
        wpsw_posts AS p
      LEFT JOIN 
        wpsw_postmeta AS thumb_meta ON p.ID = thumb_meta.post_id AND thumb_meta.meta_key = '_thumbnail_id'
      LEFT JOIN 
        wpsw_postmeta AS image_meta ON thumb_meta.meta_value = image_meta.post_id AND image_meta.meta_key = '_wp_attached_file'
      WHERE 
        p.post_type = 'post' 
        AND p.post_status = 'publish'
      ORDER BY 
        p.post_date DESC;
    `;
    
    const [posts] = await connection.query(query);
    await connection.end();

    return NextResponse.json({ success: true, data: posts });

  } catch (error) {
    console.error("DATABASE API ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error. Check server logs for details." },
      { status: 500 }
    );
  }
}