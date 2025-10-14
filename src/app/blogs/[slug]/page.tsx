// src/app/blogs/[slug]/page.js

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
  slug: string;
  featuredImage: string | null;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(`http://localhost:3000/api/blogs/${slug}`, { next: { revalidate: 60 } });

    if (!response.ok) {
      return null;
    }

    const post: Post = await response.json();
    return post;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function SinglePostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.featuredImage;

  return (
    <>
      <Header />
      <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '20px', fontFamily: 'sans-serif', position: 'relative', zIndex: 1 }}>
        <article>
          <Link href="/blogs" style={{ color: '#0070f3', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
            &larr; Back to All Posts
          </Link>
          
          <h1 style={{ fontSize: '2.5em', marginBottom: '0.5rem' }}>{post.title}</h1>
          
          {post.date && (
            <p style={{ fontStyle: 'italic', color: '#555', marginTop: 0 }}>
              Published on: {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
              })}
            </p>
          )}
          
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={post.title || 'Blog post image'} 
              style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '20px 0' }} 
            />
          )}
          
          <div 
            style={{ lineHeight: '1.7', fontSize: '1.1em' }}
            dangerouslySetInnerHTML={{ __html: post.content || '' }} 
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
