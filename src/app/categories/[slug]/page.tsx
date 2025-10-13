// src/app/categories/[slug]/page.js

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Post {
  ID: number;
  post_title: string;
  post_content: string;
  post_date: string;
  post_name: string;
  featured_image_url: string | null;
}

// You can reuse the PostCard component from your main blogs page
function PostCard({ post }: { post: Post }) {
  const createExcerpt = (html: string, length: number) => {
    if (!html) return '';
    const text = html.replace(/<[^>]+>/g, '');
    return text.length <= length ? text : text.substring(0, length) + '...';
  };
  const imageUrl = post.featured_image_url ? `/uploads/${post.featured_image_url}` : null;
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
      {imageUrl && <img src={imageUrl} alt={post.post_title} style={{ width: '100%', borderRadius: '4px', marginBottom: '15px' }} />}
      <h2>{post.post_title}</h2>
      <p>{createExcerpt(post.post_content, 150)}</p>
      <Link href={`/blogs/${post.post_name}`} style={{ color: '#0070f3', fontWeight: 'bold' }}>Read More &rarr;</Link>
    </div>
  );
}


export default function SingleCategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchPosts = async () => {
        try {
          // THIS IS THE UPDATED URL
          const response = await fetch(`/api/blogscategories/${slug}`);
          const result = await response.json();
          if (result.success) {
            setPosts(result.data);
          } else {
            throw new Error(result.error);
          }
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchPosts();
    }
  }, [slug]);

  // ... rest of the component remains the same

  if (loading) return <p style={{ textAlign: 'center' }}>Loading posts...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>;
  const categoryName = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <Link href="/categories" style={{ marginBottom: '2rem', display: 'inline-block' }}>&larr; All Categories</Link>
      <h1>Posts in: {categoryName}</h1>
      {posts.length > 0 ? (
        posts.map(post => <PostCard key={post.ID} post={post} />)
      ) : (
        <p>No posts found in this category.</p>
      )}
    </div>
  );
}
