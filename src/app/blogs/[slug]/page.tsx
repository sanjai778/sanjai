// src/app/blogs/[slug]/page.js

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPostSlugs, getPostBySlug } from '../../../lib/data';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Blog } from '@/entity/Blog';

export async function generateStaticParams() {
  const posts = await getAllPostSlugs();
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

async function getPost(slug: string): Promise<Blog | null> {
  const post = await getPostBySlug(slug);
  return post;
}

export default async function SinglePostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.featuredImage 
    ? post.featuredImage 
    : '/images/placeholder.jpg';

  return (
    <>
      <Header />
      <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <article>
          <Link href="/blogs" style={{ color: '#0070f3', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
            &larr; Back to All Posts
          </Link>
          
          <h1 style={{ fontSize: '2.5em', marginBottom: '0.5rem' }}>{post.title}</h1>
          
          {post.date && (
            <p style={{ fontStyle: 'italic', color: '#555', marginTop: 0 }}>
              Published on: {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </p>
          )}
          
          {post.featuredImage && (
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
