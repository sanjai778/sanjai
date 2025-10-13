// src/app/api/blogscategories/[slug]/route.js

import mysql from 'mysql2/promise';
import { RowDataPacket } from 'mysql2';
import { NextResponse } from 'next/server';

interface Post extends RowDataPacket {
  ID: number;
  post_title: string;
  post_content: string;
  post_excerpt: string;
  post_date: Date;
  post_name: string;
  featured_image_url: string;
}

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
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
        p.ID, p.post_title, p.post_content, p.post_excerpt, p.post_date, p.post_name,
        image_meta.meta_value AS featured_image_url
      FROM wpsw_posts AS p
      INNER JOIN wpsw_term_relationships AS tr ON p.ID = tr.object_id
      INNER JOIN wpsw_term_taxonomy AS tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
      INNER JOIN wpsw_terms AS t ON tt.term_id = t.term_id
      LEFT JOIN wpsw_postmeta AS thumb_meta ON p.ID = thumb_meta.post_id AND thumb_meta.meta_key = '_thumbnail_id'
      LEFT JOIN wpsw_postmeta AS image_meta ON thumb_meta.meta_value = image_meta.post_id AND image_meta.meta_key = '_wp_attached_file'
      WHERE 
        p.post_type = 'post' AND p.post_status = 'publish' 
        AND tt.taxonomy = 'category' AND t.slug = ?
      ORDER BY p.post_date DESC;
    `;
    
    const [posts] = await connection.query<Post[]>(query, [slug]);
    await connection.end();

    return NextResponse.json({ success: true, data: posts });

  } catch (error) {
    console.error(`DATABASE ERROR for category slug ${slug}:`, error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch posts for this category." },
      { status: 500 }
    );
  }
}
