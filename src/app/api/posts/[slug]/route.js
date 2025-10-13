import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

// This MUST be a named export for the GET method.
export async function GET(request, { params }) {
  const { slug } = params;

  if (!slug) {
    return NextResponse.json({ success: false, error: "Post slug is required." }, { status: 400 });
  }

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
        p.ID, p.post_title, p.post_content, p.post_date, p.post_name,
        image_meta.meta_value AS featured_image_url
      FROM wpsw_posts AS p
      LEFT JOIN wpsw_postmeta AS thumb_meta ON p.ID = thumb_meta.post_id AND thumb_meta.meta_key = '_thumbnail_id'
      LEFT JOIN wpsw_postmeta AS image_meta ON thumb_meta.meta_value = image_meta.post_id AND image_meta.meta_key = '_wp_attached_file'
      WHERE p.post_type = 'post' AND p.post_status = 'publish' AND p.post_name = ?
      LIMIT 1;
    `;
    
    const [rows] = await connection.query(query, [slug]);
    await connection.end();

    if (rows.length === 0) {
      return NextResponse.json({ success: false, error: "Post not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: rows[0] });

  } catch (error) {
    console.error(`DATABASE ERROR for slug ${slug}:`, error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error." },
      { status: 500 }
    );
  }
}