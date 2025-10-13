// src/app/blogs/[slug]/page.js

import { notFound } from 'next/navigation';
import Link from 'next/link';
// Import your new data functions
import { getAllPostSlugs, getPostBySlug } from 'src/lib/data';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Post {
  ID: number;
  post_title: string;
  post_content: string;
  post_date: Date;
  post_name: string;
  featured_image_url: string | null;
}

export async function generateStaticParams() {
  // Call the database function directly
  const posts = await getAllPostSlugs();
  return posts.map((post: { post_name: string }) => ({
    slug: post.post_name,
  }));
}

async function getPost(slug: string): Promise<Post | null> {
  // Call the database function directly
  const post = await getPostBySlug(slug);
  return post;
}

export default async function SinglePostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.featured_image_url 
    ? `/uploads/${post.featured_image_url}` 
    : '/images/placeholder.jpg';

  return (
    <>
      <Header />
      <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <article>
          <Link href="/blogs" style={{ color: '#0070f3', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
            &larr; Back to All Posts
          </Link>
          
          <h1 style={{ fontSize: '2.5em', marginBottom: '0.5rem' }}>{post.post_title}</h1>
          
          {post.post_date && (
            <p style={{ fontStyle: 'italic', color: '#555', marginTop: 0 }}>
              Published on: {new Date(post.post_date).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </p>
          )}
          
          {post.featured_image_url && (
            <img 
              src={imageUrl} 
              alt={post.post_title || 'Blog post image'} 
              style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '20px 0' }} 
            />
          )}
          
          <div 
            style={{ lineHeight: '1.7', fontSize: '1.1em' }}
            dangerouslySetInnerHTML={{ __html: post.post_content || '' }} 
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
